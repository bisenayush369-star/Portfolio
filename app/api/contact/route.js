import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("📧 Email request received from:", email);
    console.log("🔐 EMAIL_USER:", process.env.EMAIL_USER);
    console.log("🔐 EMAIL_PASS:", process.env.EMAIL_PASS ? "✓ Set" : "❌ NOT SET!");

    // Create transporter with Gmail App Password
    // IMPORTANT: Use Gmail App Password (not regular password)
    // Generate at: https://myaccount.google.com/apppasswords
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password (16-char generated password)
      },
    });

    // Verify transporter connection
    await transporter.verify();
    console.log("✓ SMTP connection verified");

    // Send email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender
      to: process.env.EMAIL_USER, // Your email (receiver)
      replyTo: email, // Reply goes to visitor's email
      subject: `🔔 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ff88;">New Message from Portfolio</h2>
          
          <div style="background: #0f0f0f; border: 1px solid #00ff88; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #00ff88;">Name:</strong> ${name}</p>
            <p><strong style="color: #00ff88;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong style="color: #00ff88;">Message:</strong></p>
            <p style="color: #00d9ff; white-space: pre-wrap; word-break: break-word;">${message}</p>
          </div>

          <p style="color: #888; font-size: 12px;">
            Reply directly to this email or click the Reply button to respond to ${name}.
          </p>
        </div>
      `,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    console.log("📌 Message ID:", info.messageId);

    return Response.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    console.error("Error details:", error);

    return Response.json(
      {
        success: false,
        error: error.message || "Failed to send email",
        details:
          process.env.NODE_ENV === "development"
            ? error.toString()
            : undefined,
      },
      { status: 500 }
    );
  }
}

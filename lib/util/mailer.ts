import { ContactFormType } from "@/types/contact-form.type";
import nodemailer from "nodemailer";

type sendEmailProp = {
  data: ContactFormType;
};

export const sendEmail = async ({ data }: sendEmailProp) => {
  //create a transporter with nodemailer
  //FOR GOOGLE MAIL
  //create a transporter with nodemailer

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.BUSINESS_EMAIL,
      pass: process.env.BUSINESS_APP_PASSWORD,
    },
  });

  const notificationEmail = {
    from: process.env.BUSINESS_EMAIL,
    to: process.env.BUSINESS_EMAIL,
    subject: `New Contact: ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #aa367c;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px;">
            ${data.message}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">Sent from your portfolio contact form</p>
      </div>
    `,
  };

  const confirmationEmail = {
    from: process.env.BUSINESS_EMAIL,
    to: data.email, // User's email
    subject: "Thanks for reaching out! 🚀",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #aa367c;">Thanks for contacting me!</h2>
        <p>Hi ${data.firstName},</p>
        <p>I've received your message and will get back to you within <strong>24 hours</strong>.</p>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Your message:</strong></p>
          <p style="font-style: italic;">"${data.message}"</p>
        </div>
        
        <p>Best regards,<br>
        <strong>FemiDev</strong><br>
        Full-Stack Developer</p>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          This is an automated confirmation. Please don't reply to this email.
        </p>
      </div>
    `,
  };

  try {
    const [notification, confirmation] = await Promise.all([
      transport.sendMail(notificationEmail),
      transport.sendMail(confirmationEmail),
    ]);

    // console.log("Notification sent:", notification.messageId);
    // console.log("Confirmation sent:", confirmation.messageId);

    return {
      success: true,
      notificationId: notification.messageId,
      confirmationId: confirmation.messageId,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown error occurred while sending emails";

    // console.error("❌ Email sending failed:", errorMessage);

    return {
      success: false,
      error: errorMessage,
    };
  }
};

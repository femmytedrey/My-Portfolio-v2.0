import { sendEmail } from "@/lib/util/mailer";
import { ContactFormType } from "@/types/contact-form.type";
import { response } from "@/types/error";
import { NextResponse, NextRequest } from "next/server";
import validator from "validator";

export const GET = () => {
  return NextResponse.json({
    message: "Contact API is working!",
    method: "GET",
    timestamp: new Date().toISOString(),
  });
};

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { firstName, lastName, email, phone, message } =
      reqBody as ContactFormType;

    //validate
    if (!validator.isEmail(email) || !email) {
      return response({
        success: false,
        message: "Please provide a valid email address",
        status: 400,
      });
    }

    if (!firstName || firstName.trim().length < 2) {
      return response({
        success: false,
        message: "First name must be at least 2 characters",
        status: 400,
      });
    }

    if (!lastName || lastName.trim().length < 2) {
      return response({
        success: false,
        message: "Last name must be at least 2 characters",
        status: 400,
      });
    }

    if (!phone || phone.trim().length < 7 || phone.trim().length > 15) {
      return response({
        success: false,
        message: "Please provide a valid phone number",
        status: 400,
      });
    }

    if (!message || message.trim().length < 10) {
      return response({
        success: false,
        message: "Message must be at least 10 characters",
        status: 400,
      });
    }

    const cleanData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    await sendEmail({ data: cleanData });

    return response({
      success: true,
      message: "Message sent successfully!",
      status: 200,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again.";
    return response({ success: false, message: errorMessage, status: 500 });
  }
};

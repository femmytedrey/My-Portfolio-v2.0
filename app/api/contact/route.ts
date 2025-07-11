import { sendEmail } from "@/helper/mailer";
import { ContactFormType } from "@/types/contact-form.type";
import { NextResponse, NextRequest } from "next/server";
const validator = require("validator");

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
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!firstName || firstName.trim().length < 2) {
      return NextResponse.json(
        { error: "First name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!lastName || lastName.trim().length < 2) {
      return NextResponse.json(
        { error: "Last name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 7 || phone.trim().length > 15) {
      return NextResponse.json(
        { error: "Please provide a valid phone number" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    const cleanData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    sendEmail({ data: cleanData });

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
};

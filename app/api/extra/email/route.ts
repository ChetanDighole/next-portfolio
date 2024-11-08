import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();
    await sendEmail(email, subject, message);
    return NextResponse.json({
      message: "email sent successfully",
      success: true,
    });
  } catch {
    return NextResponse.json({
      message: "catch at email post",
      success: false,
    });
  }
}

async function sendEmail(sender: string, subject: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: sender,
    to: process.env.EMAIL_USER,
    subject: subject,
    html: `customer mail := ${sender}, <br>
    customer message := ${message}
`,
  });
}

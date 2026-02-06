import { connectToDatabase } from "@/lib/mongodb";
import Message from "@/lib/models/message";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    await connectToDatabase();

    // 1. Save to MongoDB (Your records)
    const newMessage = await Message.create(body);

    // 2. Send to your Gmail (Notification)
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "mustafamelake@gmail.com",
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <h1>New Message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

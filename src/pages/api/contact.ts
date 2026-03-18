import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey =
      import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "SERVER_ERROR" }),
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "FIELDS_REQUIRED" }),
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "INVALID_EMAIL" }),
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "MESSAGE_TOO_LONG" }),
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "noreplay@acastillo.dev",
      to: "acastillo119@gmail.com",
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: "SEND_FAILED" }),
        { status: 500 },
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(
      JSON.stringify({ error: "UNKNOWN" }),
      { status: 500 },
    );
  }
};

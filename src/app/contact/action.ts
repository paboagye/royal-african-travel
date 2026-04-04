"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Validation
  if (!name || name.trim().length < 2) {
    return { status: "error", message: "Please enter your full name." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!message || message.trim().length < 10) {
    return {
      status: "error",
      message: "Please enter a message (at least 10 characters).",
    };
  }

  try {
    // TODO: Integrate Resend or SendGrid for email delivery
    // For now, log the submission (visible in server logs)
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "N/A",
      subject: subject?.trim() || "General Enquiry",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return {
      status: "success",
      message:
        "Thank you for your message! We'll get back to you within 24 hours.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      status: "error",
      message:
        "Something went wrong. Please try again or call us at 416.740.5617.",
    };
  }
}

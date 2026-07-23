import { z } from "zod";

// Single source of truth for the contact form's shape, shared by the
// frontend form (ContactSection) and the API route handler.
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(200),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export type ContactPayload = z.infer<typeof contactSchema>;

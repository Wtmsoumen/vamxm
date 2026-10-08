import axios from "axios";

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  service_id: string | null;
  subject: string;
  message: string;
}

export async function submitContact(payload: ContactSubmission): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  if (!baseUrl) throw new Error("Contact service is not configured.");

  try {
    await axios.post(`${baseUrl}/public/contact`, payload, {
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message;
      throw new Error(typeof message === "string" ? message : "We could not send your message. Please try again.");
    }
    throw error;
  }
}

export const contactServices = [
  { id: 1, label: "Website Development" },
  { id: 2, label: "Mobile App Development" },
  { id: 3, label: "Cyber Security" },
];

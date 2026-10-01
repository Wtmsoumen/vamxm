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

  const response = await fetch(`${baseUrl}/public/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null) as { message?: string } | null;
    throw new Error(body?.message || "We could not send your message. Please try again.");
  }
}

export const contactServices = [
  { id: "website-development", label: "Website Development" },
  { id: "mobile-app-development", label: "Mobile App Development" },
  { id: "cyber-security", label: "Cyber Security" },
];

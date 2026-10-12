export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Enter your name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (name.length > 100) errors.name = "Name must be 100 characters or fewer.";

  if (!email) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Enter a valid email address.";
  else if (email.length > 254) errors.email = "Email address is too long.";

  const digits = phone.replace(/\D/g, "");
  if (!phone) errors.phone = "Enter your phone number.";
  else if (digits.length < 7 || digits.length > 15 || !/^[+\d().\s-]+$/.test(phone)) errors.phone = "Enter a valid phone number.";

  if (!message) errors.message = "Enter a message.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (message.length > 5000) errors.message = "Message must be 5,000 characters or fewer.";

  return errors;
}

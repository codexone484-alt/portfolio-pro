import { supabase } from '@/lib/supabase';

export const PROJECT_TYPES = [
  'Full-Stack Web Application',
  'Backend Development / REST API',
  'AI Integration or AI Agent',
  'Real-Time Application',
  'API Integration',
  'Other',
] as const;

export const BUDGET_RANGES = ['Under $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+', 'Not sure yet'] as const;

export interface ContactFormValues {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  description: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const description = values.description.trim();

  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.';
  if (!values.projectType) errors.projectType = 'Please choose a project type.';
  if (description.length < 20) errors.description = 'Please describe your project in at least 20 characters.';
  else if (description.length > 5000) errors.description = 'Please keep the description under 5,000 characters.';

  return errors;
}

export async function submitContactMessage(values: ContactFormValues): Promise<void> {
  const { error } = await supabase.from('contact_messages').insert({
    name: values.name.trim(),
    email: values.email.trim(),
    project_type: values.projectType,
    budget: values.budget || null,
    description: values.description.trim(),
  });

  if (error) {
    throw new Error('Your message could not be sent. Please try again in a moment.');
  }
}

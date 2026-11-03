import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  submitContactMessage,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/lib/contact';

const emptyValues: ContactFormValues = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  description: '',
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    setSubmitError('');
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    try {
      await submitContactMessage(values);
      setValues(emptyValues);
      setStatus('success');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.');
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="card flex flex-col gap-6 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} required>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Your full name"
            className="field"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="you@company.com"
            className="field"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project type" error={errors.projectType} required>
          <select
            name="projectType"
            value={values.projectType}
            onChange={handleChange}
            className="field appearance-none"
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget (optional)">
          <select name="budget" value={values.budget} onChange={handleChange} className="field appearance-none">
            <option value="">Prefer not to say</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project description" error={errors.description} required>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          rows={6}
          placeholder="Tell me about your goals, the features you need and any deadlines."
          className="field resize-y"
          aria-invalid={Boolean(errors.description)}
        />
      </Field>

      {status === 'success' && (
        <div role="status" className="flex items-start gap-3 rounded-xl border border-success-500/30 bg-success-500/10 p-4 text-sm text-success-400">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>Thank you. Your message has been received and I will get back to you soon.</span>
        </div>
      )}

      {status === 'error' && (
        <div role="alert" className="rounded-xl border border-error-500/30 bg-error-500/10 p-4 text-sm text-error-400">
          {submitError}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-normal text-muted">Fields marked with * are required.</p>
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={16} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-secondary-400"> *</span>}
      </span>
      {children}
      {error && <span className="text-xs text-error-400">{error}</span>}
    </label>
  );
}

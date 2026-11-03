/*
# Restrict contact_messages to insert-only access

1. Modified Tables
- `contact_messages`: removed SELECT, UPDATE and DELETE privileges that Supabase grants by default to the `anon` and `authenticated` roles.

2. Security
- Visitors can still submit the contact form (INSERT, with the existing row policy).
- Visitors cannot read, change or delete any submitted message, even if a policy is added later by mistake.

3. Notes
- No data is changed or removed.
*/

REVOKE SELECT, UPDATE, DELETE ON contact_messages FROM anon, authenticated;

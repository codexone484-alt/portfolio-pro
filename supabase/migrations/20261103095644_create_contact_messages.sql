/*
# Create contact_messages table

1. New Tables
- `contact_messages`: messages submitted through the portfolio contact form.
  - `id` (uuid, primary key)
  - `name` (text, required, 1-100 chars)
  - `email` (text, required, basic email shape, max 254 chars)
  - `project_type` (text, required, 1-100 chars)
  - `budget` (text, optional, max 100 chars)
  - `description` (text, required, 10-5000 chars)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security enabled on `contact_messages`.
- Visitors (anon role) may only INSERT new messages. They cannot read, edit or delete any message.
- Only the project owner (via the dashboard or service role) can read submitted messages.
- Length and format checks are enforced in the database itself as a second line of defence.

3. Notes
- No existing tables are modified.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  project_type text NOT NULL CHECK (char_length(project_type) BETWEEN 1 AND 100),
  budget text CHECK (budget IS NULL OR char_length(budget) <= 100),
  description text NOT NULL CHECK (char_length(description) BETWEEN 10 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

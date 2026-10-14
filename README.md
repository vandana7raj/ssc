# PrepWise — SSC preparation platform

A responsive Next.js and TypeScript starter for SSC exam preparation. It includes a landing page, exam guides, subject paths, eight original beginner Maths lessons, an interactive timed/untimed quiz, and a browser-local learning dashboard.

## What is implemented

- Responsive navigation, reusable layout, metadata, sitemap and robots route.
- SSC CGL, CHSL, MTS, CPO and GD preparation guide pages. Cycle dates and eligibility are intentionally not asserted; check the current official [SSC website](https://ssc.gov.in/).
- Four subject paths, with complete beginner lesson content, solved examples, formulas and original quizzes for eight foundational Maths topics.
- Quiz start, timer, previous/next, question palette, answer clearing, mark for review, scoring, explanations and retry.
- Dashboard showing results stored in the current browser. This is not account sync or secure server persistence.
- Initial Supabase relational schema and private-record RLS policies in `supabase/migrations/001_initial_schema.sql`.

## Current limitations

Authentication, password recovery, server-side attempt scoring, admin CRUD/import, bookmarks, real cross-device progress, verified PYQ inventory, and current-affairs publishing are not connected yet. Non-Maths topic pages are learning outlines, not complete courses. No fabricated official papers, statistics, dates or current affairs are included. The public demo quizzes are original practice content; their answer keys are currently shipped to the browser, so they must not be used for secure scored examinations.

## Windows setup (PowerShell / VS Code)

1. Install a current Node.js LTS and Git. Open this folder in VS Code.
2. In the integrated terminal, run `npm install` then `npm run dev`.
3. Open `http://localhost:3000`. Run `npm run typecheck` and `npm run build` before deployment.

## Supabase setup

1. Create a Supabase project and copy its project URL and publishable/anon key into `.env.local` using the names in `.env.example`.
2. Apply `supabase/migrations/001_initial_schema.sql` in the Supabase SQL editor or with the Supabase CLI.
3. Seed published subjects and lesson records before switching the UI to database-backed content.
4. Add server-side authorization and admin-only policies before building admin writes. Keep the service-role secret server-only; never use it in a `NEXT_PUBLIC_` variable.

The current UI deliberately works without Supabase credentials. Auth and cloud progress require a later server integration and security review.

## GitHub

Initialize a repository with `git init`, add and commit the source, create an empty GitHub repository, then add its URL as `origin` and push the chosen branch. Never commit `.env.local` or Supabase secrets.

## Vercel deployment

Import the GitHub repository in Vercel, use the Next.js preset, and add `NEXT_PUBLIC_SITE_URL` with the verified production domain. Add Supabase URL/key environment variables if the integration has been enabled. Deploy the preview first, then promote it after reviewing routes and responsive layouts.

## Database notes

The schema has normalized exam, subject, topic, chapter, lesson, question, option, test, attempt, answer, bookmark, progress and source tables. RLS isolates student records by `auth.uid()`. Correct answers are deliberately excluded from client-facing read grants; a production quiz API should load keys server-side and score on trusted server code. The initial migration gives student-owned CRUD only; admin content policies and role claims are intentionally not permissive by default.

# AI Career Coach

An AI-powered career coaching platform built with Next.js, Clerk authentication, and PostgreSQL database.

## Features

- **Industry Insights**: Get personalized career guidance based on your industry
- **Resume Builder**: AI-powered resume creation and optimization
- **Cover Letter Generator**: Create tailored cover letters for job applications
- **Interview Preparation**: Practice with AI-generated interview questions
- **User Authentication**: Secure sign-in/sign-up with Clerk
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **Background Jobs**: Inngest
- **UI Components**: Radix UI, Lucide React icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aicareercoach
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
   - Set up your PostgreSQL database URL
   - Add your Clerk authentication keys
   - (Optional) Add Inngest keys for background jobs

5. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/aicareercoach"
DIRECT_DATABASE_URL="postgresql://username:password@localhost:5432/aicareercoach"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

# Inngest (Optional)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

## Setting up Authentication

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key and secret key to your `.env.local` file
4. Configure the sign-in and sign-up URLs in your Clerk dashboard

## Database Setup

1. Set up a PostgreSQL database (locally or using a service like Neon, Supabase, etc.)
2. Update the `DATABASE_URL` in your `.env.local` file
3. Run the database migrations:
```bash
npx prisma generate
npx prisma db push
```

## Troubleshooting

### Database Connection Issues
- Make sure your PostgreSQL server is running
- Verify your `DATABASE_URL` is correct
- Check that your database credentials are valid

### Tailwind CSS Issues
- Run `npm run dev` to ensure Tailwind is properly compiled
- Check for any invalid CSS classes in your components

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Portfolio Application
A dedicated Fullstack Portfolio application built with **Next.js**. It features a modern design styled with **Tailwind CSS**, secure **OAuth authentication** via NextAuth.js, and utilizes **Prisma** as the ORM to interact with the **PostgreSQL** database hosted on **Supabase**.

## Key Features

* **Fullstack Next.js:** Utilizes Next.js for SSR/SSG and creating integrated API Endpoints, enabling a single codebase for the entire application.
* **Modern Styling with Tailwind CSS:** Fast, utility-first CSS framework used for building custom, responsive designs rapidly.
* **Prisma ORM:** Uses **Prisma** as the modern ORM for type-safe database access and streamlined schema management.
* **PostgreSQL on Supabase:** The primary database is **PostgreSQL**, hosted and managed through the reliable **Supabase** platform.
* **NextAuth.js for OAuth:** Secure authentication system powered by **NextAuth.js**, supporting login via popular **OAuth Providers** (e.g., Google, GitHub, etc.).

---

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend/Backend** | **Next.js** (React Framework) |
| **Styling** | **Tailwind CSS** |
| **Database** | **PostgreSQL** (via **Supabase**) |
| **ORM** | **Prisma** |
| **Authentication** | **NextAuth.js** (for OAuth) |

---
## Getting Started

### 1. Clone the Repository

```bash
git clone [https://github.com/PortoStack/portfolio-app.git](https://github.com/PortoStack/portfolio-app.git)
cd portfolio-app
```

### 2. Install Dependencies
Use your preferred package manager (npm or yarn) to install the project dependencies:

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables
Create a file named `.env.local` in the root directory of the project and define the necessary variables:

```bash
# Supabase Database
DATABASE_URL="postgresql://[your-supabase-project-name]:[your-supabase-project-password]@[your-supabase-project-id].supabase.com:6543/postgres?pgbouncer=true"
REDIRECT_URL="postgresql://[your-supabase-project-name]:[your-supabase-project-password]@[your-supabase-project-id].supabase.com:5432/postgres"

# NextAuth.js
NEXT_PUBLIC_EMAIL=your-email@example.com
NEXT_PUBLIC_URL=https://[your-api-url].com

# OAuth Provider (Example: Google Provider)
GOOGLE_CLIENT_ID=****************
GOOGLE_CLIENT_SECRET=****************
```

Note: You must set up your Project ID, Service Role Key in Supabase, and configure the OAuth Credentials from your chosen provider.

### 4. Setup Database with Prisma
Once the DATABASE_URL is configured, run the following commands to initialize your database schema and generate the Prisma Client:

```bash
# Apply migrations to the database based on your schema.prisma file
npx prisma migrate dev --name init

# Generate the Prisma Client (for type-safe database queries in Next.js)
npx prisma generate
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to view the application.

## Database Schema
This project utilizes a PostgreSQL database on Supabase. The expected core structure includes:

- users: Table to store user information authenticated via NextAuth.

- projects: Table for storing details of portfolio items (name, description, links, images, etc.).

- skills: Table for managing and organizing technical skills and proficiencies.

## Deployment
The easiest way to deploy this Next.js application is by using Vercel, the creators of Next.js.

### Deploy to Vercel
Click the button below to instantly deploy a copy of this project to your Vercel account:

### Configuration Steps:

1. Connect GitHub: Vercel will prompt you to connect your GitHub account.

2. Environment Variables: You must provide all the necessary environment variables (DATABASE_URL, NEXTAUTH_SECRET, and OAuth keys) in the Vercel project settings during deployment.

3. NEXTAUTH_URL: Ensure the NEXTAUTH_URL variable in Vercel is set to your production domain (e.g., https://my-portfolio-app.vercel.app).

## License
This project is licensed under the MIT License - see the dedicated [LICENSE](LICENSE) file for details.

# 📘 Helper AI — Your Personal AI Career Assistant

Helper AI is a full-stack AI-powered web application that helps users generate **professional resumes, personalized cover letters, interview preparation content, and skill recommendations** using large language models. Built with **Next.js, Clerk, Prisma, Gemini AI, Inngest, TailwindCSS, and shadcn/ui**, it provides a modern UI and scalable architecture suitable for production-level deployment.

---

## 🚀 Features

### 🔐 Authentication (Clerk)
- Secure Sign-in / Sign-up  
- Middleware-based session handling  
- Smooth onboarding redirection  

### 🧑‍💼 User Onboarding
- Collects: name, experience, skills, job role, and preferences  
- Validated using **React Hook Form + Zod**  
- Stored through **Prisma + Neon Postgres**

### 🤖 AI-Powered Tools
- **AI Resume Builder**  
- **AI Cover Letter Generator**  
- **Mock Interview Q&A Generator**  
- **Industry Insights**  
- **Skill Recommendations**

### ⚙️ Background Jobs (Inngest)
- Handles long-running AI workflows  
- Event-driven execution  
- Automatic retries  

### 🗂️ Database (Prisma + Neon/Postgres)
Stores:
- User profile  
- Resume data  
- Cover letters  
- Interview sets  
- Skill recommendations  
- AI history  

### 🎨 Frontend (Next.js + Tailwind + shadcn/ui)
- Modern, responsive UI  
- Dark / Light mode  
- Component-driven architecture  

### ☁️ Deployment
- Hosted on **Vercel**  
- GitHub CI/CD integration  

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, TailwindCSS, shadcn/ui |
| Auth | Clerk |
| AI Engine | Google Gemini |
| Database | Neon (Postgres) + Prisma |
| Backend | Next.js API Routes + Server Actions |
| Background Jobs | Inngest |
| Deployment | Vercel |
| Visualization | Recharts |

---

## 📐 Architecture Overview

**Flow:**  
User → Clerk Auth → Onboarding → Dashboard → Server Actions → Gemini AI → Prisma DB → UI Display → Optional Inngest workflow

---

## 🛠 Installation & Setup

### 1. Clone Repository
```sh
git clone https://github.com/Homelander-2829/HelperAI
cd HelperAI
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Environment Variables
Create a `.env` file:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=

GEMINI_API_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

### 4. Run Database Migrations
```sh
npx prisma migrate dev
```

### 5. Start Development Server
```sh
npm run dev
```

---

## 💡 Why Helper AI?
- Production-level modern stack  
- Real AI workflows (resume, cover letter, interviews, skills)  
- Authentication + database + background workers  
- Clean and scalable architecture  
- Professional UI  

---

## 🤝 Contributing
Contributions and suggestions are welcome!

---

## 📄 License
MIT License.

# 🚀 Mustafa.dev — Full-Stack Portfolio

A professional, production-grade portfolio showcasing full-stack work, built with the latest **Next.js 16** App Router. It focuses on performance, SEO, clean architecture, and a polished, interactive UI.

🔗 **[Live Demo](https://my-next-js-portfolio-42pl.vercel.app/)**

---

## ✨ Features

- **Full-Stack Contact Pipeline** — a Next.js API route validates submissions with **Zod**, persists them to **MongoDB** via **Mongoose**, and sends a notification email through the **Resend API**.
- **Interactive Skills Board** — drag-and-drop skill reordering powered by **dnd-kit**.
- **Motion & Micro-interactions** — scroll-reveal and hover animations via **Framer Motion**.
- **Type-Safe by Design** — end-to-end **TypeScript**, with a shared `ContactPayload` type linking the form and the API.
- **Accessible UI Primitives** — buttons, cards, inputs, and badges built on **Radix UI** (shadcn/ui) + **Tailwind CSS v4**.
- **Responsive Architecture** — optimized for mobile, tablet, and desktop.

---

## ⚡ Performance (Lighthouse)

- **SEO:** 100 / 100
- **Best Practices:** 100 / 100
- **Accessibility:** 89 / 100
- **Performance:** Optimized for Server-Side Rendering (SSR).

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, `class-variance-authority`, `tailwind-merge` |
| **UI** | Radix UI (shadcn/ui), lucide-react icons |
| **Animation** | Framer Motion, dnd-kit |
| **Database** | MongoDB + Mongoose |
| **Validation** | Zod |
| **Email** | Resend |
| **Deployment** | Vercel (CI/CD) |

---

## 💻 Local Development

### 1. Clone the repository

```bash
git clone https://github.com/MustafaMelake/My-Next.js-Portfolio.git
cd My-Next.js-Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```bash
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase with ESLint |

---

## 📁 Project Structure

```
app/
  api/contact/route.ts   # Contact API: validate → persist → email
  layout.tsx             # Root layout + metadata
  page.tsx               # Landing page composition
components/              # Section + UI components
lib/
  mongodb.ts             # Cached Mongoose connection
  models/Message.ts      # Message schema
  validation/contact.ts  # Shared Zod schema + ContactPayload type
```

---

Built with **Next.js 16** + **Tailwind CSS v4**.

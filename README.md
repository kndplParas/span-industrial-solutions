# SPAN Industrial Solutions Pvt Ltd - Corporate Website & Backend

A clean, professional, and responsive single-page corporate website and backend API for **SPAN Industrial Solutions Pvt Ltd** (ISO 9001:2015 Certified).

---

## Tech Stack

- **Frontend**: React 18/19, TypeScript, Vite, Vanilla CSS Design System, Lucide Icons.
- **Backend**: Node.js, Express.js, TypeScript, PostgreSQL (`pg`), Helmet, Rate Limiting, CORS.
- **Database**: PostgreSQL (with automated schema migration and resilient in-memory fallback).

---

## 4 Core Industrial Verticals

1. **Workforce Management Solutions**
   - Matching employers with qualified candidates based on job specifications, technical skill, and experience.
   - Grounded in proven US staffing standards and structured screening methodology.
2. **Guaranteed Saving Program (GET SHRINK)**
   - 5 practical tools targeting 20% to 30% reduction in manufacturing costs (as stated by company).
   - Zero Capex required. Targets raw material, manpower, electricity, overheads, and cost of poor quality.
3. **Experts Training for Industries**
   - Managed shop-floor and engineering upskilling led by experienced industry veterans.
   - 10 core modules: Kaizen, 7QC Tools, 5S Concept, Industrial Drawing Study, GD&T, Inventory Control, Functional Analysis, Quality Management, Production Management, APQP.
4. **Industrial / Corporate Video Solutions**
   - Transform complex industrial workflows and safety mandates into clear, engaging visual media.
   - Deliverables: Company profile videos, plant walkthroughs, safety compliance modules, training videos, animated explainers, on-site shooting, and post-production editing.

---

## Project Structure

```
SPAN/
├── client/                     # Frontend React + TypeScript application
│   ├── public/                 # Static assets (brand favicon, icons)
│   ├── src/
│   │   ├── components/         # Header, Hero, About, Services, ServiceModal,
│   │   │                       # VideoSolutions, WhySpan, Contact, Footer, SpanLogo
│   │   │   styles/             # Component-specific styles (components.css)
│   │   ├── types/              # Client TypeScript interfaces (inquiry.ts)
│   │   ├── App.tsx             # Root page layout and section orchestration
│   │   ├── index.css           # Global design system tokens and resets
│   │   └── main.tsx            # Application entrypoint
│   └── vite.config.ts          # Vite build config with /api proxy to backend
│
├── server/                     # Backend Express + TypeScript API
│   ├── src/
│   │   ├── config/             # Environment, db pool connection & schema.sql
│   │   ├── controllers/        # inquiryController.ts (POST inquiries, health)
│   │   ├── middleware/         # errorHandler.ts, rateLimiter.ts
│   │   ├── routes/             # inquiryRoutes.ts, healthRoutes.ts
│   │   ├── services/           # inquiryService.ts
│   │   ├── types/              # Server-side TypeScript interfaces
│   │   ├── utils/              # logger.ts
│   │   ├── validators/         # inquiryValidator.ts (input validation & sanitization)
│   │   └── index.ts            # Server entrypoint with graceful shutdown
│   └── tsconfig.json           # Server TypeScript configuration
│
├── shared/                     # Shared TypeScript contracts and constants
│   └── types.ts
├── .env.example                # Sample environment configuration
├── .env                        # Local development environment configuration
└── package.json                # Root orchestration scripts
```

---

## Quick Start & Run Commands

### 1. Install Dependencies
Run in root directory:
```bash
npm install
npm install --prefix server
npm install --prefix client
```

### 2. Start Both Services (Concurrent Dev Mode)
```bash
npm run dev
```
- Frontend will be available at: `http://localhost:5173/`
- Backend API will be available at: `http://localhost:5000/`

Alternatively, run each service independently:
```bash
# Terminal 1: Backend
npm run dev:server

# Terminal 2: Frontend
npm run dev:client
```

### 3. Production Build
```bash
npm run build
```

---

## Database Setup (PostgreSQL)

1. Ensure PostgreSQL is installed and running.
2. Create a database (e.g. `spandb`):
   ```sql
   CREATE DATABASE spandb;
   ```
3. Update `DATABASE_URL` in `.env`:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/spandb
   ```
4. The server automatically verifies and executes the table initialization on launch from `server/src/config/schema.sql`:
   ```sql
   CREATE TABLE IF NOT EXISTS inquiries (
       id SERIAL PRIMARY KEY,
       name VARCHAR(150) NOT NULL,
       company VARCHAR(150) NOT NULL,
       email VARCHAR(255) NOT NULL,
       phone VARCHAR(50) NOT NULL,
       service VARCHAR(100) NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
   ```

*Note: If PostgreSQL is not active or credentials are not yet set, the server gracefully activates an in-memory fallback store so the website and form submission remain 100% functional during local testing.*

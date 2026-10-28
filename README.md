# Kavishi Hirunodhya Rajasekara | Portfolio

> Third-year Software Engineering undergraduate at NSBM Green University and cloud & DevOps enthusiast, building reliable, automated, and observable systems.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Certification: Azure AZ-900](https://img.shields.io/badge/Certification-Azure%20AZ--900-0078D4.svg)](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/)
[![GPA](https://img.shields.io/badge/GPA-3.78%20%2F%204.00-emerald.svg)](#education)
[![Built with: React + Vite + Tailwind](https://img.shields.io/badge/Stack-React%20%7C%20Tailwind%20%7C%20Vite-06b6d4.svg)](#portfolio-tech-stack)

[GitHub](https://github.com/Hirunodhya2003) &bull; [Email](mailto:kavishirajasekara@gmail.com) &bull; [LinkedIn](https://linkedin.com/in/kavishi-rajasekara)

---

## 👋 Introduction

Hi, I'm **Kavishi Hirunodhya Rajasekara**, a third-year BSc (Hons) Software Engineering undergraduate at **NSBM Green University** with a GPA of **3.78 / 4.00**.

I enjoy the full journey of a piece of software: **writing the application**, **packaging it in containers**, **deploying it to the cloud**, and **watching it run through monitoring dashboards**. My projects cover AWS, Terraform, Docker, Jenkins, Prometheus and Grafana, alongside Java / Spring Boot microservices and the MERN stack.

I am **Microsoft Azure Fundamentals (AZ-900)** certified and looking for an internship in **Cloud Engineering** or **DevOps**, where I can contribute to automated, reliable cloud systems and keep learning from experienced engineers.

---

## 📌 Sections Overview

| Section | What it shows |
|---|---|
| **Hero** | Profile portrait, dynamic rotating role, GPA badge, AZ-900 pill, live terminal simulator, and quick CTAs |
| **About** | Academic background, GPA 3.78, internship goals, and the 4-step software journey (Write &bull; Package &bull; Deploy &bull; Observe) |
| **Architecture & Pipeline** | Interactive CI/CD & Observability flow (GitHub &rarr; Jenkins &rarr; Docker &rarr; EC2 &rarr; Prometheus) and Terraform 3-tier AWS infrastructure |
| **Skills** | Grouped cards for Cloud & Infra, DevOps & Automation, Monitoring, Languages, Frameworks, Databases, and Core Concepts |
| **Projects** | Project cards with tech stack badges, GitHub links, architecture previews, and interactive detail modals |
| **Education & Certification** | NSBM Green University timeline, Rathnawali College G.C.E. A/L, and official Microsoft Azure Fundamentals (AZ-900) showcase |
| **Contact** | Direct email copy with toast confirmation, GitHub & LinkedIn links, and interactive message composer |
| **Footer** | Quick navigation, system specs, copyright, and smooth back-to-top button |

---

## 🚀 Featured Projects

### 1. Employee Management DevOps Project
*Jenkins &bull; Docker &bull; AWS EC2 &bull; Prometheus &bull; Grafana &bull; Spring Boot &bull; React &bull; MySQL 8.4*
- **CI/CD Automation:** Jenkins pipeline triggered by GitHub webhooks: checkout, build, test, Docker build, and deploy with Docker Compose to AWS EC2.
- **Containerization:** Containerized frontend, backend, and database, with Nginx as a reverse proxy and a persistent Docker volume for MySQL.
- **Observability:** Prometheus and Grafana dashboards for infrastructure (CPU, RAM, disk via Node Exporter) and application metrics (request rate, latency, JVM memory via Spring Boot Actuator).
- **Security:** Secrets kept out of Git using environment variables and Jenkins credentials.
- 🔗 [View on GitHub](https://github.com/Hirunodhya2003/employee-management-devops)

### 2. Terraform AWS Three-Tier Architecture
*Terraform &bull; AWS VPC &bull; ALB &bull; EC2 &bull; RDS MySQL &bull; Security Groups*
- **IaC Provisioning:** A three-tier AWS infrastructure provisioned entirely with Terraform.
- **Networking:** Custom VPC (10.0.0.0/16) with public and private subnets across two Availability Zones in `eu-north-1`.
- **Traffic Separation:** Internet-facing Application Load Balancer routing to a private EC2 backend and a private, non-public RDS MySQL database.
- **Least-Privilege Security:** Chained security groups: the backend accepts traffic only from the load balancer, and the database only from the backend.
- 🔗 [View on GitHub](https://github.com/Hirunodhya2003)

### 3. Azure Three-Tier E-Commerce Platform *(In Progress)*
*React &bull; Spring Boot &bull; MySQL &bull; Docker &bull; Azure Container Registry*
- Spring Boot Product CRUD REST API with a React frontend and MySQL database.
- Backend containerized with Docker and published to Azure Container Registry (ACR).
- Prometheus and Grafana monitoring started; Terraform infrastructure and GitHub Actions CI/CD planned.
- 🔗 [View on GitHub](https://github.com/Hirunodhya2003)

### 4. Salon Booking System
*Java &bull; Spring Boot &bull; MySQL &bull; Microservices &bull; Spring Cloud Gateway &bull; Eureka*
- Microservices for users, salons, bookings, payments, categories, and service offerings.
- Spring Cloud Gateway for routing, Eureka for service discovery, JWT authentication, and a React (Vite) frontend.
- 🔗 [View on GitHub](https://github.com/Hirunodhya2003)

### 5. Computer Shop
*MongoDB &bull; Express.js &bull; React &bull; Node.js (MERN)*
- Full-stack computer shop application built with the MERN stack.
- 🔗 [View on GitHub](https://github.com/Hirunodhya2003)

---

## 🛠️ Skills & Tech Stack

| Category | Technologies |
|---|---|
| **Cloud & Infrastructure** | AWS (EC2, VPC, Subnets, Security Groups, ALB, RDS), Microsoft Azure (Azure Fundamentals, ACR), Terraform |
| **DevOps & Automation** | Docker, Docker Compose, Jenkins, GitHub Webhooks, GitHub Actions, Nginx, Linux, Git / GitHub |
| **Monitoring & Observability** | Prometheus, Grafana, Node Exporter, Spring Boot Actuator |
| **Languages** | Java, Python, C#, JavaScript |
| **Frameworks** | Spring Boot, .NET, React, Node.js, Express.js |
| **Databases** | MySQL, MongoDB |
| **Core Concepts** | Microservices, REST APIs, Three-Tier Architecture, Infrastructure as Code, JWT Authentication |

---

## 🎓 Education & 📜 Certification

- **BSc (Hons) in Software Engineering**, NSBM Green University  
  *Third-year undergraduate | GPA: 3.78 / 4.00*
- **G.C.E. Advanced Level**, Physical Science Stream (Mathematics), Rathnawali College, Gampaha
- **Microsoft Certified: Azure Fundamentals (AZ-900)**  
  *Foundational knowledge of cloud concepts, Azure services, security, compliance, pricing, and support.*

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Kavishi_Rajasekara_CV.pdf    # Downloadable CV
│   ├── profile.png                  # Professional portrait
│   ├── kavishi.png                  # Backup asset
│   ├── azure-badge.svg              # AZ-900 visual badge
│   ├── favicon.svg                  # Cloud + terminal favicon
│   └── projects/                    # SVG Architecture diagrams
│       ├── employee-devops.svg
│       └── terraform-aws.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky header with active highlight & theme toggle
│   │   ├── Hero.jsx                 # Intro, portrait with glow, stats, live terminal
│   │   ├── About.jsx                # Background, degree, and 4 journey pillars
│   │   ├── PipelineVisualizer.jsx   # Interactive DevOps & 3-Tier architecture diagram
│   │   ├── Skills.jsx               # Grouped category cards with filter tabs
│   │   ├── Projects.jsx             # Project grid with architecture thumbnails & modal
│   │   ├── Education.jsx            # University and school timeline
│   │   ├── Certification.jsx        # Microsoft Azure AZ-900 badge & domain topics
│   │   ├── Contact.jsx              # One-click copy email, social links, message sender
│   │   ├── Footer.jsx               # Navigation, system specs, back-to-top
│   │   └── Icons.jsx                # Clean SVG brand icons (GitHub, LinkedIn, Azure)
│   ├── data/
│   │   └── content.js               # Central source of truth for all content & data
│   ├── App.jsx                      # App root with dark/light mode provider
│   ├── main.jsx                     # Vite entry point
│   └── index.css                    # Tailwind directives and custom animations
├── index.html                       # SEO meta tags, Google Fonts, OpenGraph
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

> **Note:** Keeping all text in `src/data/content.js` allows updating projects, skills, and links without modifying component code.

---

## ▶️ Run Locally

### Prerequisites
- Node.js 18 or later
- npm 9 or later

```bash
# 1. Clone the repository
git clone https://github.com/Hirunodhya2003/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## ☁️ Deployment

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Keep the default Vite build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Vercel will automatically redeploy on every push to `main`.

### Deploying to GitHub Pages
1. In `vite.config.js`, set the base path to your repository name:
   ```javascript
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   })
   ```
2. Build and publish the `dist` directory via GitHub Actions or the `gh-pages` package.

---

## 📬 Contact

- **Email:** [kavishirajasekara@gmail.com](mailto:kavishirajasekara@gmail.com)
- **GitHub:** [Hirunodhya2003](https://github.com/Hirunodhya2003)
- **LinkedIn:** [Kavishi Rajasekara](https://linkedin.com/in/kavishi-rajasekara)

---

## 📄 License

&copy; 2026 Kavishi Hirunodhya Rajasekara. All rights reserved.

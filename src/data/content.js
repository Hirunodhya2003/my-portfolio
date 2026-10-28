export const personalData = {
  name: "Kavishi Hirunodhya Rajasekara",
  preferredName: "Kavishi Rajasekara",
  title: "Cloud & DevOps Enthusiast",
  subtitle: "Third-year Software Engineering Undergraduate at NSBM Green University",
  bio: "Third-year Software Engineering undergraduate at NSBM Green University and cloud & DevOps enthusiast, building reliable, automated, and observable systems.",
  heroDescriptions: [
    "Cloud & DevOps Enthusiast",
    "BSc (Hons) Software Engineering Undergrad",
    "Microsoft Azure (AZ-900) Certified",
    "IaC & Observability Builder"
  ],
  introduction: [
    "Hi, I'm Kavishi Hirunodhya Rajasekara, a third-year BSc (Hons) Software Engineering undergraduate at NSBM Green University with a GPA of 3.78 / 4.00.",
    "I enjoy the full journey of a piece of software: writing the application, packaging it in containers, deploying it to the cloud, and watching it run through monitoring dashboards. My projects cover AWS, Terraform, Docker, Jenkins, Prometheus and Grafana, alongside Java / Spring Boot microservices and the MERN stack.",
    "I am Microsoft Azure Fundamentals (AZ-900) certified and looking for an internship in Cloud Engineering or DevOps, where I can contribute to automated, reliable cloud systems and keep learning from experienced engineers."
  ],
  status: "Available for Cloud & DevOps Internship",
  gpa: "3.78 / 4.00",
  email: "kavishirajasekara@gmail.com",
  github: "https://github.com/Hirunodhya2003",
  linkedin: "https://linkedin.com/in/kavishi-rajasekara",
  profileImage: "/profile.png",
  cvPath: "/Kavishi_Rajasekara_CV.pdf",
  stats: [
    { label: "GPA", value: "3.78 / 4.0" },
    { label: "Certification", value: "AZ-900" },
    { label: "Architecture", value: "3-Tier AWS & Azure" },
    { label: "Focus", value: "Cloud & DevOps" }
  ]
};

export const skillsData = [
  {
    category: "Cloud & Infrastructure",
    icon: "Cloud",
    color: "from-sky-500 to-blue-600",
    description: "Cloud infrastructure provisioning, networking, compute, and managed database services.",
    skills: [
      { name: "AWS", details: "EC2, VPC, Subnets, Security Groups, ALB, RDS" },
      { name: "Microsoft Azure", details: "Azure Fundamentals, Container Registry (ACR)" },
      { name: "Terraform", details: "Infrastructure as Code (IaC), State, Modules, Outputs" }
    ]
  },
  {
    category: "DevOps & Automation",
    icon: "Workflow",
    color: "from-cyan-500 to-teal-600",
    description: "CI/CD automation pipelines, container orchestration, reverse proxies, and version control.",
    skills: [
      { name: "Docker", details: "Multi-stage builds, Containerization" },
      { name: "Docker Compose", details: "Multi-container orchestration" },
      { name: "Jenkins", details: "Declarative CI/CD pipelines, Webhook triggers" },
      { name: "GitHub Actions", details: "Automated test & delivery workflows" },
      { name: "Nginx", details: "Reverse proxy, Load routing, SSL handling" },
      { name: "Linux", details: "Shell scripting, Server administration, Systemd" },
      { name: "Git / GitHub", details: "Branching strategies, Webhooks, Code collaboration" }
    ]
  },
  {
    category: "Monitoring & Observability",
    icon: "Activity",
    color: "from-emerald-500 to-green-600",
    description: "Metrics collection, real-time telemetry, visual monitoring dashboards, and alert tracking.",
    skills: [
      { name: "Prometheus", details: "Time-series metrics scraping, Alert rules" },
      { name: "Grafana", details: "Custom telemetry dashboards, System observability" },
      { name: "Node Exporter", details: "Host CPU, RAM, Disk, Network metrics" },
      { name: "Spring Boot Actuator", details: "JVM memory, Latency, Request rates, Health endpoints" }
    ]
  },
  {
    category: "Languages",
    icon: "Code",
    color: "from-indigo-500 to-purple-600",
    description: "Multi-paradigm programming languages for cloud automation and application engineering.",
    skills: [
      { name: "Java", details: "OOP, Java 17, Streams, Concurrency" },
      { name: "Python", details: "Scripting, Automation, Systems scripting" },
      { name: "JavaScript", details: "ES6+, Async/Await, Web frontend & Node" },
      { name: "C#", details: "Object-oriented programming, .NET architecture" }
    ]
  },
  {
    category: "Frameworks",
    icon: "Layers",
    color: "from-violet-500 to-fuchsia-600",
    description: "Enterprise backend microservices frameworks, runtime environments, and modern UI stacks.",
    skills: [
      { name: "Spring Boot", details: "REST APIs, Security, Microservices, Spring Cloud" },
      { name: "React", details: "Vite, Hooks, Component architecture, State" },
      { name: "Node.js", details: "Asynchronous runtime, Event loop, Backend services" },
      { name: "Express.js", details: "RESTful endpoints, Middleware pipeline" },
      { name: ".NET", details: "Enterprise backend development" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    color: "from-amber-500 to-orange-600",
    description: "Relational and document storage solutions for scalable, persistent data layers.",
    skills: [
      { name: "MySQL", details: "Relational schema design, Indexing, Docker volumes" },
      { name: "MongoDB", details: "Document collections, Aggregations, NoSQL modeling" }
    ]
  },
  {
    category: "Core Concepts",
    icon: "Cpu",
    color: "from-blue-500 to-cyan-500",
    description: "Architectural patterns and engineering paradigms applied across all projects.",
    skills: [
      { name: "Microservices", details: "Service discovery, API Gateways, Decoupled components" },
      { name: "REST APIs", details: "Stateless HTTP endpoints, CRUD operations, OpenAPI" },
      { name: "Three-Tier Architecture", details: "Presentation, Logic, and Data separation" },
      { name: "Infrastructure as Code", details: "Reproducible cloud definitions via Terraform" },
      { name: "JWT Authentication", details: "Stateless security tokens, RBAC, Protected endpoints" }
    ]
  }
];

export const projectsData = [
  {
    id: "employee-management-devops",
    title: "Employee Management DevOps Project",
    subtitle: "End-to-End Automated CI/CD & Observability Pipeline",
    category: "DevOps & Cloud",
    image: "/projects/employee-devops.svg",
    techStack: ["Jenkins", "Docker", "AWS EC2", "Prometheus", "Grafana", "Spring Boot", "React", "MySQL 8.4", "Nginx"],
    shortDescription: "An end-to-end DevOps workflow for an Employee Management CRUD application (React + Vite, Spring Boot on Java 17, MySQL 8.4).",
    highlights: [
      "Jenkins pipeline triggered by GitHub webhooks: checkout, build, test, Docker build, and deploy with Docker Compose to AWS EC2.",
      "Containerized frontend, backend, and database, with Nginx as a reverse proxy and a persistent Docker volume for MySQL.",
      "Prometheus and Grafana dashboards for infrastructure (CPU, RAM, disk via Node Exporter) and application metrics (request rate, latency, JVM memory via Spring Boot Actuator).",
      "Secrets kept out of Git using environment variables and Jenkins credentials."
    ],
    github: "https://github.com/Hirunodhya2003/employee-management-devops",
    featured: true,
    badge: "Featured DevOps Pipeline",
    status: "Completed",
    pipelineFlow: [
      { step: "GitHub Webhook", desc: "Push to repo triggers automated webhook event" },
      { step: "Jenkins CI", desc: "Check out code, maven test, compile & build artifacts" },
      { step: "Dockerize", desc: "Build optimized multi-tier containers (UI, API, DB)" },
      { step: "AWS EC2 Deploy", desc: "Deploy via Docker Compose behind Nginx reverse proxy" },
      { step: "Observability", desc: "Prometheus scrapes Actuator & Node Exporter -> Grafana dashboards" }
    ]
  },
  {
    id: "terraform-aws-three-tier",
    title: "Terraform AWS Three-Tier Architecture",
    subtitle: "Production-Grade Infrastructure as Code (IaC)",
    category: "DevOps & Cloud",
    image: "/projects/terraform-aws.svg",
    techStack: ["Terraform", "AWS VPC", "ALB", "EC2", "RDS MySQL", "Security Groups"],
    shortDescription: "A three-tier AWS infrastructure provisioned entirely with Terraform across high-availability zones.",
    highlights: [
      "VPC (10.0.0.0/16) with public and private subnets across two Availability Zones in eu-north-1.",
      "Internet-facing Application Load Balancer routing to a private EC2 backend and a private, non-public RDS MySQL database.",
      "Chained security groups: the backend accepts traffic only from the load balancer, and the database only from the backend.",
      "Terraform variables and outputs, with credentials kept out of Git."
    ],
    github: "https://github.com/Hirunodhya2003",
    featured: true,
    badge: "Cloud Infrastructure",
    status: "Completed",
    architectureHighlights: [
      "Multi-AZ Redundancy (eu-north-1a / eu-north-1b)",
      "Strict Least-Privilege Security Group Chaining",
      "Isolated Database in Private Subnet",
      "Automated State & Variable Orchestration"
    ]
  },
  {
    id: "azure-three-tier-ecommerce",
    title: "Azure Three-Tier E-Commerce Platform",
    subtitle: "Containerized Cloud REST API & Registry Deployment",
    category: "DevOps & Cloud",
    techStack: ["React", "Spring Boot", "MySQL", "Docker", "Azure Container Registry", "Prometheus", "Grafana"],
    shortDescription: "Spring Boot Product CRUD REST API with a React frontend and MySQL database containerized and published to Azure Container Registry.",
    highlights: [
      "Spring Boot Product CRUD REST API with a React frontend and MySQL database.",
      "Backend containerized with Docker and published to Azure Container Registry (ACR).",
      "Prometheus and Grafana monitoring started; Terraform infrastructure and GitHub Actions CI/CD planned."
    ],
    github: "https://github.com/Hirunodhya2003",
    featured: true,
    badge: "Azure Cloud",
    status: "In Progress",
    inProgress: true
  },
  {
    id: "salon-booking-system",
    title: "Salon Booking System",
    subtitle: "Distributed Microservices with Spring Cloud Gateway & Eureka",
    category: "Microservices & Backend",
    techStack: ["Java", "Spring Boot", "MySQL", "Microservices", "Spring Cloud Gateway", "Eureka", "JWT", "React"],
    shortDescription: "Enterprise microservices architecture for salon appointment scheduling, user identity, and service booking.",
    highlights: [
      "Microservices for users, salons, bookings, payments, categories, and service offerings.",
      "Spring Cloud Gateway for routing, Eureka for service discovery, JWT authentication, and a React (Vite) frontend."
    ],
    github: "https://github.com/Hirunodhya2003",
    featured: false,
    badge: "Microservices",
    status: "Completed"
  },
  {
    id: "computer-shop",
    title: "Computer Shop",
    subtitle: "Full-Stack Hardware & Component Store (MERN)",
    category: "Full Stack",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    shortDescription: "Full-stack computer shop application built with the MERN stack with product catalogs and order workflows.",
    highlights: [
      "Full-stack computer shop application built with the MERN stack.",
      "Modular REST API architecture with asynchronous Node.js backend and responsive React frontend.",
      "Document-based NoSQL catalog management with MongoDB."
    ],
    github: "https://github.com/Hirunodhya2003",
    featured: false,
    badge: "Full Stack",
    status: "Completed"
  }
];

export const educationData = [
  {
    institution: "NSBM Green University",
    degree: "BSc (Hons) in Software Engineering",
    period: "Third-year undergraduate",
    grade: "GPA: 3.78 / 4.00",
    badge: "Current Degree",
    description: "Pursuing in-depth coursework covering Distributed Systems, Cloud Computing, Software Architecture, Database Management, and Object-Oriented Software Engineering.",
    keyPoints: [
      "Strong academic standing with 3.78 / 4.00 GPA",
      "Hands-on architectural projects in Cloud, DevOps, and Microservices",
      "Active focus on Infrastructure as Code, CI/CD, and Observability"
    ]
  },
  {
    institution: "Rathnawali College, Gampaha",
    degree: "G.C.E. Advanced Level",
    period: "Physical Science Stream (Mathematics)",
    grade: "Completed",
    badge: "High School",
    description: "Completed secondary education in the Physical Science stream with focused curriculum in Combined Mathematics, Physics, and Chemistry.",
    keyPoints: [
      "Rigorous mathematical reasoning and analytical problem solving",
      "Strong foundation for computer science and algorithmic engineering"
    ]
  }
];

export const certificationData = {
  title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
  issuer: "Microsoft",
  code: "AZ-900",
  credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
  badgeImage: "/azure-badge.svg",
  description: "Demonstrated foundational knowledge of cloud concepts, Azure services, security, compliance, privacy, pricing, and support models.",
  domains: [
    { name: "Cloud Concepts", desc: "IaaS, PaaS, SaaS, High Availability, Scalability & Cloud Elasticity" },
    { name: "Azure Architecture & Services", desc: "Regions, Availability Zones, Azure VMs, Container Services (ACR), Virtual Networks, Storage" },
    { name: "Security, Privacy & Compliance", desc: "Microsoft Entra ID, Zero Trust, Role-Based Access Control (RBAC), Defense-in-Depth" },
    { name: "Pricing, SLAs & Lifecycle", desc: "TCO Calculator, Cost Management, Budgets, Azure Service Level Agreements" }
  ]
};

export const terminalCommands = {
  whoami: "kavishi-rajasekara --role 'Cloud & DevOps Enthusiast' --gpa '3.78/4.00' --cert 'AZ-900'",
  skills: "AWS, Azure, Terraform, Docker, Jenkins, Prometheus, Grafana, Java/Spring Boot, React, MySQL",
  status: "🟢 ONLINE | Seeking Cloud / DevOps Internship | Ready to contribute & scale reliable systems",
  help: "Available commands: whoami, skills, projects, certs, terraform plan, contact, clear"
};

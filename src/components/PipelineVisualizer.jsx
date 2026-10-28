import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, 
  Workflow, 
  Box, 
  Cloud, 
  Activity, 
  ShieldCheck, 
  Server, 
  Database, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Terminal,
  Cpu,
  Lock,
  Globe
} from 'lucide-react';

export default function PipelineVisualizer() {
  const [activeWorkflow, setActiveWorkflow] = useState('devops');
  const [selectedNode, setSelectedNode] = useState(0);

  // Workflow 1: Employee Management DevOps CI/CD
  const devopsNodes = [
    {
      id: 0,
      title: "1. GitHub Webhook",
      role: "Source & Trigger",
      icon: GitBranch,
      color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      description: "Code commit to GitHub triggers an automated webhook POST event to the Jenkins automation server.",
      tech: "Git, Webhooks, Payload HMAC",
      specs: [
        "Repository: employee-management-devops",
        "Automated branch push triggers",
        "Zero-manual intervention deployment"
      ]
    },
    {
      id: 1,
      title: "2. Jenkins Pipeline",
      role: "Continuous Integration",
      icon: Workflow,
      color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      description: "Declarative pipeline stages: git checkout, Maven unit tests on Java 17 Spring Boot, npm build for React frontend.",
      tech: "Jenkins, Maven, Java 17, Node.js",
      specs: [
        "Stage: Checkout SCM",
        "Stage: Maven Test & Compile",
        "Credentials securely injected from Jenkins Credential Store"
      ]
    },
    {
      id: 2,
      title: "3. Dockerization",
      role: "Container Build",
      icon: Box,
      color: "text-blue-400 border-blue-500/40 bg-blue-500/10",
      description: "Builds lightweight, optimized multi-stage Docker container images for frontend, backend API, and database services.",
      tech: "Docker, Multi-stage Builds, Dockerfiles",
      specs: [
        "Frontend: Vite React dist served via Nginx",
        "Backend: Spring Boot 3 jar on OpenJDK 17",
        "Database: MySQL 8.4 container with healthchecks"
      ]
    },
    {
      id: 3,
      title: "4. AWS EC2 Deploy",
      role: "Cloud Orchestration",
      icon: Cloud,
      color: "text-teal-400 border-teal-500/40 bg-teal-500/10",
      description: "Deploys to AWS EC2 instance via Docker Compose with Nginx reverse proxy routing and persistent MySQL volume.",
      tech: "AWS EC2, Docker Compose, Nginx, Linux",
      specs: [
        "Nginx reverse proxy for frontend and API routing",
        "Docker named volume for MySQL data persistence",
        "Environment variables isolate production credentials"
      ]
    },
    {
      id: 4,
      title: "5. Prometheus & Grafana",
      role: "Telemetry & Observability",
      icon: Activity,
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      description: "Real-time metrics collection and dashboards for host resources and Java Spring Boot application telemetry.",
      tech: "Prometheus, Grafana, Node Exporter, Actuator",
      specs: [
        "Node Exporter: Host CPU, RAM, Disk, Network I/O",
        "Spring Boot Actuator: Request latency, HTTP codes, JVM memory",
        "Visual dashboards with alert thresholds"
      ]
    }
  ];

  // Workflow 2: Terraform AWS Three-Tier Architecture
  const awsNodes = [
    {
      id: 0,
      title: "1. VPC & Subnets",
      role: "Network Foundation",
      icon: Globe,
      color: "text-sky-400 border-sky-500/40 bg-sky-500/10",
      description: "Custom AWS VPC (10.0.0.0/16) provisioned with public and private subnets across 2 Availability Zones in eu-north-1.",
      tech: "Terraform, AWS VPC, Multi-AZ",
      specs: [
        "CIDR Block: 10.0.0.0/16",
        "2 AZs: eu-north-1a and eu-north-1b for high availability",
        "Route tables separating public vs private traffic"
      ]
    },
    {
      id: 1,
      title: "2. Application Load Balancer",
      role: "Public Presentation Tier",
      icon: Layers,
      color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      description: "Internet-facing Application Load Balancer in public subnets distributing incoming web traffic securely to backend instances.",
      tech: "AWS ALB, Target Groups, Health Checks",
      specs: [
        "Deployed across multiple public availability zones",
        "Health checks polling target backend instances",
        "Only layer exposed to public internet"
      ]
    },
    {
      id: 2,
      title: "3. Private EC2 Backend",
      role: "Application Logic Tier",
      icon: Server,
      color: "text-blue-400 border-blue-500/40 bg-blue-500/10",
      description: "Compute backend in isolated private subnets. Security group explicitly permits incoming HTTP traffic only from the ALB.",
      tech: "AWS EC2, Chained Security Groups",
      specs: [
        "No public IP addresses assigned",
        "Security Group: Ingress restricted to ALB Security Group ID",
        "Runs backend microservices and business logic"
      ]
    },
    {
      id: 3,
      title: "4. Private RDS MySQL",
      role: "Database Data Tier",
      icon: Database,
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      description: "Managed RDS MySQL database residing in private DB subnet group. Chained security group accepts traffic solely from backend EC2.",
      tech: "AWS RDS, MySQL 8, Subnet Groups",
      specs: [
        "Non-publicly accessible flag enforced",
        "Security Group: Ingress on port 3306 only from EC2 Security Group",
        "Automated backups and multi-AZ failover ready"
      ]
    }
  ];

  const currentNodes = activeWorkflow === 'devops' ? devopsNodes : awsNodes;
  const activeNodeInfo = currentNodes[selectedNode] || currentNodes[0];

  return (
    <section id="pipeline" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu size={14} />
            <span>Interactive Architecture & Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DevOps & Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pipeline Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Explore the live architectural flows designed and implemented in my featured projects. Click each stage to inspect configurations and security boundaries.
          </p>

          {/* Workflow Toggle Switch */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 mt-6 shadow-inner">
            <button
              onClick={() => {
                setActiveWorkflow('devops');
                setSelectedNode(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                activeWorkflow === 'devops'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Workflow size={14} />
              <span>CI/CD & Observability (Project 1)</span>
            </button>
            <button
              onClick={() => {
                setActiveWorkflow('aws');
                setSelectedNode(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                activeWorkflow === 'aws'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cloud size={14} />
              <span>Terraform 3-Tier AWS (Project 2)</span>
            </button>
          </div>
        </div>

        {/* Pipeline Visual Diagram */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl relative">
          
          {/* Steps Horizontal Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {currentNodes.map((node, index) => {
              const IconComp = node.icon;
              const isSelected = selectedNode === index;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(index)}
                  className={`relative p-4 rounded-xl text-left border transition-all duration-300 focus:outline-none group ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  {/* Top indicator pulse */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg border ${node.color}`}>
                      <IconComp size={18} />
                    </div>
                    {isSelected && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                      </span>
                    )}
                  </div>

                  <div className="text-[11px] font-mono text-cyan-400 font-bold">{node.role}</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">{node.title}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Card for Selected Node */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeWorkflow}-${activeNodeInfo.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 text-left grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Left Column: Summary & Explanation (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${activeNodeInfo.color}`}>
                    <activeNodeInfo.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>{activeNodeInfo.title}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono">
                        {activeNodeInfo.role}
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">Tech Stack: {activeNodeInfo.tech}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeNodeInfo.description}
                </p>

                {/* Key Specs */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                    Implementation Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-2">
                    {activeNodeInfo.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mini Code / Config Preview (5 cols) */}
              <div className="lg:col-span-5 rounded-lg bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] text-slate-300 shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={12} className="text-cyan-400" />
                    <span>{activeWorkflow === 'devops' ? 'Jenkinsfile / compose.yml' : 'main.tf / security_groups.tf'}</span>
                  </span>
                  <span className="text-[10px] text-emerald-400">Verified</span>
                </div>

                {activeWorkflow === 'devops' ? (
                  <pre className="text-slate-300 leading-relaxed">
                    {selectedNode === 0 && `// GitHub Webhook Trigger
post {
  url: "http://jenkins-ec2:8080/github-webhook/"
  event: "push"
  branches: ["main"]
  secret: "\${WEBHOOK_SECRET}"
}`}
                    {selectedNode === 1 && `stage('Build & Test') {
  steps {
    sh 'mvn clean test -Dspring.profiles.active=test'
    sh 'cd frontend && npm install && npm run build'
  }
}`}
                    {selectedNode === 2 && `stage('Docker Multi-Stage Build') {
  steps {
    sh 'docker build -t app-frontend:latest ./frontend'
    sh 'docker build -t app-backend:latest ./backend'
  }
}`}
                    {selectedNode === 3 && `// Docker Compose Deployment on AWS EC2
services:
  nginx: { ports: ["80:80"], restart: always }
  backend: { image: "app-backend", restart: always }
  db: { image: "mysql:8.4", volumes: ["db-data:/var/lib/mysql"] }`}
                    {selectedNode === 4 && `# Prometheus Scraping Configuration
scrape_configs:
  - job_name: 'spring-actuator'
    metrics_path: '/actuator/prometheus'
    static_configs: [{ targets: ['backend:8080'] }]
  - job_name: 'node-exporter'
    static_configs: [{ targets: ['node-exporter:9100'] }]`}
                  </pre>
                ) : (
                  <pre className="text-slate-300 leading-relaxed">
                    {selectedNode === 0 && `# Terraform VPC Definition
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "terraform-three-tier-vpc" }
}`}
                    {selectedNode === 1 && `# Internet-Facing ALB
resource "aws_lb" "external_alb" {
  name               = "app-load-balancer"
  internal           = false
  load_balancer_type = "application"
  subnets            = [aws_subnet.public_a.id, aws_subnet.public_b.id]
}`}
                    {selectedNode === 2 && `# Chained Security Group (Backend EC2)
resource "aws_security_group" "backend_sg" {
  ingress {
    from_port       = 8080
    to_port         = 8080
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_sg.id] # Only ALB allowed!
  }
}`}
                    {selectedNode === 3 && `# Isolated Private RDS MySQL
resource "aws_db_instance" "mysql_db" {
  allocated_storage      = 20
  engine                 = "mysql"
  instance_class         = "db.t3.micro"
  publicly_accessible    = false # Non-public
  vpc_security_group_ids = [aws_security_group.db_sg.id]
}`}
                  </pre>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

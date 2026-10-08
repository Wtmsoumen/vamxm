export interface ServiceDetail {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  cardItems: string[];
  pathway?: string[];
  sections: { title: string; description?: string; items: string[] }[];
  primaryCta: string;
  secondaryCta?: string;
  tertiaryCta?: string;
}

export const services: ServiceDetail[] = [
  {
    title: "Cybersecurity Training & Services",
    slug: "cybersecurity",
    tagline: "Build. Defend. Respond. Secure.",
    description: "VAMXM Technologies provides cybersecurity training, professional security services and consultancy designed for individuals, institutions and organizations.",
    cardItems: ["Cyber Launchpad", "Professional Cybersecurity Training", "Cybersecurity Services", "Cybersecurity Consultancy"],
    pathway: ["Cyber Launchpad", "Professional", "Advanced", "Industry Application"],
    sections: [
      { title: "01 — Cyber Launchpad", description: "A beginner-friendly foundation program for students, beginners and professionals entering cybersecurity.", items: ["Cybersecurity Fundamentals", "Networking Fundamentals", "OSI & TCP/IP Fundamentals", "Linux Fundamentals", "Cyber Threats & Attack Vectors", "Authentication & Access Control", "Cryptography Basics", "Security Tools & Practices", "Cyber Hygiene & Awareness", "Ethical Hacking Fundamentals"] },
      { title: "02 — Professional Cybersecurity Training", items: ["Ethical Hacking", "Vulnerability Assessment & Penetration Testing (VAPT)", "SOC Analyst — L1 & L2", "SIEM Fundamentals", "Threat Detection & Monitoring", "Incident Response", "Digital Forensics Fundamentals", "Identity & Access Management (IAM)", "OKTA", "Imperva WAF & DAM", "Security Monitoring"] },
      { title: "03 — Advanced / Specialized Training", items: ["Advanced VAPT", "SOC Operations", "Threat Hunting", "Web Application Security", "Cloud Security Fundamentals", "Identity & Access Management", "Security Architecture", "Incident Response", "Security Operations"] },
      { title: "04 — Cybersecurity Services", items: ["Vulnerability Assessment", "Penetration Testing", "Security Audits", "Threat Monitoring", "Security Architecture", "Web & Application Security", "IAM Consulting", "WAF & DAM Solutions", "Security Readiness", "Compliance Support"] },
      { title: "05 — Cybersecurity Consultancy", items: ["Security Architecture & Review", "Risk Assessment", "Security Implementation Advisory", "Compliance & Security Readiness", "IAM & Access Management Advisory", "Security Operations Consulting", "Cybersecurity Strategy & Roadmapping"] },
    ],
    primaryCta: "Start your cybersecurity journey",
    secondaryCta: "Talk to a security expert",
  },
  {
    title: "AI Training & Consultancy",
    slug: "ai",
    tagline: "Learn AI. Build AI. Automate with AI.",
    description: "From foundational AI education to enterprise automation and intelligent agents, VAMXM helps individuals and organizations adopt and implement practical AI solutions.",
    cardItems: ["AI Launchpad", "Advanced AI Training", "AI Automation & Agents", "AI Consultancy"],
    pathway: ["Beginner", "Intermediate", "Advanced", "Implementation"],
    sections: [
      { title: "01 — AI Launchpad — Beginner", description: "For students, professionals and business users.", items: ["AI Fundamentals", "Generative AI", "Prompt Engineering", "AI Tools & Productivity", "Responsible AI", "Practical AI Applications"] },
      { title: "02 — Intermediate AI", items: ["Python for AI", "Machine Learning", "Data Fundamentals", "Natural Language Processing (NLP)", "Computer Vision", "Model Integration", "AI APIs"] },
      { title: "03 — Advanced AI", items: ["Deep Learning", "Advanced Machine Learning", "Large Language Model (LLM) Applications", "Retrieval-Augmented Generation (RAG)", "AI Agents", "Agentic AI", "Custom AI Solutions"] },
      { title: "04 — AI Automation & Agent Development", items: ["AI Workflow Automation", "Custom AI Agents", "Multi-Agent Systems", "Business Process Automation", "AI Chatbots", "AI-Powered Assistants", "API & Tool Integration", "Intelligent Workflow Design"] },
      { title: "05 — AI Consultancy", items: ["AI Readiness Assessment", "AI Strategy & Roadmapping", "Business Process Analysis", "Workflow Automation", "AI Integration", "Custom AI Solutions", "Agent Development", "AI-Powered Digital Transformation"] },
    ],
    primaryCta: "Ready to put AI to work?",
    secondaryCta: "Explore AI training",
    tertiaryCta: "Book an AI consultation",
  },
  {
    title: "Website & App Development",
    slug: "web-development",
    tagline: "Design. Develop. Deploy. Scale.",
    description: "From simple websites to complex digital platforms, VAMXM designs and develops websites and applications tailored to business, industry and product objectives.",
    cardItems: ["All Types of Websites", "Web Applications & Portals", "Mobile App Development", "UI/UX & Custom Solutions"],
    sections: [
      { title: "01 — All Types of Websites", description: "VAMXM can design and develop websites across business, professional, consumer and institutional use cases.", items: ["Corporate & Business Websites", "Portfolio & Personal Websites", "Landing Pages", "E-commerce Websites", "Educational & E-Learning Websites", "News & Media Websites", "Blog & Content Websites", "Real Estate Websites", "Hospitality & Travel Websites", "Healthcare Websites", "Restaurant & Food Websites", "Service-Based Websites", "Event & Community Websites", "Membership & Subscription Websites", "Marketplace Websites", "Booking & Appointment Websites", "Directory & Listing Websites", "Non-Profit & Organization Websites", "Custom Business Websites", "Enterprise Websites"] },
      { title: "02 — Web Applications & Portals", items: ["Custom Web Applications", "Business Management Platforms", "CRM & ERP Solutions", "Customer Portals", "Dashboards & Admin Panels", "Booking & Service Platforms", "Marketplace Platforms", "API Development & Integration"] },
      { title: "03 — Mobile App Development", items: ["Android Applications", "iOS Applications", "Cross-Platform Applications", "Business Applications", "Customer-Facing Applications", "API & Backend Integration"] },
      { title: "04 — UI/UX & Custom Development", items: ["UI/UX Design", "Wireframing & Prototyping", "Design Systems", "User Experience Optimization", "Frontend Development", "Backend Development", "API Integration", "Product Strategy", "Application Modernization"] },
    ],
    primaryCta: "Build your digital product",
  },
  {
    title: "Digital Marketing & Solutions",
    slug: "digital-marketing",
    tagline: "Reach. Engage. Convert. Grow.",
    description: "VAMXM combines performance marketing, creative communication, digital strategy and technology to help businesses build a stronger digital presence and generate measurable growth.",
    cardItems: ["Performance Marketing", "SEO & Social Media", "Creative & Content", "Digital Tools & Automation"],
    sections: [
      { title: "01 — Performance Marketing", description: "Data-driven campaigns built for measurable results.", items: ["Google Ads", "Meta Ads", "Lead Generation", "Conversion Campaigns", "Retargeting", "Campaign Optimization", "ROI & Performance Tracking"] },
      { title: "02 — SEO & Organic Growth", description: "Build sustainable visibility and discoverability.", items: ["Search Engine Optimization (SEO)", "Local SEO", "Technical SEO", "On-Page & Off-Page SEO", "Keyword Strategy", "Content Optimization", "Search Performance Analytics"] },
      { title: "03 — Social Media & Content", description: "Build a recognizable and engaging digital presence.", items: ["Social Media Management", "Social Media Strategy", "Content Planning", "Creative Design", "Video & Reel Content", "Brand Communication", "Community Engagement"] },
      { title: "04 — Digital Tools & Automation", description: "Technology-enabled marketing and business workflows.", items: ["Marketing Automation", "CRM Integration", "Lead Management Systems", "WhatsApp & Communication Solutions", "Email Marketing", "Analytics & Reporting", "AI-Powered Marketing Tools", "Workflow Automation", "Custom Digital Tools"] },
      { title: "05 — Digital Strategy & Consultancy", items: ["Digital Brand Strategy", "Marketing Strategy", "Customer Journey Mapping", "Digital Transformation", "Campaign Planning", "Marketing Technology Consulting", "Growth Strategy"] },
    ],
    primaryCta: "Ready to grow your digital presence?",
    secondaryCta: "Explore our solutions",
    tertiaryCta: "Talk to our team",
  },
];

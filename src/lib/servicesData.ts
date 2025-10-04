import React from "react";
import {
  FileEdit,
  MessageSquare,
  Search,
  DollarSign,
  Plane,
  HeartHandshake,
} from "lucide-react";

export type IconComponent = React.ComponentType<any>;

export interface Service {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  benefits?: string[];
  process?: string[];
  pricing?: string;
}

export const servicesList: Service[] = [
  {
    id: "resume-building",
    icon: FileEdit,
    title: "Resume Building",
    description:
      "Professional resume and cover letter writing optimized for US employers and ATS systems.",
    fullDescription:
      "Your resume is your first impression with potential employers. Our expert resume writers specialize in creating documents that not only showcase your skills and experience effectively but also navigate Applicant Tracking Systems (ATS) used by most US companies. We understand the unique challenges international professionals face and tailor your resume to highlight your global perspective as an asset.",
    features: [
      "ATS-optimized resume formatting",
      "Professional cover letter writing",
      "LinkedIn profile optimization",
      "Industry-specific keyword integration",
      "Unlimited revisions",
    ],
    benefits: [
      "ATS-optimized formatting that passes automated screenings",
      "Industry-specific keyword optimization",
      "Achievement-focused content that quantifies your impact",
      "Professional formatting that's both modern and readable",
      "Cover letter templates for various industries",
      "LinkedIn profile optimization guidance",
    ],
    process: [
      "Initial consultation to understand your background and goals",
      "Draft resume creation within 3-5 business days",
      "Two rounds of revisions based on your feedback",
      "Final delivery with multiple format options (PDF, Word, ATS-friendly)",
    ],
    pricing: "Starting at $199",
  },
  {
    id: "interview-training",
    icon: MessageSquare,
    title: "Interview Training",
    description:
      "Mock interviews, behavioral question prep, and communication skills coaching.",
    fullDescription:
      "Interviewing in a new country comes with unique challenges - from understanding cultural nuances to mastering the STAR method for behavioral questions. Our interview training program provides comprehensive preparation through mock interviews, detailed feedback, and strategies specifically designed for international professionals.",
    features: [
      "One-on-one mock interview sessions",
      "Behavioral question preparation",
      "Technical interview guidance",
      "Body language and communication coaching",
      "Video interview tips",
    ],
    benefits: [
      "Personalized mock interview sessions with industry experts",
      "Behavioral question preparation using the STAR method",
      "Technical interview guidance for specific roles",
      "Communication and accent coaching if needed",
      "Body language and non-verbal communication training",
      "Virtual interview best practices",
    ],
    process: [
      "Assessment of your interview skills and areas for improvement",
      "Customized training plan based on target roles",
      "Multiple mock interview sessions with detailed feedback",
      "Post-session materials and practice questions",
    ],
    pricing: "Starting at $299",
  },
  {
    id: "job-search",
    icon: Search,
    title: "Job Search Support",
    description:
      "Strategic job search guidance, company research, and application tracking.",
    fullDescription:
      "The US job market operates differently than in many other countries. Our job search support service helps you understand the landscape, identify the best opportunities, and apply strategically to maximize your chances of success.",
    features: [
      "Personalized job search strategy",
      "Company and role research",
      "Application tracking system",
      "Networking guidance",
      "Hidden job market access",
    ],
    benefits: [
      "Personalized job search strategy based on your goals",
      "Access to hidden job market opportunities",
      "Company research and culture fit analysis",
      "Application tracking and follow-up guidance",
      "Networking strategy and LinkedIn optimization",
      "Industry-specific insights and trends",
    ],
    process: [
      "Career goals assessment and target company identification",
      "Job search strategy development",
      "Weekly check-ins and progress tracking",
      "Continuous support until you land interviews",
    ],
    pricing: "Starting at $399",
  },
  {
    id: "salary-negotiation",
    icon: DollarSign,
    title: "Salary Negotiation",
    description:
      "Expert advice on compensation packages, benefits, and negotiation strategies.",
    fullDescription:
      "Salary negotiation can be uncomfortable, especially when you're unfamiliar with US market rates and negotiation culture. We provide data-driven insights and proven strategies to help you negotiate confidently and secure the compensation you deserve.",
    features: [
      "Market rate research",
      "Negotiation script preparation",
      "Benefits package evaluation",
      "Counteroffer strategies",
      "Long-term compensation planning",
    ],
    benefits: [
      "Market rate research for your role and location",
      "Total compensation package evaluation",
      "Negotiation scripts and talking points",
      "Counteroffer strategy development",
      "Benefits and perks negotiation guidance",
      "Long-term compensation planning",
    ],
    process: [
      "Review of your offer and market research",
      "Strategy session to plan your negotiation approach",
      "Script preparation and practice",
      "Real-time support during negotiation",
    ],
    pricing: "Starting at $249",
  },
  {
    id: "visa-support",
    icon: Plane,
    title: "Visa Support",
    description:
      "Guidance on work visa requirements, sponsorship, and immigration processes.",
    fullDescription:
      "Understanding US work visa requirements is crucial for international professionals. While we don't provide legal advice, we offer practical guidance on different visa options, help you identify sponsorship opportunities, and prepare you for the visa application process.",
    features: [
      "H-1B visa guidance",
      "OPT and CPT consulting",
      "Sponsorship company identification",
      "Green card process overview",
      "Document preparation assistance",
    ],
    benefits: [
      "Overview of H-1B, L-1, O-1, and other work visas",
      "OPT and CPT guidance for students",
      "Identification of sponsorship-friendly companies",
      "Green card process overview and timeline",
      "Document preparation checklist",
      "Interview preparation for visa appointments",
    ],
    process: [
      "Assessment of your visa eligibility and options",
      "Customized visa strategy based on your situation",
      "Company identification that sponsors your visa type",
      "Ongoing guidance throughout the visa process",
    ],
    pricing: "Starting at $499",
  },
  {
    id: "post-hire",
    icon: HeartHandshake,
    title: "Post-Hire Support",
    description:
      "Ongoing career coaching and workplace integration support after placement.",
    fullDescription:
      "Landing the job is just the beginning. Our post-hire support helps you navigate your first months, integrate into US workplace culture, and set yourself up for long-term career success.",
    features: [
      "First 90 days guidance",
      "Workplace culture integration",
      "Performance review preparation",
      "Career advancement planning",
      "Ongoing mentorship",
    ],
    benefits: [
      "First 90 days integration guidance",
      "US workplace culture and communication coaching",
      "Performance review preparation",
      "Career advancement planning",
      "Conflict resolution strategies",
      "Ongoing mentorship and support",
    ],
    process: [
      "Initial onboarding strategy session",
      "Monthly check-ins during first 3 months",
      "As-needed consultation for specific challenges",
      "Long-term career planning guidance",
    ],
    pricing: "Starting at $599 for 3 months",
  },
];

export const servicesMap: Record<string, Service> = servicesList.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<string, Service>
);

export default servicesList;

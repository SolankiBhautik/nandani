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
      "Expertly crafted resumes and cover letters designed for US employers and optimized for ATS systems.",
    fullDescription:
      "Your resume is often your first introduction to an employer—let’s make it count. Our specialists create resumes that effectively present your achievements and experience while ensuring they’re fully compatible with Applicant Tracking Systems (ATS). We focus on showcasing your international background as a strength and aligning your profile with US market standards.",
    features: [
      "ATS-compliant design and formatting",
      "Tailored cover letter writing",
      "LinkedIn profile revamp",
      "Targeted keyword strategy by industry",
      "Unlimited edits until satisfaction",
    ],
    benefits: [
      "Increased visibility in recruiter searches",
      "Clear, results-driven resume structure",
      "Polished layout that stands out professionally",
      "Customized keywords that align with your target roles",
      "Expert guidance on LinkedIn optimization",
      "Templates for multiple industries and formats",
    ],
    process: [
      "Initial discussion to define your career direction",
      "First draft delivered within 3–5 business days",
      "Revisions and feedback sessions",
      "Final delivery in multiple formats (Word, PDF, ATS-safe)",
    ],
    pricing: "Starting at $199",
  },
  {
    id: "interview-training",
    icon: MessageSquare,
    title: "Interview Coaching",
    description:
      "Personalized mock interviews and confidence-building communication training.",
    fullDescription:
      "Navigating interviews in the US can be challenging—different expectations, communication styles, and cultural nuances come into play. Our interview coaching sessions help you build confidence, refine your answers using the STAR method, and master both in-person and virtual interview settings.",
    features: [
      "Simulated interview practice sessions",
      "Behavioral and situational question training",
      "Technical interview preparation",
      "Body language and communication enhancement",
      "Virtual interview performance tips",
    ],
    benefits: [
      "Customized mock interviews led by industry experts",
      "Mastery of behavioral and technical interview techniques",
      "Improved fluency and confidence under pressure",
      "Refined non-verbal communication",
      "Strategies for online and hybrid interviews",
      "Detailed performance feedback after each session",
    ],
    process: [
      "Skill assessment and goal setting",
      "Creation of a customized training plan",
      "Multiple interview simulations with feedback",
      "Post-session materials and follow-up coaching",
    ],
    pricing: "Starting at $299",
  },
  {
    id: "job-search",
    icon: Search,
    title: "Job Search Strategy",
    description:
      "Comprehensive job search planning, company targeting, and application tracking tools.",
    fullDescription:
      "Finding a job in the US requires more than just applying online—it’s about strategy and focus. We help you develop a targeted plan that aligns with your skills, goals, and industry trends, ensuring you apply to the right companies with a structured system to track your progress.",
    features: [
      "Tailored job search plan",
      "Company and industry research",
      "Custom application tracker",
      "Networking and outreach guidance",
      "Access to hidden job opportunities",
    ],
    benefits: [
      "Clarity and structure in your job search",
      "Company insights and culture-fit assessments",
      "Practical networking techniques that work",
      "Access to under-the-radar job opportunities",
      "Ongoing accountability and progress tracking",
      "Weekly feedback to refine your approach",
    ],
    process: [
      "Career goals and market alignment session",
      "Development of a strategic job search plan",
      "Weekly performance and progress check-ins",
      "Ongoing support until interview stage",
    ],
    pricing: "Starting at $399",
  },
  {
    id: "salary-negotiation",
    icon: DollarSign,
    title: "Salary Negotiation Coaching",
    description:
      "Guided negotiation support to help you secure the best compensation package possible.",
    fullDescription:
      "Understanding salary expectations and negotiation culture in the US can be difficult. Our experts provide research-based insights and one-on-one coaching so you can confidently negotiate your salary, benefits, and perks—without underselling your value.",
    features: [
      "Market salary benchmarking",
      "Negotiation scripts and strategy prep",
      "Benefits package evaluation",
      "Counteroffer response guidance",
      "Long-term career compensation planning",
    ],
    benefits: [
      "Confidence in salary and benefits discussions",
      "Accurate market rate insights by role and location",
      "Personalized negotiation playbook",
      "Effective counteroffer and leverage strategies",
      "Clarity on total compensation value",
      "Guidance for long-term earning growth",
    ],
    process: [
      "Detailed review of your job offer",
      "One-on-one strategy and preparation session",
      "Customized negotiation script development",
      "Ongoing advice during the negotiation process",
    ],
    pricing: "Starting at $249",
  },
  {
    id: "visa-support",
    icon: Plane,
    title: "Visa & Sponsorship Guidance",
    description:
      "Practical assistance with understanding US visa pathways and employer sponsorship options.",
    fullDescription:
      "The US visa system can be complex. While we don’t provide legal advice, we offer practical guidance to help you understand your options, identify companies that sponsor international talent, and prepare your documents and strategy for visa applications.",
    features: [
      "Overview of key work visas (H-1B, O-1, L-1, etc.)",
      "OPT and CPT consulting for students",
      "Sponsorship-focused job search assistance",
      "Green card process overview",
      "Document checklist and preparation tips",
    ],
    benefits: [
      "Clear understanding of visa types and pathways",
      "Identification of sponsorship-friendly employers",
      "Step-by-step document preparation support",
      "Guidance for visa interviews and next steps",
      "Strategic approach to long-term residency planning",
      "Ongoing advice throughout your visa process",
    ],
    process: [
      "Visa eligibility and options review",
      "Personalized visa strategy development",
      "Company identification and application support",
      "Continued follow-up and progress guidance",
    ],
    pricing: "Starting at $499",
  },
  {
    id: "post-hire",
    icon: HeartHandshake,
    title: "Post-Hire Career Support",
    description:
      "Personalized guidance to help you adapt, perform, and grow in your new workplace.",
    fullDescription:
      "Getting the job is just step one—thriving in it is step two. Our post-hire coaching helps you adjust smoothly to US work culture, strengthen professional relationships, and set yourself up for long-term success and promotion readiness.",
    features: [
      "First 90-day integration plan",
      "Cultural adaptation and communication training",
      "Performance review preparation",
      "Career growth roadmap development",
      "Dedicated mentorship and support",
    ],
    benefits: [
      "Smooth transition into your new role",
      "Understanding of US workplace norms",
      "Clear career growth and performance strategies",
      "Support in handling challenges and feedback",
      "Mentorship for long-term professional growth",
      "Confidence and clarity in your first 3–6 months",
    ],
    process: [
      "Initial onboarding and adjustment planning",
      "Monthly coaching sessions for the first 3 months",
      "Ongoing support for specific challenges",
      "Long-term career growth planning and mentoring",
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

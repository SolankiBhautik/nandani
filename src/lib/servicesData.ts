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
      "Your resume is often your first introduction to an employer—let's make it count. Our specialists create resumes that effectively present your achievements and experience while ensuring they're fully compatible with Applicant Tracking Systems (ATS). We focus on showcasing your international background as a strength and aligning your profile with US market standards.",
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
    id: "interview-coaching",
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
    id: "technical-support",
    icon: Search,
    title: "Technical Support",
    description:
      "Comprehensive technical interview preparation and skill enhancement for tech roles.",
    fullDescription:
      "Landing a technical role requires strong problem-solving skills and the ability to communicate your thought process effectively. Our technical support service provides hands-on coaching for coding interviews, system design discussions, and technical assessments to help you stand out in competitive tech interviews.",
    features: [
      "Data structures and algorithms practice",
      "System design interview preparation",
      "Mock coding interviews with real-time feedback",
      "Technical communication skills training",
      "Platform-specific preparation (LeetCode, HackerRank)",
    ],
    benefits: [
      "Improved problem-solving speed and accuracy",
      "Confidence in explaining technical concepts",
      "Mastery of common interview patterns",
      "Real-world system design thinking",
      "Effective whiteboarding and live coding skills",
      "Personalized study plans based on your target companies",
    ],
    process: [
      "Technical skill assessment and gap analysis",
      "Customized learning roadmap creation",
      "Regular practice sessions with expert feedback",
      "Progress tracking and strategy refinement",
    ],
    pricing: "Starting at $399",
  },
  {
    id: "job-search-strategy",
    icon: DollarSign,
    title: "Job Search Strategy & Application Training",
    description:
      "Learn how to search for jobs efficiently and apply strategically to maximize your chances.",
    fullDescription:
      "The job search process can be overwhelming without the right strategy. We teach you proven techniques to identify the best opportunities quickly, optimize your applications for success, and manage your job search efficiently. Learn to work smarter, not harder, with our systematic approach to finding and applying for jobs.",
    features: [
      "Advanced job search techniques and tools",
      "Application optimization strategies",
      "Efficient workflow and time management",
      "Company research and targeting methods",
      "Application tracking system mastery",
    ],
    benefits: [
      "Reduced time spent on unqualified opportunities",
      "Higher application response rates",
      "Systematic and organized job search approach",
      "Ability to identify best-fit opportunities quickly",
      "Confidence in tailoring applications efficiently",
      "Tools and templates for faster applications",
    ],
    process: [
      "Job search strategy and goals alignment",
      "Training on efficient search techniques",
      "Application optimization workshop",
      "Ongoing support and progress monitoring",
    ],
    pricing: "Starting at $349",
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

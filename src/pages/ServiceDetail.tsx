import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  FileEdit, 
  MessageSquare, 
  Search, 
  DollarSign, 
  Plane, 
  HeartHandshake,
  ArrowLeft,
  Check
} from "lucide-react";

const serviceDetails = {
  "resume-building": {
    icon: FileEdit,
    title: "Resume Building",
    description: "Get a professional, ATS-optimized resume that stands out to US employers and passes automated screening systems.",
    fullDescription: "Your resume is your first impression with potential employers. Our expert resume writers specialize in creating documents that not only showcase your skills and experience effectively but also navigate Applicant Tracking Systems (ATS) used by most US companies. We understand the unique challenges international professionals face and tailor your resume to highlight your global perspective as an asset.",
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
  "interview-training": {
    icon: MessageSquare,
    title: "Interview Training",
    description: "Master the art of interviewing with personalized coaching, mock interviews, and proven strategies for success.",
    fullDescription: "Interviewing in a new country comes with unique challenges - from understanding cultural nuances to mastering the STAR method for behavioral questions. Our interview training program provides comprehensive preparation through mock interviews, detailed feedback, and strategies specifically designed for international professionals.",
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
  "job-search": {
    icon: Search,
    title: "Job Search Support",
    description: "Strategic guidance to navigate the US job market efficiently and connect with the right opportunities.",
    fullDescription: "The US job market operates differently than in many other countries. Our job search support service helps you understand the landscape, identify the best opportunities, and apply strategically to maximize your chances of success.",
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
  "salary-negotiation": {
    icon: DollarSign,
    title: "Salary Negotiation",
    description: "Maximize your earning potential with expert negotiation strategies and market insights.",
    fullDescription: "Salary negotiation can be uncomfortable, especially when you're unfamiliar with US market rates and negotiation culture. We provide data-driven insights and proven strategies to help you negotiate confidently and secure the compensation you deserve.",
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
  "visa-support": {
    icon: Plane,
    title: "Visa Support",
    description: "Navigate the complex US work visa process with expert guidance and practical strategies.",
    fullDescription: "Understanding US work visa requirements is crucial for international professionals. While we don't provide legal advice, we offer practical guidance on different visa options, help you identify sponsorship opportunities, and prepare you for the visa application process.",
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
  "post-hire": {
    icon: HeartHandshake,
    title: "Post-Hire Support",
    description: "Ensure long-term success with ongoing coaching and workplace integration support.",
    fullDescription: "Landing the job is just the beginning. Our post-hire support helps you navigate your first months, integrate into US workplace culture, and set yourself up for long-term career success.",
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
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ServiceIcon size={40} />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">{service.title}</h1>
                <p className="text-xl text-muted-foreground">{service.description}</p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-sm border mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-sm border mb-8">
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-sm border mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                  <p className="text-lg text-muted-foreground">{service.pricing}</p>
                </div>
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;

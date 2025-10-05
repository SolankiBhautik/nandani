import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FileEdit,
  MessageSquare,
  Search,
  DollarSign,
  Plane,
  HeartHandshake,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "resume-building",
    icon: FileEdit,
    title: "Resume Building",
    shortDesc: "Professional resume and cover letter writing optimized for US employers and ATS systems.",
    features: [
      "ATS-optimized resume formatting",
      "Professional cover letter writing",
      "LinkedIn profile optimization",
      "Industry-specific keyword integration",
      "Unlimited revisions",
    ],
  },
  {
    id: "interview-training",
    icon: MessageSquare,
    title: "Interview Training",
    shortDesc: "Mock interviews, behavioral question prep, and communication skills coaching.",
    features: [
      "One-on-one mock interview sessions",
      "Behavioral question preparation",
      "Technical interview guidance",
      "Body language and communication coaching",
      "Video interview tips",
    ],
  },
  {
    id: "job-search",
    icon: Search,
    title: "Job Search Support",
    shortDesc: "Strategic job search guidance, company research, and application tracking.",
    features: [
      "Personalized job search strategy",
      "Company and role research",
      "Application tracking system",
      "Networking guidance",
      "Hidden job market access",
    ],
  },
  {
    id: "salary-negotiation",
    icon: DollarSign,
    title: "Salary Negotiation",
    shortDesc: "Expert advice on compensation packages, benefits, and negotiation strategies.",
    features: [
      "Market rate research",
      "Negotiation script preparation",
      "Benefits package evaluation",
      "Counteroffer strategies",
      "Long-term compensation planning",
    ],
  },
  {
    id: "visa-support",
    icon: Plane,
    title: "Visa Support",
    shortDesc: "Guidance on work visa requirements, sponsorship, and immigration processes.",
    features: [
      "H-1B visa guidance",
      "OPT and CPT consulting",
      "Sponsorship company identification",
      "Green card process overview",
      "Document preparation assistance",
    ],
  },
  {
    id: "post-hire",
    icon: HeartHandshake,
    title: "Post-Hire Support",
    shortDesc: "Ongoing career coaching and workplace integration support after placement.",
    features: [
      "First 90 days guidance",
      "Workplace culture integration",
      "Performance review preparation",
      "Career advancement planning",
      "Ongoing mentorship",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive career services designed specifically for international students
              and professionals navigating the US job market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.id}`}
                key={index}
                className="bg-card no-underline rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border hover:border-primary/50 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>

                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.shortDesc}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                  asChild
                >
                  <div>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Button>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg mb-6">Not sure which service is right for you?</p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </main >

      <Footer />
    </div >
  );
};

export default Services;

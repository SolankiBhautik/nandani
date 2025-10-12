import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$799",
    period: "/upfront",
    description: "Essential career services to kickstart your job search",
    features: [
      "Resume Making",
      "Resume Understanding 1-hour session",
      "LinkedIn Makeover",
      "Cover letter",
      "Job Hunting",
      "Personal assistant till placement",
      "Salary negotiation help",
      "Filtering perfect opportunity",
    ],
    unavailable: [
      "Live Training sessions",
      "Other job portal optimization",
      "Interview Generation",
      "Interview Preparation",
    ],
    variant: "outline" as const,
  },
  {
    name: "Standard",
    price: "$1299",
    period: "/upfront",
    badge: "Most Popular",
    description: "Comprehensive training and career support package",
    features: [
      "22 live Training sessions",
      "Resume Making",
      "Resume Understanding 1-hour session",
      "LinkedIn Makeover",
      "Cover letter",
      "Job Hunting",
      "Personal assistant till placement",
      "Salary negotiation help",
      "Filtering perfect opportunity",
    ],
    unavailable: [
      "Other job portal optimization",
      "Interview Generation",
      "Interview Preparation",
    ],
    variant: "default" as const,
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$1999",
    period: "/upfront",
    description: "Full-service career placement with advanced training and support",
    features: [
      "Resume Making",
      "Resume Understanding 1-hour session",
      "22 live Training sessions",
      "LinkedIn Makeover / LinkedIn Optimization",
      "Other job portal optimization",
      "Interview Generation",
      "Interview Preparation",
      "Cover letter",
      "Job Hunting",
      "Personal assistant till placement",
      "Salary negotiation help",
      "Filtering perfect opportunity",
    ],
    unavailable: [],
    variant: "outline" as const,
  },
];
const Pricing = () => {
  return (
    <div className="container">
      <section className="mt-8 py-10 md:py-20 bg-secondary mx-0 md:mx-4 rounded-2xl border">
        <div className="mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Choose Your <span className="text-primary">Plan</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to match your career goals and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-3xl p-8 shadow-sm ${plan.highlighted
                  ? "ring-2 ring-primary shadow-xl scale-105 bg-foreground text-white"
                  : ""
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span
                      className={
                        plan.highlighted
                          ? "text-gray-300"
                          : "text-muted-foreground"
                      }
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={
                      plan.highlighted
                        ? "text-gray-300"
                        : "text-muted-foreground"
                    }
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className={plan.highlighted ? "text-gray-100" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.unavailable.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 opacity-50">
                      <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full ${plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : ""
                    }`}
                  variant={plan.variant}
                  size="lg"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

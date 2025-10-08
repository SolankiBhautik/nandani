import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$299",
    period: "/one-time",
    description: "Perfect for getting started with your job search",
    features: [
      "Resume review and optimization",
      "1 mock interview session",
      "Job search strategy guide",
      "Email support",
    ],
    unavailable: [
      "Cover letter writing",
      "Unlimited interview prep",
      "Salary negotiation support",
      "Visa guidance",
    ],
    variant: "outline" as const,
  },
  {
    name: "Professional",
    price: "$799",
    period: "/package",
    badge: "Most Popular",
    description: "Comprehensive support for serious job seekers",
    features: [
      "Complete resume & cover letter package",
      "5 mock interview sessions",
      "Personalized job search plan",
      "Application tracking assistance",
      "Basic salary negotiation prep",
      "Priority email support",
    ],
    unavailable: ["Visa consultation", "Post-hire support"],
    variant: "default" as const,
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$1,499",
    period: "/package",
    description: "Full-service career placement and support",
    features: [
      "Everything in Professional",
      "Unlimited interview coaching",
      "Direct company introductions",
      "Full salary negotiation support",
      "Visa sponsorship guidance",
      "3 months post-hire support",
      "Dedicated career advisor",
      "24/7 support access",
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

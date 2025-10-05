import { FileText, Users, Briefcase, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Initial Consultation",
    description: "Tell us about your background, career goals, and requirements. We'll assess your profile and create a personalized action plan.",
  },
  {
    number: "2",
    icon: Users,
    title: "Skill Development",
    description: "Get expert training on resume building, interview techniques, and job search strategies tailored to the US market.",
  },
  {
    number: "3",
    icon: Briefcase,
    title: "Job Matching",
    description: "We connect you with opportunities that match your skills and career aspirations from our network of partner companies.",
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "Ongoing Support",
    description: "From offer negotiation to post-hire support, we're with you every step of your career journey in the US.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-10 md:py-20 bg-secondary mx-4 rounded-2xl border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process to help you land your dream job in the US
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >

              <div
                className="absolute z-20 top-0 left-[15px] inverted-corner bg-black [--size:9px] rotate-90"
              >
                <div className="bg-secondary size-2 -translate-y-full" /></div>

              <div
                className="absolute z-20 top-0 left-[88px] inverted-corner bg-black [--size:9px]"
              >
                <div className="bg-secondary size-2  -translate-x-full" /></div>

              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full outline outline-8 outline-secondary bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
                {step.number}
              </div>

              <div className="mt-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <step.icon size={32} />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default HowItWorks;

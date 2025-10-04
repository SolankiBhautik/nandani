import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "👩‍💼",
    bio: "Former HR Director with 15+ years of experience in talent acquisition and career development.",
  },
  {
    name: "Raj Patel",
    role: "Senior Career Coach",
    image: "👨‍💼",
    bio: "Immigration specialist and career advisor helping international professionals navigate the US job market.",
  },
  {
    name: "Maria Garcia",
    role: "Resume & Interview Expert",
    image: "👩‍💻",
    bio: "Certified Professional Resume Writer (CPRW) with expertise in ATS optimization.",
  },
  {
    name: "David Chen",
    role: "Tech Industry Advisor",
    image: "👨‍💻",
    bio: "Former tech recruiter at Fortune 500 companies, specializing in software engineering placements.",
  },
  {
    name: "Lisa Williams",
    role: "Visa & Immigration Consultant",
    image: "👩‍⚖️",
    bio: "Expert in H-1B, OPT, and other work visa processes with 10+ years of experience.",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Dedicated to breaking down barriers and creating opportunities for international talent in the US.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Every professional's journey is unique. We provide tailored solutions, not one-size-fits-all advice.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "95% placement success rate and 500+ satisfied professionals across diverse industries.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We stay current with market trends, visa policies, and hiring practices to serve you better.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">Nandani</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering international students and professionals to achieve their 
              career dreams in the United States
            </p>
          </div>

          <div className=" mx-auto bg-card rounded-3xl p-8 lg:p-12 shadow-sm border">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nandani was founded with a simple yet powerful vision: to bridge the gap between 
                talented international professionals and career opportunities in the United States. 
                We understand firsthand the challenges of navigating a new job market, understanding 
                visa requirements, and adapting to workplace culture.
              </p>
              <p>
                What started as a small consulting practice has grown into a comprehensive career 
                services platform, helping hundreds of international students and professionals 
                launch and advance their careers in the US. Our success is measured not just in 
                job placements, but in the lasting impact we make on our clients' lives.
              </p>
              <p>
                Today, we're proud to partner with leading companies across technology, finance, 
                healthcare, and other industries, connecting exceptional international talent 
                with opportunities to grow and thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow border">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mb-4 mx-auto">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-primary text-center mb-4">{member.role}</p>
                <p className="text-muted-foreground text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of international professionals who have successfully 
              launched their careers with our guidance
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8 bg-white text-foreground hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

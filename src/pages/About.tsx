import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import officeDesk from "@/assets/office-desk.jpg";
import officeTopDow from "@/assets/office-meating-top-down-view.jpg";
import teamHands from "@/assets/team-hands.jpg";
import teamOnTebal from "@/assets/team-onthe-teble.jpg";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Dedicated to breaking down barriers and creating opportunities for international talent in the US. We understand the complexities of navigating immigration pathways and are committed to empowering skilled professionals to achieve their career aspirations. Our comprehensive approach combines expert guidance, strategic planning, and unwavering support to help you successfully transition and thrive in the American workplace.",
    size: "large",
    shape: "circle",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description:
      "Every professional's journey is unique. We provide tailored solutions, not one-size-fits-all advice.",
    size: "medium",
    shape: "triangle",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "95% placement success rate and 500+ satisfied professionals across diverse industries.",
    size: "medium",
    shape: "square",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "We stay current with market trends, visa policies, and hiring practices to serve you better.",
    size: "large",
    shape: "hexagon",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
} as const;

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO
        title="About"
        description="Learn about Nandani — our mission to help international students and professionals succeed in the US job market."
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About - Nandani",
        }}
      />
      <Navbar />

      {/* fancy Background */}
      <div className="fixed -inset-96 scale-150 -z-20 bg-background rotate-45 opacity-90">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/5"></div>
      </div>

      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto px-4 mb-12 md:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">
              About <span className="text-primary">Our Group</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Empowering international students and professionals to achieve
              their career dreams in the United States
            </p>
          </motion.div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto px-4 mb-16 md:mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Nandani was founded with a simple yet powerful vision: to
                  bridge the gap between talented international professionals
                  and career opportunities in the United States. We understand
                  firsthand the challenges of navigating a new job market,
                  understanding visa requirements, and adapting to workplace
                  culture.
                </p>
                <p>
                  What started as a small consulting practice has grown into a
                  comprehensive career services platform, helping hundreds of
                  international students and professionals launch and advance
                  their careers in the US. Our success is measured not just in
                  job placements, but in the lasting impact we make on our
                  clients' lives.
                </p>
                <p>
                  Today, we're proud to partner with leading companies across
                  technology, finance, healthcare, and other industries,
                  connecting exceptional international talent with opportunities
                  to grow and thrive.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              <div className="space-y-3 md:space-y-4">
                <div className="relative h-48 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden bg-card/50 backdrop-blur-[2px] border">
                  <img
                    src={teamHands}
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-32 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden bg-card/50 backdrop-blur-[2px] border">
                  <img
                    src={officeTopDow}
                    alt="Career success"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <div className="relative h-32 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden bg-card/50 backdrop-blur-[2px] border">
                  <img
                    src={officeDesk}
                    alt="Diverse team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden bg-card/50 backdrop-blur-[2px] border">
                  <img
                    src={teamOnTebal}
                    alt="Modern workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section - Bento Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto px-4 mb-16 md:mb-32"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our Values
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  relative overflow-hidden bg-card/50 backdrop-blur-[2px] border rounded-2xl md:rounded-3xl p-6 md:p-8
                  hover:shadow-lg transition-all duration-300 group
                  ${value.size === "large"
                    ? "md:col-span-2 lg:col-span-2"
                    : "md:col-span-1"
                  }
                  ${index === 0 ? "lg:row-span-2" : ""}
                `}
              >
                {/* Abstract Shape Background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  {value.shape === "circle" && (
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary" />
                  )}
                  {value.shape === "triangle" && (
                    <div
                      className="absolute -right-8 -top-8 w-0 h-0"
                      style={{
                        borderLeft: "80px solid transparent",
                        borderRight: "80px solid transparent",
                        borderBottom: "140px solid hsl(var(--primary))",
                      }}
                    />
                  )}
                  {value.shape === "square" && (
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 md:w-40 md:h-40 bg-primary rotate-12" />
                  )}
                  {value.shape === "hexagon" && (
                    <svg
                      className="absolute -right-12 -top-12 w-40 h-40 md:w-48 md:h-48"
                      viewBox="0 0 100 100"
                    >
                      <polygon
                        points="50 1 95 25 95 75 50 99 5 75 5 25"
                        fill="hsl(var(--primary))"
                      />
                    </svg>
                  )}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance">
                Ready to Start Your Journey?
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto text-pretty">
                Join hundreds of international professionals who have
                successfully launched their careers with our guidance
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-6 md:px-8 bg-white text-foreground hover:bg-white/90 text-sm md:text-base"
                asChild
              >
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

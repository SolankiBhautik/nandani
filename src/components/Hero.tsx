import { motion, Variants, Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/nav_logo.png";

const Hero = () => {
  // Type-safe animation variants
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // "easeOut" equivalent as cubic-bezier
      },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden">
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-transparent blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Section */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="space-y-4">
              <motion.img
                variants={fadeIn}
                src={logo}
                className="md:hidden mb-8 w-24"
                alt="site logo"
              />
              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Launch Your{" "}
                <motion.span
                  variants={fadeIn}
                  className="text-primary inline-block"
                >
                  Career
                </motion.span>{" "}
                in the US
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg lg:text-xl text-muted-foreground max-w-xl"
              >
                Expert job placement and training services for international
                students and professionals. Get the support you need to succeed
                in your career journey.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="rounded-full text-lg px-8 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 hover:bg-primary/5 transition-colors"
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="flex gap-8 pt-4"
            >
              {[
                { number: "500+", label: "Successful Placements" },
                { number: "95%", label: "Success Rate" },
                { number: "50+", label: "Partner Companies" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div className="text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div variants={fadeIn} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={heroImage}
                alt="International professionals collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -190 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <div className="font-semibold">Success Stories</div>
                  <div className="text-sm text-muted-foreground">
                    Join 500+ professionals
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import servicesList from "@/lib/servicesData";
import { Link } from "react-router-dom";

const abstractShapes = [
  // Circle pattern
  <svg
    key="circle"
    className="absolute -top-4 -right-4 w-32 h-32 opacity-5"
    viewBox="0 0 100 100"
  >
    <circle cx="50" cy="50" r="40" fill="currentColor" />
  </svg>,
  // Triangle pattern
  <svg
    key="triangle"
    className="absolute -bottom-6 -left-6 w-36 h-36 opacity-5"
    viewBox="0 0 100 100"
  >
    <polygon points="50,10 90,90 10,90" fill="currentColor" />
  </svg>,
  // Square pattern
  <svg
    key="square"
    className="absolute top-1/2 -right-8 w-28 h-28 opacity-5 rotate-45"
    viewBox="0 0 100 100"
  >
    <rect x="20" y="20" width="60" height="60" fill="currentColor" />
  </svg>,
  // Wave pattern
  <svg
    key="wave"
    className="absolute -bottom-4 -right-4 w-40 h-40 opacity-5"
    viewBox="0 0 100 100"
  >
    <path
      d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
      fill="currentColor"
    />
  </svg>,
  // Hexagon pattern
  <svg
    key="hexagon"
    className="absolute -top-6 -left-6 w-32 h-32 opacity-5"
    viewBox="0 0 100 100"
  >
    <polygon
      points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
      fill="currentColor"
    />
  </svg>,
  // Star pattern
  <svg
    key="star"
    className="absolute top-1/3 -left-8 w-36 h-36 opacity-5 rotate-12"
    viewBox="0 0 100 100"
  >
    <polygon
      points="50,10 61,40 92,40 67,60 78,90 50,70 22,90 33,60 8,40 39,40"
      fill="currentColor"
    />
  </svg>,
];

const Services = () => {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Services"
        description="Explore Nandani's career services for international students and professionals: resume optimization, interview prep, job search strategy, and placements."
        canonical="/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Services - Nandani",
        }}
      />
      {/* fancy Background */}
      <div className="fixed -inset-96 scale-150 -z-10 bg-background opacity-70">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      </div>

      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground">
              Comprehensive career services designed specifically for
              international students and professionals navigating the US job
              market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="group"
              >
                <Link
                  to={`/services/${service.id}`}
                  className="relative block bg-card/40 backdrop-blur-[2px] no-underline rounded-md md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/50 h-full overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-primary/5 rounded-bl-[2rem] md:rounded-bl-[3rem]"></div>

                  <div className="text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {abstractShapes[index % abstractShapes.length]}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12  flex items-center justify-center text-primary duration-300 z-10"
                  >
                    <service.icon size={20} className="md:w-6 md:h-6" />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500 rounded-md md:rounded-3xl"></div>

                  <div className="relative z-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 pr-12 md:pr-16">
                      {service.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-4 md:mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + idx * 0.05,
                            duration: 0.3,
                          }}
                          className="flex items-start gap-2 text-xs md:text-sm"
                        >
                          <span className="text-primary mt-1 flex-shrink-0 font-bold">
                            ✓
                          </span>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      variant="outline"
                      className="w-full rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 bg-transparent shadow-sm group-hover:shadow-md"
                      asChild
                    >
                      <div className="flex items-center justify-center">
                        <span className="sr-only">
                          Learn more about {service.title}
                        </span>
                        <span aria-hidden>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mt-12 md:mt-16"
          >
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Not sure which service is right for you?
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="rounded-full px-6 md:px-8" asChild>
                <Link to="/contact">Schedule a Free Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

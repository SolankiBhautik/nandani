import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Check,
  Star,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";
import { servicesMap } from "@/lib/servicesData";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";

const ServiceDetail = () => {
  const params = useParams();
  const serviceId = params?.serviceId as string;
  const service = serviceId ? servicesMap[serviceId] ?? null : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO
          title="Service Not Found"
          description="Requested service not found"
          canonical="/services"
        />
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
    <div className="min-h-screen relative">
      <SEO
        title={service.title}
        description={service.description}
        canonical={`/services/${serviceId}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: "Nandani",
          },
        }}
      />
      {/* fancy Background */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      </div>

      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/services">Services</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary">
                    {service.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          {/* Hero Section with Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-4 md:mb-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mb-4 md:mb-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-md md:rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-[2px] flex items-center justify-center text-primary border border-primary/20"
              >
                <ServiceIcon size={48} className="drop-shadow-lg" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
                  {service.title}
                </h1>
                <p className="md:text-xl text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -4 }}
                className="bg-card/10 backdrop-blur-[2px] rounded-md md:rounded-2xl p-2 md:p-4 border border-border/50 text-center"
              >
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-muted-foreground">Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -4 }}
                className="bg-card/10 backdrop-blur-[2px] rounded-md md:rounded-2xl p-2 md:p-4 border border-border/50 text-center"
              >
                <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -4 }}
                className="bg-card/10 backdrop-blur-[2px] rounded-md md:rounded-2xl p-2 md:p-4 border border-border/50 text-center"
              >
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-muted-foreground">Success</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="bg-card/30 backdrop-blur-[2px]  rounded-md md:rounded-3xl p-4 md:p-10 border border-border/50 shadow-lg mb-8 relative overflow-hidden"
          >
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

            {/* Overview */}
            <div className="relative mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
                Overview
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Divider */}
            <div className="relative mb-6 md:mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-card/40 backdrop-blur-[2px]  px-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="relative mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3">
                What You Get
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs md:text-base">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="relative mb-6 md:mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-card/40 backdrop-blur-[2px]  px-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="relative">
              <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">
                Our Process
              </h2>
              <ol className="space-y-6">
                {service.process.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="flex gap-4 group"
                  >
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-md md:rounded-2xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow"
                      >
                        {index + 1}
                      </motion.div>
                      {index < service.process.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent"></div>
                      )}
                    </div>
                    <p className="pt-2 text-sm md:text-base flex-1">{step}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-[2px]  rounded-md md:rounded-3xl p-6 md:p-10 border-2 border-primary/30 shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground">
                    {service.pricing}
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow"
                    asChild
                  >
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;

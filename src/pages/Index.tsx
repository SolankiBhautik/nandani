import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Navbar />
        <Hero />
        <HowItWorks />
        <ServicesPreview />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default Index;

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Home"
        description="Expert job placement and career training for international students and professionals in the US. Resume building, interview prep, and personalized job search support."
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nandani",
          url: "https://your-domain.example/",
        }}
      />
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

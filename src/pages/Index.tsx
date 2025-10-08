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
          url: "https://nandaniconsultancy.vercel.app/",
        }}
      />
      <main>
        {/* fancy Background */}
        <div className="fixed -inset-96 scale-150 -z-10 bg-background rotate-45 opacity-70">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        </div>
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

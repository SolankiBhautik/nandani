import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { servicesMap } from "@/lib/servicesData";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceId ? servicesMap[serviceId] ?? null : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center text-primary hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ServiceIcon size={40} />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-sm border mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-sm border mb-8">
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-sm border mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {service.pricing}
                  </p>
                </div>
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { servicesList } from "@/lib/servicesData";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive career services designed specifically for
              international students and professionals navigating the US job
              market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
            {servicesList.map((service, index) => (
              <Link
                to={`/services/${service.id}`}
                key={index}
                className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border hover:border-primary/50 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>

                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                  asChild
                >
                  <div>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Button>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg mb-6">
              Not sure which service is right for you?
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

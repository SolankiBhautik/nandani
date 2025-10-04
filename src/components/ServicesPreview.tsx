import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesList } from "@/lib/servicesData";

const ServicesPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Services We Offer</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive Career <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From resume building to post-hire support, we provide end-to-end
            services to ensure your career success in the United States.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesList.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.id}`}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-lg px-8"
            asChild
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

import { servicesList } from "@/lib/servicesData";
import { StickyServiceCard } from "./StickyServiceCard";

const ServicesPreview = () => {
  return (
    <section className="mt-8 py-6 lg:py-14">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <p className="mb-2 font-semibold text-primary">Services We Offer</p>
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">
            Comprehensive Career Solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            End-to-end support from resumes to relocation—stacked vertically
            with a sticky progression for immersive browsing.
          </p>
        </header>

        <div className="relative flex flex-col gap-6">
          {servicesList.map((service, index) => {
            const topOffsetPx = 88 + index * 10;
            return (
              <StickyServiceCard
                key={service.id}
                service={service}
                index={index}
                topOffsetPx={topOffsetPx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

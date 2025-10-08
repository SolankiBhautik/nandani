import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/nav_logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28">
      <div className="container mx-auto px-4 relative z-10 bg-white/10 backdrop-blur-sm rounded-sm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <img src={logo} className="md:hidden mb-8" alt="site logo" />
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Launch Your <span className="text-primary">Career</span> in the
                US
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Expert job placement and training services for international
                students and professionals. Get the support you need to succeed
                in your career journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full text-lg px-8 bg-primary hover:bg-primary/90"
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
                className="rounded-full text-lg px-8"
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Successful Placements
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">
                  Success Rate
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Partner Companies
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="International professionals collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

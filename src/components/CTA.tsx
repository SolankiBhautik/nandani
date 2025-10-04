import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="">
            <div className="grid lg:grid-cols-12 gap-4 lg:gap-0 items-center">
              <div className="space-y-6 p-8 lg:pr-20 lg:col-span-8 text-white bg-gradient-to-br from-primary to-primary/80 rounded-3xl overflow-hidden shadow-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready to Start Your Career Journey?
                </h2>
                <p className="text-lg text-white/90">
                  Join hundreds of international professionals who have successfully
                  launched their careers in the US with our expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full text-lg px-8 bg-white text-foreground hover:bg-white/90"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full text-lg px-8 border-white text-black hover:bg-white/10"
                    asChild
                  >
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </div>

              <div className="relative lg:col-span-4 lg:-translate-x-20 bg-foreground px-8 py-4 rounded-3xl outline-4 outline-secondary outline">
                <div className="backdrop-blur-sm rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-white/80">Professionals Placed</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-xl">
                        ✓
                      </div>
                      <span className="text-white">Free initial consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-xl">
                        ✓
                      </div>
                      <span className="text-white">Expert career advisors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-xl">
                        ✓
                      </div>
                      <span className="text-white">Proven success track record</span>
                    </div>
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

export default CTA;

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MessageCircle,
  Check,
  ChevronsUpDown,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Popular countries list
const countries = [
  { value: "us", label: "United States" },
  { value: "gb", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "in", label: "India" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
  { value: "br", label: "Brazil" },
  { value: "mx", label: "Mexico" },
  { value: "es", label: "Spain" },
  { value: "it", label: "Italy" },
  { value: "nl", label: "Netherlands" },
  { value: "se", label: "Sweden" },
  { value: "sg", label: "Singapore" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "nz", label: "New Zealand" },
  { value: "za", label: "South Africa" },
  { value: "other", label: "Other" },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xrbyllkz");
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  if (state.succeeded) {
    return (
      <div className="min-h-screen">
        <SEO
          title="Contact"
          description="Contact Nandani to schedule a free consultation about career placement and visa guidance for international professionals."
          canonical="/contact"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact - Nandani",
          }}
        />
        <Navbar />


        {/* fancy Background */}
        <div className="fixed -inset-96 scale-150 -z-20 bg-background rotate-45 opacity-90">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/5"></div>
        </div>

        <main className="pt-32 pb-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Thank You!
              </h1>
              <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">
                Your message has been sent successfully. We'll get back to you
                as soon as possible.
              </p>
              <Button size="lg" className="rounded-full" asChild>
                <a href="/">Back to Home</a>
              </Button>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us"
        description="Get in touch with Nandani — our team is here to guide international students and professionals through every step of their study abroad and career journey. Reach out for expert help and personalized support."
        canonical="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact - Nandani",
          description:
            "Contact Nandani for personalized guidance and support for studying and working abroad.",
        }}
      />
      <Navbar />


      {/* fancy Background */}
      <div className="fixed -inset-96 scale-150 -z-20 bg-background rotate-45 opacity-90">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/5"></div>
      </div>

      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            >
              Get In <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-xl text-muted-foreground"
            >
              Ready to take the next step in your career? We're here to help.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
              className="bg-card/10 backdrop-blur-[2px] rounded-md md:rounded-3xl p-6 md:p-8 shadow-sm border relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative">
                Send Us a Message
              </h2>

              <form
                onSubmit={(e) => {
                  if (!country) {
                    e.preventDefault();
                    setOpen(true);
                    return;
                  }
                  handleSubmit(e);
                }}
                className="space-y-4 md:space-y-6 relative"
              >
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="rounded-xl h-11 md:h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your full name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-xl h-11 md:h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </motion.div>

                {/* Phone Field - Now Required */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="rounded-xl h-11 md:h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="(555) 000-0000"
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </motion.div>

                {/* Country Field - New Searchable Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium mb-2"
                  >
                    Country *
                  </label>
                  <input
                    name="country"
                    value={country}
                    required
                    style={{
                      position: "absolute",
                      opacity: 0,
                      pointerEvents: "none",
                      height: 0,
                      width: 0,
                    }}
                    tabIndex={-1}
                  />
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full text-muted-foreground justify-between rounded-xl h-11 md:h-12 bg-background/50 border-border/50 hover:bg-white hover:text-black"
                      >
                        <span className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          {country
                            ? countries.find((c) => c.value === country)?.label
                            : "Select country..."}
                        </span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0" align="start">
                      <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((c) => (
                              <CommandItem
                                key={c.value}
                                value={c.value}
                                onSelect={(currentValue) => {
                                  setCountry(
                                    currentValue === country ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    country === c.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {c.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <ValidationError
                    prefix="Country"
                    field="country"
                    errors={state.errors}
                  />
                </motion.div>

                {/* Message Field - Now Optional */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className="rounded-xl min-h-[120px] md:min-h-[150px] bg-background/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your career goals and how we can help..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={state.submitting}
                    className="w-full rounded-full h-11 md:h-12 font-medium"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
                className="bg-card/10 backdrop-blur-[2px] rounded-md md:rounded-3xl p-6 md:p-8 shadow-sm border relative overflow-hidden"
              >
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />

                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative">
                  Contact Information
                </h2>

                <div className="space-y-4 md:space-y-6 relative">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:jaynilrupareliya04@gmail.com"
                        className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        jaynilrupareliya04@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:ghorisohil8@gmail.com"
                        className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                      >ghorisohil8@gmail.com</a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+919712483235"
                        className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 9712483235
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+919725912265"
                        className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                      >+91 97259 12265</a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/919712483235"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-md md:rounded-3xl p-6 md:p-8 border-2 border-primary/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 relative">
                  Schedule a Free Consultation
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 relative">
                  Not sure where to start? Book a free 30-minute consultation to
                  discuss your career goals and learn how we can help.
                </p>
                <Button
                  size="lg"
                  className="rounded-full w-full h-11 md:h-12 relative"
                  asChild
                >
                  <a href="mailto:jaynilrupareliya04@gmail.com?subject=Free Consultation Request">
                    Book Consultation
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

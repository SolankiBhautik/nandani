import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { useMemo } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Nandani helped me navigate the complex US job market. Their resume optimization and interview coaching were game-changers. I landed my dream job at Google within 3 months!",
  },
  {
    name: "Carlos Rodriguez",
    role: "Data Analyst at Amazon",
    image:
      "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The visa support and salary negotiation guidance were invaluable. The team understood the unique challenges international professionals face and provided targeted solutions.",
  },
  {
    name: "Yuki Tanaka",
    role: "Product Manager at Microsoft",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Professional, knowledgeable, and genuinely invested in my success. The mock interviews prepared me perfectly for the real thing. Highly recommend their services!",
  },
  {
    name: "Gabrielle Williams",
    role: "CEO and Co‑founder, ABC Company",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Creative geniuses who listen, understand, and craft captivating visuals – an agency that truly understands our needs.",
  },
  {
    name: "Samantha Johnson",
    role: "Head of Design, Delta Co.",
    image:
      "https://images.unsplash.com/photo-1517841905240-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Exceeded our expectations with innovative designs that brought our vision to life – a remarkable creative partner.",
  },
  {
    name: "John Peter",
    role: "Founder, Studio J",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Their team’s artistic flair and strategic approach resulted in exceptional campaigns – highly dependable.",
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Nandani helped me navigate the complex US job market. Their resume optimization and interview coaching were game-changers. I landed my dream job at Google within 3 months!",
  },
  {
    name: "Carlos Rodriguez",
    role: "Data Analyst at Amazon",
    image:
      "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The visa support and salary negotiation guidance were invaluable. The team understood the unique challenges international professionals face and provided targeted solutions.",
  },
  {
    name: "Yuki Tanaka",
    role: "Product Manager at Microsoft",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Professional, knowledgeable, and genuinely invested in my success. The mock interviews prepared me perfectly for the real thing. Highly recommend their services!",
  },
  {
    name: "Gabrielle Williams",
    role: "CEO and Co‑founder, ABC Company",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Creative geniuses who listen, understand, and craft captivating visuals – an agency that truly understands our needs.",
  },
  {
    name: "Samantha Johnson",
    role: "Head of Design, Delta Co.",
    image:
      "https://images.unsplash.com/photo-1517841905240-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Exceeded our expectations with innovative designs that brought our vision to life – a remarkable creative partner.",
  },
  {
    name: "John Peter",
    role: "Founder, Studio J",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Their team’s artistic flair and strategic approach resulted in exceptional campaigns – highly dependable.",
  },
];

const TestimonialCard = ({ t }: { t: any }) => (
  <div className="w-[280px] sm:w-[320px] md:w-[420px] shrink-0 bg-card flex flex-col rounded-lg md:rounded-3xl p-3 md:p-6 shadow-sm hover:shadow-lg transition-shadow border">
    <div className="flex gap-1 mb-3 sm:mb-4">
      {Array.from({ length: t.rating }, (_, i) => (
        <Star
          key={i}
          className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary"
        />
      ))}
    </div>

    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed line-clamp-5">
      "{t.text}"
    </p>

    <div className="flex items-center gap-3 sm:gap-4 mt-auto">
      <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
        <AvatarImage
          src={t.image || "/placeholder.svg"}
          alt={`${t.name} photo`}
        />
        <AvatarFallback>
          {t.name
            .split(" ")
            .map((n: string) => n[0])
            .slice(0, 2)
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="font-semibold text-sm sm:text-base">{t.name}</div>
        <div className="text-xs sm:text-sm text-muted-foreground">{t.role}</div>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const reduceMotion = useReducedMotion();
  const items = useMemo(() => [...testimonials, ...testimonials], []);

  const marqueeAnimation = (reverse = false, duration = 28) =>
    reduceMotion
      ? undefined
      : {
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
          transition: {
            duration,
            ease: "linear" as const,
            repeat: Infinity,
          },
        };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="relative mx-auto">
          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-60 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-60 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals who transformed their careers with Nandani
            </p>
          </div>

          {/* Infinite marquee */}
          <div className="relative overflow-hidden">
            {/* Row 1 */}
            <motion.div
              className="flex gap-2 sm:gap-4 md:gap-6 py-1 sm:py-2 will-change-transform"
              aria-hidden
              animate={marqueeAnimation(false, 28)}
            >
              {items.map((t, index) => (
                <TestimonialCard key={`row1-${index}-${t.name}`} t={t} />
              ))}
            </motion.div>

            {/* Row 2 (reverse, slower for parallax) */}
            <motion.div
              className="flex gap-2 sm:gap-4 md:gap-6 py-1 sm:py-2 will-change-transform"
              aria-hidden
              animate={marqueeAnimation(true, 32)}
            >
              {[...items].reverse().map((t, index) => (
                <TestimonialCard key={`row2-${index}-${t.name}`} t={t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

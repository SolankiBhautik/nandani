import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    image: "👩‍💻",
    rating: 5,
    text: "Nandani helped me navigate the complex US job market. Their resume optimization and interview coaching were game-changers. I landed my dream job at Google within 3 months!",
  },
  {
    name: "Carlos Rodriguez",
    role: "Data Analyst at Amazon",
    image: "👨‍💼",
    rating: 5,
    text: "The visa support and salary negotiation guidance were invaluable. The team understood the unique challenges international professionals face and provided targeted solutions.",
  },
  {
    name: "Yuki Tanaka",
    role: "Product Manager at Microsoft",
    image: "👨‍💻",
    rating: 5,
    text: "Professional, knowledgeable, and genuinely invested in my success. The mock interviews prepared me perfectly for the real thing. Highly recommend their services!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals who transformed their careers with Nandani
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

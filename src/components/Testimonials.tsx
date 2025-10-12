import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { useMemo } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Software Developer at Deloitte",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The team at Nandani felt like family from day one. They personally reviewed my resume three times until it was perfect. Their attention to detail helped me land interviews at companies I didn't think would notice me. Got my offer in 2 months!",
  },
  {
    name: "Priya Mehta",
    role: "Data Analyst at Accenture",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "I was struggling with technical interviews until I found Nandani. They're a small team but incredibly dedicated. The mock coding sessions were tough but so helpful. I finally understood how to approach problems the right way. Landed my job within 6 weeks!",
  },
  {
    name: "Amit Patel",
    role: "Full Stack Engineer at Cognizant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "What I loved most was how personal everything felt. They remembered details about my background and tailored every session to my needs. The interview coaching gave me confidence I didn't know I had. Truly grateful for their support!",
  },
  {
    name: "Sneha Reddy",
    role: "Business Analyst at Infosys",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The job search strategy training completely changed how I approached applications. I was applying to 50+ jobs blindly before. They taught me to be strategic and efficient. Now I apply to fewer but better-fit roles. Got 3 interviews in my first week!",
  },
  {
    name: "Vikram Singh",
    role: "QA Engineer at TCS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "I appreciated how they never made me feel like just another client. Every call felt like talking to a mentor who genuinely cared. The resume they built for me was ATS-friendly and actually got me calls. Worth every penny!",
  },
  {
    name: "Anjali Sharma",
    role: "Frontend Developer at Capgemini",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Being from India, I wasn't sure how to present my experience to US employers. The team understood this completely and helped me reframe everything. They're patient, kind, and truly invested in seeing you succeed. My resume looks professional now!",
  },
  {
    name: "Karthik Venkat",
    role: "DevOps Engineer at Wipro",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The technical support sessions were intense but incredibly valuable. They didn't just give me answers—they taught me how to think through problems. The personalized feedback after each mock interview helped me improve quickly. Highly recommend!",
  },
  {
    name: "Deepa Iyer",
    role: "Product Analyst at Tech Mahindra",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "What sets them apart is how accessible they are. I could text them with questions anytime and they'd respond quickly. The team is small but mighty—they really know their stuff and care about results. My job search went from months to weeks!",
  },
  {
    name: "Rohan Desai",
    role: "Software Engineer at HCL Technologies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "I came to them frustrated after 4 months of rejections. They took time to understand what wasn't working and fixed it. The interview coaching built my confidence tremendously. Finally got multiple offers and they even helped me negotiate!",
  },
  {
    name: "Meera Krishnan",
    role: "Systems Analyst at IBM",
    image: "https://images.unsplash.com/photo-1517841905240-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The team treated me like I was their only client even though I know they work with others. They celebrated my small wins with me and kept me motivated during tough weeks. More than consultants, they became my support system. Forever grateful!",
  },
  {
    name: "Arjun Nair",
    role: "Cloud Engineer at Oracle",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Learning the job search strategies was eye-opening. I was wasting so much time before! They showed me how to find the right jobs quickly and apply efficiently. My application response rate went from 2% to 15%. Game changer!",
  },
  {
    name: "Nisha Gupta",
    role: "Junior Developer at DXC Technology",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "As a fresh graduate from India, I was completely lost. The team patiently walked me through everything—resume building, interviews, even how to follow up professionally. They made the US job market feel less scary. Got my first job in 5 weeks!",
  },
  {
    name: "Sanjay Bose",
    role: "Backend Developer at NTT DATA",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The technical interview prep was worth its weight in gold. They identified my weak areas immediately and created a custom practice plan. The mock interviews were challenging but prepared me perfectly. I walked into my real interview feeling ready!",
  },
  {
    name: "Kavya Menon",
    role: "UI/UX Designer at Persistent Systems",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "I loved how personal and warm they were throughout the process. They remembered my son's birthday and asked about my family. It felt like working with friends who happened to be really good at career coaching. Genuinely wonderful people!",
  },
  {
    name: "Aditya Rao",
    role: "Data Engineer at LTI Mindtree",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "My resume was getting zero responses before. They rebuilt it from scratch focusing on ATS optimization. Within a week of applying with the new resume, I had 4 interview requests! The difference was night and day. Thank you team!",
  },
  {
    name: "Pooja Joshi",
    role: "Test Engineer at Mphasis",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The best part was how they adjusted their coaching style to fit me. I'm naturally quiet in interviews and they worked with me on that without trying to change who I am. They build on your strengths rather than forcing you into a mold. Brilliant approach!",
  },
  {
    name: "Manish Saxena",
    role: "Application Developer at Tata Consultancy Services",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "I was skeptical about paying for career services, but this was the best investment I made. The team is small, responsive, and incredibly knowledgeable. They helped me land a job that pays 40% more than my target salary. ROI was massive!",
  },
  {
    name: "Riya Kapoor",
    role: "Salesforce Developer at Tech9",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "What I appreciated most was their honesty. They told me when my expectations were unrealistic and guided me toward better options. No false promises, just real advice from people who care. That integrity means everything.",
  },
  {
    name: "Suresh Pillai",
    role: "Senior Analyst at Genpact",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The job search strategy training saved me months of frustration. I learned exactly where to look, how to apply, and how to track everything efficiently. My search became organized and actually productive. Got my offer after just 7 weeks of focused searching!",
  },
  {
    name: "Divya Srinivasan",
    role: "Mobile Developer at Zensar",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "They made me feel heard and understood from the very first call. As someone moving from India to the US market, I had so many questions. They patiently answered everything and made the transition smooth. Couldn't have done it without them!",
  },
  {
    name: "Abhishek Malhotra",
    role: "Java Developer at Hexaware",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The technical coaching was exactly what I needed. They helped me understand not just the 'what' but the 'why' behind coding problems. My problem-solving improved dramatically. The mock interviews were tough but prepared me perfectly for the real thing!",
  },
  {
    name: "Lakshmi Narayan",
    role: "Business Intelligence Analyst at Syntel",
    image: "https://images.unsplash.com/photo-1517841905240-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "Working with this team felt like having a personal career advisor who actually cared about my success. They followed up regularly, checked on my progress, and adjusted strategies when needed. The personal touch made all the difference!",
  },
  {
    name: "Harish Reddy",
    role: "DevOps Consultant at GlobalLogic",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "I was stuck in my job search for months until I found them. They identified exactly what was wrong with my approach and fixed it. The interview coaching sessions were personalized to my industry and skill level. Finally got my breakthrough!",
  },
  {
    name: "Swati Mishra",
    role: "Python Developer at L&T Infotech",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The team's warmth and encouragement kept me going during rejections. They celebrated every small win with me—first interview call, first second round, and finally the offer! They're not just consultants, they're genuine cheerleaders for your success!",
  },
  {
    name: "Nikhil Agarwal",
    role: "Full Stack Developer at Mindtree",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The job application training completely transformed how I search for jobs. I went from spending hours on irrelevant applications to focusing on quality opportunities. My efficiency doubled and so did my interview rate. Best decision I made!",
  },
  {
    name: "Rashmi Verma",
    role: "Software Tester at Birlasoft",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "What impressed me was their genuine investment in my success. They weren't just going through the motions—they really cared. Every session was tailored to me, every piece of advice was thoughtful. It shows when people truly love what they do!",
  },
  {
    name: "Varun Choudhary",
    role: "Solutions Architect at Cyient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "After 6 months of unsuccessful job hunting, I was losing hope. The team rebuilt my confidence along with my resume. They taught me how to tell my story effectively and prepare for tough questions. Got my offer within 8 weeks of starting with them!",
  },
  {
    name: "Shruti Deshmukh",
    role: "Scrum Master at Tech Mahindra",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The small team size was actually a huge advantage. I got personalized attention and they really got to know me. They understood my goals, my challenges, and created a plan that worked specifically for me. Personal service at its best!",
  },
  {
    name: "Gaurav Tiwari",
    role: "Network Engineer at Larsen & Toubro",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "From resume to interview prep to job search strategy—everything was top-notch. But what really stood out was how much they cared. They checked in even after I got the job to see how I was settling in. That's the kind of team they are!",
  },
  {
    name: "Ananya Chatterjee",
    role: "Digital Marketing Analyst at WNS Global",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "I can't say enough good things about this team. They made a stressful process feel manageable and even exciting. The interview coaching gave me tools I'll use throughout my career. They don't just help you get a job—they help you grow as a professional!",
  },
  {
    name: "Rahul Bhattacharya",
    role: "Automation Engineer at Honeywell",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=3&w=96&h=96&q=80",
    rating: 5,
    text: "The technical support and interview coaching combo was perfect for me. They helped me nail both the coding rounds and behavioral interviews. The personal attention and customized practice sessions made me feel prepared for anything. Landed my ideal role thanks to them!",
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

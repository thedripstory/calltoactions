import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The calltoactions team transformed our outdated website into a conversion machine. Our leads increased by 200% in just two months. Best investment we've made.",
    author: "Priya Sharma",
    role: "CEO, TechStart India",
  },
  {
    quote: "Working with AG & Rohit was refreshingly different. No BS, just clear communication and exceptional results. Our site loads in under a second now.",
    author: "Rahul Mehta",
    role: "Founder, GrowthCo",
  },
  {
    quote: "Finally, a team that understands business. AG & Rohit didn't just build a website—they built a tool that actually drives revenue.",
    author: "Ananya Patel",
    role: "Marketing Director, ScaleUp",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-card/30" ref={ref}>
      {/* Background accents */}
      <div className="absolute left-0 bottom-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            What They <span className="text-primary">&lt;say/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Don't take our word for it. Here's what clients have to say.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-border/50 rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-all duration-500"
            >
              <Quote size={28} className="sm:w-8 sm:h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-sm sm:text-base">"{testimonial.quote}"</p>
              <div>
                <p className="font-display font-semibold text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-muted-foreground text-xs sm:text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery Call',
    description: 'We hop on a quick call to understand your business, goals, and what you need. No jargon, just straight talk.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy & Design',
    description: 'I create a plan tailored to your needs—wireframes, design concepts, and a clear roadmap for your project.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Development',
    description: 'This is where the magic happens. Clean code, pixel-perfect design, and regular updates so you always know where we stand.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Support',
    description: 'Your site goes live, and I stick around to make sure everything runs smoothly. Ongoing support when you need it.',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute right-0 top-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            How I <span className="text-primary">&lt;work/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            A simple, streamlined process that keeps you in the loop and delivers results on time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Connector line - hidden on mobile, visible on larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-border" />
              )}
              
              <div className="bg-card border border-border/50 rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon size={20} className="sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-primary/30">{step.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

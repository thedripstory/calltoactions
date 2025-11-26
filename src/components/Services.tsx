import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Zap, Code, Palette, Search, Wrench, Bot } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description: 'Your website gets traffic but no sales? I analyze user behavior, fix friction points, and optimize every step of your funnel. Data-driven changes that actually move the needle.'
  },
  {
    icon: Zap,
    title: 'Speed Optimization',
    description: 'Slow sites kill conversions. I make your website load in under a second—optimized images, clean code, and lightning-fast hosting. Speed that keeps visitors engaged.'
  },
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'From landing pages to full web apps. React, Next.js, TypeScript—modern tech stack, clean architecture, scalable code. Built right the first time.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful interfaces that users actually enjoy. I combine aesthetics with usability to create experiences that convert visitors into loyal customers.'
  },
  {
    icon: Bot,
    title: 'AI Discoverability',
    description: 'Get found by AI. I build websites optimized for ChatGPT, Perplexity, and other AI assistants. Structured data, semantic markup, and content that AI can recommend and index.'
  },
  {
    icon: Search,
    title: 'SEO That Works',
    description: 'No black-hat tricks. Technical SEO, content optimization, and site structure that Google loves. Organic traffic that compounds over time.'
  },
  {
    icon: Wrench,
    title: 'Ongoing Support',
    description: 'Your site needs maintenance. Security updates, performance monitoring, quick fixes—I keep your digital presence running smooth so you can focus on your business.'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-card/30" ref={ref}>
      {/* Background accents */}
      <div className="absolute left-0 top-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left side - sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
                What I <span className="text-primary">&lt;do/&gt;</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I don't just build websites. I build digital assets that work 24/7 to grow your business. 
                Every project is crafted to convert, perform, and scale.
              </p>
            </motion.div>
          </div>

          {/* Right side - service cards */}
          <div className="space-y-4 sm:space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark group cursor-pointer"
              >
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                      <service.icon size={20} className="sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

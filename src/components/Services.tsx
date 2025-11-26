import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Zap, Code, Palette, TrendingUp, Shield } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Improve Store Conversion Rate',
    description: 'Ready to turn clicks into cash? Our e-focus CRO turns doubts into the road to market lifesavers. We\'ll analyze your user journey, fix your pain points, integrate with your tracking or CRM to enable reasonable report. Say goodbye to leaps of faith. Expect data-backed insights that keep websites churning conversions that\'s unreal.'
  },
  {
    icon: Zap,
    title: '3x (or more) Store Speed',
    description: 'In the fast-paced world of the Internet, speed is everything. That\'s why we are committed to a switch on words that\'s all about making your web portfolio move at the speed of light, no compromise about that. It\'s from page loading initiation to render. Fancy reducing visitor wait time to millisec? Say no more.'
  },
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'From concept to deployment, we build scalable web applications using modern frameworks like React, Next.js, and Node.js. Clean code, best practices, and future-proof architecture.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful interfaces that users love. We combine aesthetics with usability to create memorable digital experiences that keep users engaged and coming back.'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Get found online. We implement technical SEO best practices, optimize content, and improve site structure to boost your organic rankings and drive traffic.'
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Keep your site running smoothly with our ongoing maintenance packages. Security updates, performance monitoring, and priority support when you need it.'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-card/30" ref={ref}>
      {/* Background accents */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - sticky header */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our <span className="text-primary">&lt;services/&gt;</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Call to Actions, we're not just in the business of 'building' to be converting & 
                delivering websites. We're in the business of crafting digital masterpieces that 
                captivate, convert, and make you feel like the coolest, most powerful version of 
                e-commerce.
              </p>
            </motion.div>
          </div>

          {/* Right side - service cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="card-dark group cursor-pointer"
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
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

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Uno Banking Website',
    category: 'FinTech',
    description: 'A modern banking platform redesign that increased user engagement by 40%. Clean interface with intuitive navigation and seamless mobile experience.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'WeCommerce Shop',
    category: 'E-Commerce',
    description: 'Full-stack e-commerce solution with headless CMS integration. Achieved 3x faster page loads and 25% higher conversion rates.',
    tags: ['Next.js', 'Shopify', 'Tailwind'],
  },
  {
    title: 'Inter Bank Mobile Apps',
    category: 'Mobile Banking',
    description: 'Cross-platform mobile banking app serving 100k+ users. Biometric authentication, real-time notifications, and offline support.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
  },
  {
    title: 'DataVault Dashboard',
    category: 'SaaS Platform',
    description: 'Enterprise analytics dashboard processing millions of data points. Real-time visualizations and AI-powered insights.',
    tags: ['Vue.js', 'Python', 'AWS'],
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide comprehensive solutions for your startup, brand, or company. 
            We have more than 100+ satisfied clients. We use the best software to keep our service.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              {/* Image placeholder */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-[16/10] bg-card border border-border rounded-2xl overflow-hidden relative group">
                  {/* Decorative gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                  
                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <ExternalLink size={40} className="text-primary" />
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary/10"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                <div className={`flex items-center gap-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-primary rounded-sm" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold">{project.title}</h3>
                <p className="text-sm text-primary font-medium">{project.category}</p>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className={`group flex items-center gap-2 text-foreground hover:text-primary transition-colors ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  View More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.png';
import portfolio2 from '@/assets/portfolio-2.png';
import portfolio3 from '@/assets/portfolio-3.png';
import portfolio4 from '@/assets/portfolio-4.png';

const projects = [
  {
    title: 'FinTrack Banking Platform',
    category: 'FinTech',
    description: 'A modern banking dashboard that increased user engagement by 40%. Clean interface with intuitive navigation and real-time analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: portfolio1,
  },
  {
    title: 'StyleHub E-Commerce',
    category: 'E-Commerce',
    description: 'Full-stack fashion store with headless CMS. Achieved 3x faster page loads and 25% higher conversion rates through strategic UX improvements.',
    tags: ['Next.js', 'Shopify', 'Tailwind'],
    image: portfolio2,
  },
  {
    title: 'DataVault Analytics',
    category: 'SaaS Platform',
    description: 'Enterprise analytics dashboard processing millions of data points. Real-time visualizations and AI-powered business insights.',
    tags: ['Vue.js', 'Python', 'AWS'],
    image: portfolio3,
  },
  {
    title: 'HealthSync Platform',
    category: 'Healthcare Tech',
    description: 'Telemedicine platform serving 50k+ patients. HIPAA-compliant, with seamless video consultations and patient record management.',
    tags: ['React', 'Firebase', 'WebRTC'],
    image: portfolio4,
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
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            Recent <span className="text-primary">&lt;work/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            A selection of projects where I helped businesses transform their online presence 
            and drive real results.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div 
                  className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden relative group border border-border/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`space-y-3 sm:space-y-4 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                <p className="text-xs sm:text-sm text-primary font-medium">{project.category}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 sm:px-3 py-1 bg-secondary text-[10px] sm:text-xs rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className={`group flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                  View Case Study
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12 sm:mt-16"
        >
          <button className="btn-primary">
            See All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

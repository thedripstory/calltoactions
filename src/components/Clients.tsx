import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clientLogos = [
  'TechStart', 'GrowthCo', 'ScaleUp', 'InnovateLab', 'CloudWise', 
  'DataSync', 'AppForge', 'WebFlow', 'DigitalEdge', 'NextGen'
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2 sm:mb-3">
            Trusted By
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg">Startups and businesses that chose results</p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* First row */}
        <div className="flex overflow-hidden mb-3 sm:mb-4">
          <motion.div
            animate={{ x: [0, -50 * clientLogos.length] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 sm:gap-4 pr-3 sm:pr-4"
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 sm:w-40 h-12 sm:h-16 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/30 transition-all duration-500 hover:bg-card/80"
              >
                <span className="text-muted-foreground font-medium text-xs sm:text-sm">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - reverse direction */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-50 * clientLogos.length, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 sm:gap-4 pr-3 sm:pr-4"
          >
            {[...clientLogos].reverse().concat([...clientLogos].reverse()).map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 sm:w-40 h-12 sm:h-16 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/30 transition-all duration-500 hover:bg-card/80"
              >
                <span className="text-muted-foreground font-medium text-xs sm:text-sm">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

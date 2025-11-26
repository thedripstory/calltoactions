import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clientLogos = [
  'TechCorp', 'Innovate', 'DigitalX', 'CloudNet', 'DataFlow', 
  'ByteWise', 'CodeLabs', 'NetPrime', 'SyncHub', 'WebScale'
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            The Crème de la Crème
          </h2>
          <p className="text-muted-foreground text-lg">(a.k.a, Our Clients)</p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* First row */}
        <div className="flex overflow-hidden mb-4">
          <motion.div
            animate={{ x: [0, -50 * clientLogos.length] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 pr-4"
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-16 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors duration-300"
              >
                <span className="text-muted-foreground font-medium text-sm">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - reverse direction */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-50 * clientLogos.length, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 pr-4"
          >
            {[...clientLogos.reverse(), ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-16 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors duration-300"
              >
                <span className="text-muted-foreground font-medium text-sm">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

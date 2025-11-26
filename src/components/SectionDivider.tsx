import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="md:hidden py-6 px-6">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </div>
  );
};

export default SectionDivider;

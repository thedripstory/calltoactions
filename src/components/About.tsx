import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Rocket, Award, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Users, value: '250+', label: 'Clients Delighted' },
  { icon: Rocket, value: '50+', label: 'Rocket Power-ups' },
  { icon: Award, value: '200+', label: 'Success Examples' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - decorative image area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden relative">
              {/* Decorative geometric shapes */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,hsl(var(--primary)/0.1)_48%,hsl(var(--primary)/0.1)_52%,transparent_52%)] bg-[size:20px_20px]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 w-20 h-20 border border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 left-10 w-16 h-16 border border-primary/20"
              />
            </div>
          </motion.div>

          {/* Right side - content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About <span className="text-primary">&lt;us/&gt;</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Nope, sorry, not going to boast a 43-member team here. 
                Based out of Chennai & New Delhi, we're a lean and agile crew that's 
                pleasantly gritty. We know in the 'no messaging of appraisals' for bland 
                and 'no yes-men' for the projects that truly break glass. You'll be talking 
                to me (Arun), the owner.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Also, <span className="text-primary">who needs a herd when you've got a couple of unicorns?</span>
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon size={28} className="mx-auto mb-3 text-primary" />
                  <p className="text-3xl md:text-4xl font-display font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="btn-outline flex items-center gap-2 group">
                See Case Study Notion Page
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

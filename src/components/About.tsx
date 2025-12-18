import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TrendingUp, Clock, Award } from 'lucide-react';
import agPhoto from '@/assets/ag-photo.jpeg';

const rohitPhoto = 'https://pub-9317324318d04523b29b5dcb3ce98bef.r2.dev/for-landing-page/Misc./rohit.jpeg';

const stats = [{
  icon: TrendingUp,
  value: '50+',
  label: 'Projects Delivered'
}, {
  icon: Clock,
  value: '4+',
  label: 'Years Experience'
}, {
  icon: Award,
  value: '100%',
  label: 'Client Satisfaction'
}];

const About = () => {
  const ref = useRef(null);
  const [hoveredImage, setHoveredImage] = useState<'ag' | 'rohit' | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Co-founders photos */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }} className="relative order-2 lg:order-1">
            <div className="relative flex justify-center lg:justify-start items-end">
              {/* AG's Photo - larger */}
              <motion.div 
                animate={{
                  y: [0, -6, 0],
                  scale: hoveredImage === 'ag' ? 1.05 : hoveredImage === 'rohit' ? 0.88 : 1,
                  opacity: hoveredImage === 'rohit' ? 0.6 : 1,
                  zIndex: hoveredImage === 'ag' ? 30 : 10
                }} 
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                  opacity: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }} 
                onMouseEnter={() => setHoveredImage('ag')}
                onMouseLeave={() => setHoveredImage(null)}
                className="relative w-52 sm:w-64 md:w-72 cursor-pointer"
              >
                <motion.div 
                  className="aspect-[3/4] rounded-2xl overflow-hidden border-2 shadow-2xl"
                  animate={{
                    borderColor: hoveredImage === 'ag' ? 'hsl(var(--primary))' : 'hsl(var(--border) / 0.5)',
                    boxShadow: hoveredImage === 'ag' 
                      ? '0 25px 50px -12px hsl(var(--primary) / 0.4)' 
                      : '0 25px 50px -12px hsl(var(--primary) / 0.1)'
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img src={agPhoto} alt="AG - Co-Founder of calltoactions" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </motion.div>
                {/* AG's badge */}
                <motion.div initial={{
                  opacity: 0,
                  scale: 0.8
                }} animate={isInView ? {
                  opacity: 1,
                  scale: 1
                } : {}} transition={{
                  duration: 0.5,
                  delay: 0.6
                }} className="absolute -left-3 sm:-left-6 bottom-6 sm:bottom-10 z-20">
                  <motion.div 
                    animate={{
                      y: [0, -4, 0],
                      borderColor: hoveredImage === 'ag' ? 'hsl(var(--primary))' : 'hsl(var(--border))'
                    }} 
                    transition={{
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      borderColor: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                    }} 
                    className="bg-card/95 backdrop-blur-sm border rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl"
                  >
                    <p className="text-lg sm:text-2xl font-display font-bold text-primary">AG</p>
                    <p className="text-[9px] sm:text-xs text-muted-foreground">Co-Founder</p>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Rohit's Photo - smaller, overlapping */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { 
                  opacity: hoveredImage === 'ag' ? 0.6 : 1, 
                  scale: hoveredImage === 'rohit' ? 1.25 : hoveredImage === 'ag' ? 0.92 : 1,
                  zIndex: hoveredImage === 'rohit' ? 30 : 20
                } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4, 
                  delay: isInView ? 0 : 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onMouseEnter={() => setHoveredImage('rohit')}
                onMouseLeave={() => setHoveredImage(null)}
                className="relative -ml-14 sm:-ml-20 mt-16 sm:mt-24 w-40 sm:w-48 md:w-56 cursor-pointer"
              >
                <motion.div 
                  animate={{
                    y: [0, -8, 0]
                  }} 
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <motion.div 
                    className="aspect-[3/4] rounded-2xl overflow-hidden border-2 shadow-2xl"
                    animate={{
                      borderColor: hoveredImage === 'rohit' ? 'hsl(var(--primary))' : 'hsl(var(--background))',
                      boxShadow: hoveredImage === 'rohit' 
                        ? '0 25px 50px -12px hsl(var(--primary) / 0.4)' 
                        : '0 25px 50px -12px hsl(var(--primary) / 0.2)'
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <img 
                      src={rohitPhoto} 
                      alt="Rohit - Co-Founder of calltoactions" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </motion.div>
                  {/* Rohit's badge */}
                  <motion.div 
                    className="absolute -right-3 sm:-right-6 bottom-6 sm:bottom-10 bg-card/95 backdrop-blur-sm border rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl z-30"
                    animate={{
                      borderColor: hoveredImage === 'rohit' ? 'hsl(var(--primary))' : 'hsl(var(--border))'
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <p className="text-lg sm:text-2xl font-display font-bold text-primary">Rohit</p>
                    <p className="text-[9px] sm:text-xs text-muted-foreground">Co-Founder</p>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 right-8 w-28 sm:w-40 h-28 sm:h-40 border border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-xl -z-10" />
            </div>
          </motion.div>

          {/* Right side - content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
                About <span className="text-primary">&lt;us/&gt;</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                Hey, we're AG & Rohit. No 43-member team here—just us and a tight-knit crew of 
                talented developers who actually give a damn about your project.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                Based in Dubai, we've spent years building websites that don't just look good—they 
                <span className="text-primary font-medium"> convert</span>. Every pixel, every line of code, 
                every interaction is designed with one goal: turning your visitors into customers.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                No corporate BS. No endless meetings. Just straight talk and 
                <span className="text-primary font-medium"> results that speak for themselves</span>.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }} className="grid grid-cols-3 gap-3 sm:gap-6">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={isInView ? {
              opacity: 1,
              scale: 1
            } : {}} transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1
            }} className="text-center p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50">
                  <stat.icon size={20} className="sm:w-7 sm:h-7 mx-auto mb-2 sm:mb-3 text-primary" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>)}
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }} className="flex justify-center lg:justify-start">
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
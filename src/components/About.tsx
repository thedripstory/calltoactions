import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, Award, ArrowRight } from 'lucide-react';
import agPhoto from '@/assets/ag-photo.jpeg';
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
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - AG's photo */}
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
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Photo container */}
              <motion.div animate={{
              y: [0, -6, 0]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="relative z-10">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
                  <img src={agPhoto} alt="AG - Founder of calltoactions" className="w-full h-full object-cover" />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 border border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-primary/10 rounded-xl -z-10" />
              
              {/* Floating badge */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={isInView ? {
              opacity: 1,
              scale: 1
            } : {}} transition={{
              duration: 0.5,
              delay: 0.6
            }} className="absolute -right-4 sm:-right-8 bottom-8 sm:bottom-12 z-20">
                <motion.div animate={{
                y: [0, -4, 0]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }} className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-3 sm:p-4 shadow-xl">
                  <p className="text-xl sm:text-2xl font-display font-bold text-primary">AG</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Founder</p>
                </motion.div>
              </motion.div>
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
                About <span className="text-primary">&lt;me/&gt;</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                Hey, I'm AG. No 43-member team here—just me and a tight-knit crew of 
                talented developers who actually give a damn about your project.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">Based in Dubai, I've spent years building websites that don't just look good— they convert. Every pixel, every line of code, every interaction is designed with one goal: turning your visitors into customers.<span className="text-primary font-medium">convert</span>. Every pixel, every line of code, 
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
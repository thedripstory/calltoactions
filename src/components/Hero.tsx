import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                Building stuff,
                <br />
                that <span className="text-primary">&lt;converts/&gt;</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl"
            >
              Designing websites that convert visitors into customers today.
              No room for delays or half measures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Yes! I need web conversion
              </button>
              <button 
                onClick={() => scrollToSection('#portfolio')}
                className="btn-outline flex items-center justify-center gap-2 group"
              >
                View Our Works
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-64 md:w-72 h-[500px] md:h-[560px] bg-card rounded-[3rem] border border-border p-3 shadow-2xl shadow-primary/10">
                  <div className="w-full h-full bg-secondary rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone screen content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    <div className="p-6 pt-10 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Smartphone size={20} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium">Mobile Apps</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        We design and develop mobile-first experiences that engage users and drive conversions.
                      </p>
                      <button className="text-xs text-primary flex items-center gap-1">
                        Details <ArrowRight size={12} />
                      </button>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-20 left-6 right-6 space-y-3">
                      <div className="h-2 bg-border rounded-full w-3/4" />
                      <div className="h-2 bg-border rounded-full w-1/2" />
                      <div className="h-2 bg-border rounded-full w-2/3" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-8 md:-left-16 top-1/3 z-20"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-card border border-border rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Fast Loading</p>
                      <p className="text-xs text-muted-foreground">&lt;0.3s</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-4 md:-right-12 bottom-1/4 z-20"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-card border border-border rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Secure</p>
                      <p className="text-xs text-muted-foreground">SSL Ready</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Glow effect behind phone */}
              <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-75 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

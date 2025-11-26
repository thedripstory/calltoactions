import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, Shield, Code2 } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Swirl glow animation - top left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none">
        <svg viewBox="0 0 600 600" className="w-full h-full opacity-40">
          <defs>
            <radialGradient id="swirlGlow" cx="0%" cy="0%" r="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Concentric arcs */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx="0"
              cy="0"
              r={80 + i * 60}
              fill="none"
              stroke="url(#swirlGlow)"
              strokeWidth="1"
              strokeOpacity={0.3 - i * 0.03}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.12)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--primary)/0.06)_0%,_transparent_50%)]" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                <span className="block">Building stuff,</span>
                <span className="block">that <span className="text-primary">&lt;converts/&gt;</span></span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0"
            >
              Revamping websites for conversions like rent's due today.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              (No room for delays or half measures)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Tap to make website convert
              </button>
            </motion.div>
          </div>

          {/* Right Content - Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Browser mockup */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden shadow-2xl shadow-primary/10">
                  {/* Browser top bar */}
                  <div className="bg-secondary/80 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 mx-2 sm:mx-4">
                      <div className="bg-background/50 rounded-md px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1.5 sm:gap-2">
                        <Globe size={10} className="sm:w-3 sm:h-3" />
                        <span>yoursite.com</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Browser content */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 bg-gradient-to-br from-secondary/30 to-background">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center">
                        <Code2 size={16} className="sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">Custom Web Development</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                      Clean code. Fast performance. Pixel-perfect designs that captivate your audience.
                    </p>
                    <button className="text-[10px] sm:text-xs text-primary flex items-center gap-1 hover:gap-2 transition-all duration-300">
                      Explore <ArrowRight size={10} className="sm:w-3 sm:h-3" />
                    </button>
                    
                    {/* Decorative code lines */}
                    <div className="pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 bg-border rounded-full w-3/4" />
                      <div className="h-1.5 sm:h-2 bg-border rounded-full w-1/2" />
                      <div className="h-1.5 sm:h-2 bg-primary/30 rounded-full w-2/3" />
                      <div className="h-1.5 sm:h-2 bg-border rounded-full w-1/3" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-4 sm:-left-8 md:-left-16 top-1/4 z-20"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-card/95 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-2.5 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap size={16} className="sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium">Blazing Fast</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">&lt;0.5s load</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-2 sm:-right-4 md:-right-12 bottom-1/4 z-20"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-card/95 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-2.5 sm:p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield size={16} className="sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium">Secure</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">SSL + Best Practices</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Glow effect behind browser */}
              <div className="absolute inset-0 blur-3xl bg-primary/15 rounded-full scale-75 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.png';
import portfolio2 from '@/assets/portfolio-2.png';
import portfolio3 from '@/assets/portfolio-3.png';

const projects = [
  {
    title: 'Healthy Binge',
    category: 'Healthy Snacking',
    description:
      'A bright, ingredient‑first storefront for baked, maida‑free crisps that makes it simple to compare flavours, macros, and packs so snackers can choose quickly and check out without second‑guessing.',
    tags: ['Product Strategy', 'Mobile UX', 'Design System'],
    image: portfolio1,
    result: '41% increase in purchases',
  },
  {
    title: 'Outback',
    category: 'Leather accessories',
    description:
      'A crafted shopping flow for leather bags, wallets, and work gear that brings materials and detailing forward while keeping navigation, filtering, and checkout focused so professionals can upgrade essentials without friction.',
    tags: ['UX Flows', 'Conversion', 'Visual Merchandising'],
    image: portfolio2,
    result: '32% lift in add‑to‑cart rate',
  },
  {
    title: 'Herbaria',
    category: 'Botanical skincare',
    description:
      'A serene, ritual‑driven shop for botanical soaps, bath salts, and oils that highlights textures and routines while simplifying discovery, bundling, and reorder paths so self‑care feels intentional, not indulgent.',
    tags: ['Art Direction', 'UI Design', 'Content Strategy'],
    image: portfolio3,
    result: '3.2x increase in repeat buyers',
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-14 space-y-3"
        >
          {/* <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Portfolio
          </p> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Quietly confident <span className="text-primary">&lt;work/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Three recent collaborations that kept the experience clean, intentional, and responsive across every device.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark h-full flex flex-col gap-4 sm:gap-5"
            >
              <div className="overflow-hidden rounded-lg border border-border/60">
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-transparent" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm text-primary font-medium">{project.category}</span>
                <span className="text-[11px] sm:text-xs text-muted-foreground">{project.result}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 bg-secondary text-[10px] sm:text-xs rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

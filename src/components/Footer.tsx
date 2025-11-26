import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import logoWhite from '@/assets/logo-white.svg';
const footerLinks = [{
  name: 'About',
  href: '#about'
}, {
  name: 'Services',
  href: '#services'
}, {
  name: 'Portfolio',
  href: '#portfolio'
}, {
  name: 'Contact',
  href: '#contact'
}];
const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.img src={logoWhite} alt="calltoactions" className="h-6 sm:h-7 mb-4" whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }} />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Building websites that convert visitors into customers. No fluff, just results.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map(link => <motion.button key={link.name} whileHover={{
              x: 4
            }} transition={{
              duration: 0.2
            }} onClick={() => scrollToSection(link.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                  {link.name}
                </motion.button>)}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:hello@calltoactions.dev" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={14} />
                hello@calltoactions.dev
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Chennai & New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold mb-4">Ready to Start?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Let's discuss your project and build something great together.
            </p>
            <button onClick={() => scrollToSection('#contact')} className="btn-primary text-sm w-full sm:w-auto">
              Let's Talk
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} calltoactions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
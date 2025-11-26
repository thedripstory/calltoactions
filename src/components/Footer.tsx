import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contacts', href: '#contact' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="calltoactions" className="h-6" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Footer links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <motion.button
                key={link.name}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

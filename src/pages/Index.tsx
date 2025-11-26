import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Process />
      <SectionDivider />
      
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <CTA />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>;
};
export default Index;
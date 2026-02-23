import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessShowcase } from './components/ProcessShowcase';
import { Services } from './components/Services';
import { Brands } from './components/Brands';
import { CaseStudies } from './components/CaseStudies';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Stats } from './components/Stats';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Reviews } from './components/Reviews';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProcessShowcase />
      <Services />
      <Brands />
      <Reviews />
      <WhyChooseUs />
      <Stats />
      <Team />
      <CaseStudies />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

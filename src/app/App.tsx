import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessShowcase } from './components/ProcessShowcase';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Stats } from './components/Stats';
import { Team } from './components/Team';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProcessShowcase />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
import { useEffect, useState } from 'react';
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
import { ServiceJourneyPage, serviceJourneyPages } from './components/ServiceJourneyPage';

function HomePage() {
  return (
    <>
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
    </>
  );
}

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const activePage = serviceJourneyPages.find((page) => page.path === pathname);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {activePage ? <ServiceJourneyPage page={activePage} /> : <HomePage />}
      <Footer />
    </div>
  );
}

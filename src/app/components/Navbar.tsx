import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { serviceJourneyPages } from './ServiceJourneyPage';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Brands', href: '#brands' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', `/${href}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
      requestAnimationFrame(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src="https://i.ibb.co/Fqf6yJGn/logo.png" alt="Wellsure Solution" className="h-10 w-auto sm:h-12" />
          </motion.a>

          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="text-white hover:text-yellow-400 transition-colors duration-300 relative group whitespace-nowrap text-sm"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 py-2"
                >
                  {link.name}
                </a>
              ))}

              <div className="border-t border-white/10 pt-3">
                {serviceJourneyPages.map((page) => (
                  <a
                    key={page.path}
                    href={page.path}
                    onClick={(e) => handlePageNavigation(e, page.path)}
                    className="block py-2 text-gray-200 hover:text-yellow-400"
                  >
                    {page.navLabel}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

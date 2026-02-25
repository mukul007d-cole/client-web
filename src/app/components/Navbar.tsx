import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { serviceJourneyPages } from './ServiceJourneyPage';
import { companyPages } from './CompanyPage';

type DropdownLink = { name: string; href: string };
type NavLink = { name: string; href: string; dropdown?: DropdownLink[] };

const companyDropdownPages = companyPages.map((page) => ({
  name: page.title,
  href: page.path,
}));

const servicesDropdown = [
  { name: 'All Services', href: '/services' },
  ...serviceJourneyPages.map((page) => ({ name: page.navLabel, href: page.path })),
];

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Process', href: '#process' },
  { name: 'Services', href: '#services', dropdown: servicesDropdown },
  { name: 'Brands', href: '#brands', dropdown: [{ name: 'Portfolio', href: '/portfolio' }] },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Results', href: '#results' },
  { name: 'FAQ', href: '#faq', dropdown: [{ name: 'Blog', href: '/blog' }] },
  { name: 'Contact', href: '#contact', dropdown: companyDropdownPages.filter((page) => ['/about-us', '/careers'].includes(page.href)) },
];

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

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', `/${href}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
        requestAnimationFrame(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMobileMenuOpen(false);
      return;
    }

    window.history.pushState({}, '', href);
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
            onClick={(e) => handleNavigation(e, '#home')}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src="https://i.ibb.co/Fqf6yJGn/logo.png" alt="Wellsure Solution" className="h-10 w-auto sm:h-12" />
          </motion.a>

          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <div key={link.name} className="group relative">
                <motion.a
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="inline-flex items-center gap-1 text-white hover:text-yellow-400 transition-colors duration-300 relative whitespace-nowrap text-sm"
                >
                  {link.name}
                  {link.dropdown ? <ChevronDown className="h-4 w-4" /> : null}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </motion.a>

                {link.dropdown ? (
                  <div className="invisible absolute left-0 top-full mt-3 min-w-56 rounded-xl border border-white/10 bg-black/95 p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                    {link.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        onClick={(e) => handleNavigation(e, dropdownItem.href)}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-yellow-300"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
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
                <div key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavigation(e, link.href)} className="py-2 text-white transition-colors duration-300 hover:text-yellow-400">
                    {link.name}
                  </a>
                  {link.dropdown ? (
                    <div className="ml-4 mt-2 border-l border-white/15 pl-3">
                      {link.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={(e) => handleNavigation(e, dropdownItem.href)}
                          className="block py-1.5 text-sm text-gray-300 hover:text-yellow-400"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

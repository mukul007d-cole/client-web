import type { MouseEvent } from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { serviceJourneyPages } from './ServiceJourneyPage';

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    e.preventDefault();

    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', `/${href}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
        requestAnimationFrame(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://i.ibb.co/Fqf6yJGn/logo.png" alt="Wellsure Solution" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming businesses through innovative digital solutions, strategic planning, and measurable growth execution.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNavigation(e, link.href)} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-yellow-400">Service Pages</h3>
            <ul className="space-y-3">
              {serviceJourneyPages.map((page) => (
                <li key={page.path}>
                  <a href={page.path} onClick={(e) => handleNavigation(e, page.path)} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {page.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-400" />
                <span>Pancheel Nagar, Ajmer City</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-yellow-400" />
                <a href="tel:+919079879927" className="hover:text-yellow-400 transition-colors">
                  +91 90798 79927
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-yellow-400" />
                <a href="mailto:madhuri@wellsuresolutions.com" className="hover:text-yellow-400 transition-colors">
                  madhuri@wellsuresolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} Wellsure Solution. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

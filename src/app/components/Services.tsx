import { motion } from 'motion/react';
import { Code2, TrendingUp, ShoppingCart, Package, Store, Search, ArrowUpRight } from 'lucide-react';
import { serviceJourneyPages } from './ServiceJourneyPage';

const services = [
  {
    icon: Package,
    title: 'Amazon Account Management',
    description: 'Full-service account management including listing optimization, inventory control, and performance monitoring.',
  },
  {
    icon: Search,
    title: 'Product Research & Sourcing',
    description: 'Data-driven product research and reliable supplier connections to launch profitable products.',
  },
  {
    icon: TrendingUp,
    title: 'PPC & Advertising',
    description: 'Strategic Amazon PPC campaigns that reduce ACOS and maximize your return on ad spend.',
  },
  {
    icon: ShoppingCart,
    title: 'Listing Optimization',
    description: 'SEO-optimized listings with compelling copy, enhanced images, and A+ content that converts.',
  },
  {
    icon: Store,
    title: 'Multi-Channel Selling',
    description: 'Expand beyond Amazon to Walmart, eBay, and your own Shopify store for diversified revenue.',
  },
  {
    icon: Code2,
    title: 'Brand Store & Website',
    description: 'Professional Amazon Brand Store and custom e-commerce websites to build your brand presence.',
  },
];

const handlePageNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
  e.preventDefault();
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">E-commerce Seller Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Complete solutions to launch, manage, and scale your online selling business
          </p>
        </motion.div>

        <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceJourneyPages.map((page, index) => (
            <motion.a
              key={page.path}
              href={page.path}
              onClick={(e) => handlePageNavigation(e, page.path)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 transition-colors hover:bg-yellow-400/20"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">Explore</p>
              <p className="mt-2 text-lg text-white">{page.navLabel}</p>
              <div className="mt-4 flex items-center gap-2 text-yellow-300">
                <span className="text-sm">View process page</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/50 h-full flex flex-col">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-400/20">
                  <service.icon className="w-8 h-8 text-yellow-400" strokeWidth={2} />
                </div>

                <h3 className="text-2xl mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{service.description}</p>

                <div className="mt-6 flex items-center gap-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

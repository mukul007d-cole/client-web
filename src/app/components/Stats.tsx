import { motion } from 'motion/react';
import { Package, DollarSign, TrendingUp, Star } from 'lucide-react';

const stats = [
  {
    icon: Package,
    number: '500+',
    label: 'Products Launched',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: DollarSign,
    number: '$10M+',
    label: 'Revenue Generated',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    number: '250%',
    label: 'Average Growth',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Star,
    number: '4.9/5',
    label: 'Client Rating',
    color: 'from-orange-500 to-orange-600',
  },
];

export function Stats() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-yellow-400 to-yellow-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-black">
            Proven Results for Sellers
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Numbers that speak to our commitment and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <div className="bg-black/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-black/20 hover:bg-black/20 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-7 h-7 text-yellow-400`} />
                </div>

                {/* Number */}
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-5xl md:text-6xl mb-2 text-black"
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <p className="text-black/80 text-lg">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

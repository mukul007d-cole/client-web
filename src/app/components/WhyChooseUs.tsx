import { motion } from 'motion/react';
import { Sparkles, Eye, Users, Target, Handshake, Award } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Amazon Expertise',
    description: 'Years of experience managing successful Amazon seller accounts across multiple categories and marketplaces.',
  },
  {
    icon: Eye,
    title: 'Transparent Reporting',
    description: 'Real-time dashboards and regular reports showing your sales, profits, and key performance metrics.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    description: 'Your own account manager who understands your business and works to achieve your growth goals.',
  },
  {
    icon: Target,
    title: 'Data-Driven Strategy',
    description: 'Every decision backed by market data, analytics, and proven strategies that deliver results.',
  },
  {
    icon: Handshake,
    title: 'Performance Guarantee',
    description: 'We succeed when you succeed. Our pricing is aligned with your growth and profitability.',
  },
  {
    icon: Sparkles,
    title: 'End-to-End Support',
    description: 'From product research to customer service, we handle every aspect of your e-commerce operations.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Why Sellers Choose Us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Partner with e-commerce experts who are invested in your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/50 h-full">
                {/* Icon */}
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-yellow-400/20">
                  <reason.icon className="w-6 h-6 text-yellow-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-2 text-white">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

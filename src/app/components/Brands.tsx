import { motion } from 'motion/react';

const brands = [
  'NovaNest',
  'UrbanLeaf',
  'AquaVibe',
  'LumaGear',
  'Peakora',
  'KindCart',
  'VitalRoot',
  'Zenora',
];

export function Brands() {
  return (
    <section id="brands" className="py-20 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-400/80 mb-3">Trusted by growing brands</p>
          <h2 className="text-3xl md:text-5xl text-white mb-4">Brands We’ve Worked With</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We partner with fast-moving e-commerce teams to improve rankings, conversion, and repeat revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center"
            >
              <span className="text-lg text-gray-100">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

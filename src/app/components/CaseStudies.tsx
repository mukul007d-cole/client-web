import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const studies = [
  {
    brand: 'Homeware DTC Brand',
    challenge: 'High ad spend with low conversion from non-optimized listings.',
    result: '+138% monthly revenue in 90 days',
    metrics: ['+91% CTR', '-27% ACOS', '+44% conversion rate'],
  },
  {
    brand: 'Wellness Supplements',
    challenge: 'Stagnant organic ranking in a highly competitive category.',
    result: 'Top 5 ranking for 18 high-intent keywords',
    metrics: ['+212% organic sessions', '+58% repeat orders', '+3.7x ROAS'],
  },
  {
    brand: 'Private Label Electronics',
    challenge: 'New launch struggling to gain traction and reviews.',
    result: '$480K launch revenue in first 5 months',
    metrics: ['2.9M impressions', '1,200+ verified reviews', '+122% MoM growth'],
  },
];

export function CaseStudies() {
  return (
    <section id="results" className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">Real Results, Not Just Promises</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A few snapshots of the growth outcomes we helped our clients achieve through strategy, execution, and constant optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <motion.article
              key={study.brand}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/5 p-7 hover:border-yellow-400/50 transition-colors"
            >
              <p className="text-yellow-400 text-sm mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Case study
              </p>
              <h3 className="text-white text-2xl mb-3">{study.brand}</h3>
              <p className="text-gray-400 mb-4">{study.challenge}</p>
              <p className="text-yellow-300 text-lg mb-5">{study.result}</p>

              <ul className="space-y-2 mb-6">
                {study.metrics.map((item) => (
                  <li key={item} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="text-yellow-400 text-sm inline-flex items-center gap-2 group-hover:text-yellow-300 transition-colors">
                View full breakdown <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

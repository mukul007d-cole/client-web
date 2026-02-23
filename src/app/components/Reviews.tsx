import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote:
      'Wellsure took over our Amazon account operations and fixed listing quality in under 30 days. Sales increased 42% in one quarter.',
    name: 'Aditi Sharma',
    role: 'Founder, Home & Kitchen Brand',
  },
  {
    quote:
      'Their PPC and catalog team reduced wasted spend and improved TACoS. We now launch products with a reliable process.',
    name: 'Rahul Mehta',
    role: 'Director, Consumer Electronics Seller',
  },
  {
    quote:
      'Hands-on support for daily Seller Central issues has been a game changer. Fast communication and clear reporting every week.',
    name: 'Neha Patel',
    role: 'Marketplace Head, D2C Wellness Brand',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-black px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-yellow-400/80">Client reviews</p>
          <h2 className="text-3xl text-white sm:text-5xl">What Sellers Say About Us</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-400 sm:text-base">
            We are proud to be recognized as a <span className="text-yellow-300">#2 Amazon SPN network partner</span> with a strong history of seller outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {reviews.map((review, idx) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-200 sm:text-base">“{review.quote}”</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-white">{review.name}</p>
                <p className="text-xs text-gray-400 sm:text-sm">{review.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

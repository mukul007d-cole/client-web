import { motion } from 'motion/react';

const faqs = [
  {
    question: 'How quickly can we expect results?',
    answer:
      'Most clients start seeing measurable improvements in traffic and conversion within the first 30-45 days, while larger revenue shifts usually appear in 60-90 days.',
  },
  {
    question: 'Do you only work with Amazon sellers?',
    answer:
      'Amazon is our core expertise, but we also help brands align Shopify, Walmart, and other channels so messaging, pricing, and growth strategy stay consistent.',
  },
  {
    question: 'Can you handle both ads and listing optimization?',
    answer:
      'Yes. We manage the full funnel: keyword strategy, creative positioning, listing conversion, PPC structure, and ongoing performance analysis.',
  },
  {
    question: 'What does onboarding look like?',
    answer:
      'After a discovery call, we run a complete account audit, define growth milestones, then launch a 30/60/90-day action roadmap with weekly reporting.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need before getting started.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 open:border-yellow-400/50"
            >
              <summary className="text-white cursor-pointer list-none flex justify-between items-center gap-4">
                <span>{faq.question}</span>
                <span className="text-yellow-400 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

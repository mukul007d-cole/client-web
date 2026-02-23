import { motion, useScroll, useTransform } from 'motion/react';
import { Search, Rocket, Package, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Product Research & Selection',
    description: 'We analyze market trends, competitor data, and profit margins to identify winning products for your Amazon business.',
    details: ['Market Analysis', 'Competition Research', 'Profit Calculator', 'Supplier Sourcing'],
  },
  {
    number: '02',
    icon: Package,
    title: 'Listing Optimization & Launch',
    description: 'Create high-converting product listings with SEO-optimized titles, bullet points, and A+ content that drive sales.',
    details: ['SEO Keyword Research', 'Professional Copywriting', 'A+ Content Design', 'Image Enhancement'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'PPC & Advertising Strategy',
    description: 'Launch targeted advertising campaigns to boost visibility, drive traffic, and maximize your advertising ROI.',
    details: ['Campaign Setup', 'Keyword Bidding', 'Ad Optimization', 'Performance Tracking'],
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Growth & Scale',
    description: 'Continuously optimize your operations, expand to new marketplaces, and scale your business sustainably.',
    details: ['Inventory Management', 'Review Strategy', 'Multi-Channel Expansion', 'Brand Building'],
  },
];

export function ProcessShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"]
  });

  return (
    <section ref={containerRef} id="process" className="relative bg-black py-16 sm:py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-20"
        >
          <h2 className="mb-3 text-3xl text-white sm:mb-4 sm:text-4xl md:text-6xl">
            Our Proven Process
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 sm:text-lg">
            A systematic approach to launching and scaling your Amazon business
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-14 sm:space-y-20 lg:space-y-32">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 60%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.45], [index % 2 === 0 ? -80 : 80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-10 lg:gap-12`}
    >
      {/* Content */}
      <div className="flex-1">
        <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 shadow-lg sm:h-16 sm:w-16">
            <span className="text-lg text-black sm:text-2xl">{step.number}</span>
          </div>
          <h3 className="text-2xl text-white sm:text-3xl md:text-4xl">
            {step.title}
          </h3>
        </div>
        
        <p className="mb-5 text-base leading-relaxed text-gray-300 sm:mb-6 sm:text-lg">
          {step.description}
        </p>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {step.details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              <span className="text-sm">{detail}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className="flex-1 w-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative flex aspect-square items-center justify-center rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 p-8 backdrop-blur-sm sm:p-12"
        >
          <step.icon className="h-24 w-24 text-yellow-400 sm:h-32 sm:w-32" strokeWidth={1} />
          
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-20 h-20 border border-yellow-400/30 rounded-full" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-yellow-400/20 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

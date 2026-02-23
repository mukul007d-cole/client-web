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
    <section ref={containerRef} id="process" className="relative py-32 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-white">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A systematic approach to launching and scaling your Amazon business
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-32">
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
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
    >
      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl text-black">{step.number}</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-white">
            {step.title}
          </h3>
        </div>
        
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          {step.description}
        </p>

        <div className="grid grid-cols-2 gap-3">
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
          className="relative bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 backdrop-blur-sm rounded-2xl p-12 border border-yellow-400/20 aspect-square flex items-center justify-center"
        >
          <step.icon className="w-32 h-32 text-yellow-400" strokeWidth={1} />
          
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-20 h-20 border border-yellow-400/30 rounded-full" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-yellow-400/20 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

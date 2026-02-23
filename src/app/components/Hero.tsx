import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 py-24 pt-32"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-yellow-400/10 backdrop-blur-sm rounded-full border border-yellow-400/30"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-yellow-400">E-commerce Growth Specialists</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl mb-6 text-white leading-tight"
        >
          Scale Your E-commerce Business
          <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mt-2">
            On Amazon & Beyond
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          From product launch to marketplace optimization, we help e-commerce sellers dominate Amazon, 
          grow their online presence, and maximize profits with proven strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-yellow-400 text-black rounded-xl shadow-lg hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Start Growing Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white/10 text-white rounded-xl border-2 border-white/20 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
          >
            View Our Process
          </a>
        </motion.div>

        {/* Stats */}
        <div className="relative mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10"
          >
            <div className="text-3xl text-yellow-400 mb-1">500+</div>
            <div className="text-sm text-gray-400">Products Launched</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10"
          >
            <div className="text-3xl text-yellow-400 mb-1">$10M+</div>
            <div className="text-sm text-gray-400">Revenue Generated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10 col-span-2 md:col-span-1"
          >
            <div className="text-3xl text-yellow-400 mb-1">98%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
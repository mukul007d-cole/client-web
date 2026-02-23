import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Trophy, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 pb-16 pt-24 sm:px-6"
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute -right-28 -top-24 h-64 w-64 rounded-full bg-yellow-400 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="absolute -bottom-24 -left-28 h-64 w-64 rounded-full bg-yellow-400 blur-3xl"
        />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-2 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-yellow-400" />
          <span className="text-xs tracking-wide text-yellow-400 sm:text-sm">E-commerce Growth Specialists</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl leading-tight text-white sm:text-5xl md:text-7xl"
        >
          Start Selling Online
          <span className="mt-2 block bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            On Amazon & Beyond
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          Account management experts for Amazon sellers. We are recognized as a <span className="text-yellow-300">#2 Amazon SPN network partner</span> and help brands launch, optimize, and scale profitably.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/60 sm:w-auto"
          >
            Start Growing Today
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-white transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 sm:w-auto"
          >
            View Our Process
          </a>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { number: '500+', label: 'Products Launched', icon: ShieldCheck },
            { number: '$10M+', label: 'Managed Ad Spend', icon: Trophy },
            { number: '98%', label: 'Client Satisfaction', icon: Sparkles },
            { number: '#2', label: 'Amazon SPN Partner Rank', icon: Trophy },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 + i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <item.icon className="mx-auto mb-2 h-5 w-5 text-yellow-400" />
              <p className="text-2xl text-yellow-400">{item.number}</p>
              <p className="text-xs text-gray-400 sm:text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

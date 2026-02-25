import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Compass, Gauge, Layers, Rocket } from 'lucide-react';

export type ProcessStep = {
  title: string;
  detail: string;
  outcome: string;
};

export type ServiceJourney = {
  path: string;
  navLabel: string;
  title: string;
  subtitle: string;
  intro: string;
  steps: ProcessStep[];
  metrics: { label: string; value: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const serviceJourneyPages: ServiceJourney[] = [
  {
    path: '/website-development',
    navLabel: 'Website Development',
    title: 'Website Development',
    subtitle: 'From strategy to launch-ready digital experiences',
    intro: 'We build fast, conversion-focused websites that clearly communicate your offer and help visitors become buyers.',
    steps: [
      {
        title: 'Discovery & Direction',
        detail: 'We map business goals, customer intent, and message hierarchy to define a site structure that sells.',
        outcome: 'Clear sitemap, conversion goals, and project blueprint.',
      },
      {
        title: 'UX & Visual Design',
        detail: 'Our team designs wireframes and high-fidelity layouts that align with your brand and maintain a premium feel.',
        outcome: 'Responsive design system with polished UI components.',
      },
      {
        title: 'Build & Optimize',
        detail: 'We develop, test, and optimize page speed, SEO readiness, and user flow before handoff or deployment.',
        outcome: 'Production-ready website with measurable performance targets.',
      },
    ],
    metrics: [
      { label: 'Average load speed', value: '<2.5s' },
      { label: 'Design revisions cycle', value: '48 hrs' },
      { label: 'SEO-ready pages', value: '100%' },
    ],
    ctaTitle: 'Ready to launch your next website?',
    ctaText: 'Let us architect and build a high-converting website tailored to your growth goals.',
  },
  {
    path: '/digital-marketing',
    navLabel: 'Digital Marketing',
    title: 'Digital Marketing',
    subtitle: 'Campaign systems designed for sustainable demand',
    intro: 'Our digital marketing process blends paid media, SEO, and lifecycle communication into one growth engine.',
    steps: [
      {
        title: 'Audience & Channel Mapping',
        detail: 'We identify your highest-value segments and map the channels that can attract and convert them efficiently.',
        outcome: 'Channel plan backed by budget and KPI ranges.',
      },
      {
        title: 'Campaign Launch',
        detail: 'We deploy search, social, email, and retargeting campaigns with clear creative hooks and testing matrices.',
        outcome: 'Live multi-channel campaigns with tracking in place.',
      },
      {
        title: 'Measure & Scale',
        detail: 'Weekly optimizations improve CAC, CTR, and conversion rates while scaling winning audiences and creatives.',
        outcome: 'Documented growth loop with predictable performance.',
      },
    ],
    metrics: [
      { label: 'Typical CAC reduction', value: '18-32%' },
      { label: 'Reporting cadence', value: 'Weekly' },
      { label: 'Creative test velocity', value: '10+/month' },
    ],
    ctaTitle: 'Want a marketing engine that compounds?',
    ctaText: 'Partner with us to run strategic campaigns that grow revenue while protecting margin.',
  },
  {
    path: '/ecommerce-solutions',
    navLabel: 'E-commerce Solutions',
    title: 'E-commerce Solutions',
    subtitle: 'Operational and growth systems for modern online stores',
    intro: 'We help e-commerce brands improve store performance, fulfillment alignment, and conversion from first click to repeat purchase.',
    steps: [
      {
        title: 'Store & Funnel Audit',
        detail: 'We evaluate product pages, checkout flow, merchandising, and lifecycle emails to uncover conversion leaks.',
        outcome: 'Prioritized optimization roadmap by impact level.',
      },
      {
        title: 'Systems Implementation',
        detail: 'Our team updates storefront UX, automations, and analytics while aligning operations with demand forecasting.',
        outcome: 'Integrated store operations and customer journey stack.',
      },
      {
        title: 'Retention & Expansion',
        detail: 'We launch retention campaigns and expansion initiatives that improve repeat rate and average order value.',
        outcome: 'Higher LTV with stronger retention performance.',
      },
    ],
    metrics: [
      { label: 'Checkout completion lift', value: '+22%' },
      { label: 'Repeat purchase uplift', value: '+17%' },
      { label: 'Implementation phases', value: '3-step' },
    ],
    ctaTitle: 'Need a stronger e-commerce operation?',
    ctaText: 'We can streamline your store and scale growth without sacrificing customer experience.',
  },
  {
    path: '/marketplace-management',
    navLabel: 'Marketplace Management',
    title: 'Marketplace Management',
    subtitle: 'Hands-on management for Amazon and multi-channel marketplaces',
    intro: 'From catalog health to ads and inventory, we manage the moving parts that keep your marketplace business profitable.',
    steps: [
      {
        title: 'Account Foundation',
        detail: 'We clean up listings, compliance, and account structure to reduce suppression risk and improve discoverability.',
        outcome: 'Healthy account baseline with better listing quality.',
      },
      {
        title: 'Performance Operations',
        detail: 'Daily monitoring of ads, buy box ownership, stock levels, and issue resolution keeps growth steady.',
        outcome: 'Stable marketplace operations with fewer disruptions.',
      },
      {
        title: 'Profitability Optimization',
        detail: 'We optimize campaign spend, pricing logic, and product mix to improve margin while maintaining ranking.',
        outcome: 'Better ACOS, stronger contribution margin.',
      },
    ],
    metrics: [
      { label: 'Account health checks', value: 'Daily' },
      { label: 'Issue response time', value: '<24h' },
      { label: 'Ad efficiency gains', value: 'Up to 30%' },
    ],
    ctaTitle: 'Looking for reliable marketplace execution?',
    ctaText: 'Let our specialists manage your channels while you focus on product and brand vision.',
  },
  {
    path: '/brand-strategy',
    navLabel: 'Brand Strategy',
    title: 'Brand Strategy',
    subtitle: 'Clarity and positioning that differentiates your business',
    intro: 'We shape strategic brand foundations so your message is memorable, your offer is clear, and your marketing performs better.',
    steps: [
      {
        title: 'Market Insight Sprint',
        detail: 'We analyze audience behavior, competitors, and category whitespace to identify your best positioning angle.',
        outcome: 'Brand opportunity map with strategic direction.',
      },
      {
        title: 'Narrative & Identity System',
        detail: 'We define messaging pillars, value proposition, and identity cues that create consistency across touchpoints.',
        outcome: 'Unified voice and brand guidelines for execution.',
      },
      {
        title: 'Activation Roadmap',
        detail: 'We connect strategy to launch plans across website, content, campaigns, and marketplace assets.',
        outcome: 'Go-to-market roadmap aligned to business milestones.',
      },
    ],
    metrics: [
      { label: 'Positioning workshop', value: '1 week' },
      { label: 'Messaging framework', value: 'Core + channel' },
      { label: 'Rollout support', value: '90 days' },
    ],
    ctaTitle: 'Want a brand strategy that scales with you?',
    ctaText: 'Build a sharper, more trusted brand foundation with our strategic team.',
  },
];

const icons = [Compass, Layers, Gauge, Rocket];

export function ServiceJourneyPage({ page }: { page: ServiceJourney }) {
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-black px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-sm uppercase tracking-[0.2em] text-yellow-400">
            Growth Service Blueprint
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl text-white md:text-6xl"
          >
            {page.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 max-w-3xl text-xl text-gray-200">
            {page.subtitle}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 max-w-3xl text-gray-400">
            {page.intro}
          </motion.p>
        </div>
      </section>

      <section className="bg-gray-950 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {page.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <p className="text-3xl text-yellow-400">{metric.value}</p>
              <p className="mt-2 text-sm text-gray-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-20" id="process-journey">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl text-white md:text-5xl">Process Journey</h2>
          <p className="mt-3 max-w-2xl text-gray-400">
            Scroll through the exact sequence we use to move from planning to measurable outcomes.
          </p>

          <div className="mt-12 space-y-8">
            {page.steps.map((step, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
                >
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-yellow-300 to-yellow-500 opacity-70" />
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                      <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">Step {index + 1}</p>
                      <h3 className="mt-2 text-2xl text-white">{step.title}</h3>
                      <p className="mt-3 text-gray-300">{step.detail}</p>
                      <div className="mt-5 flex items-start gap-2 rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-400" />
                        <p className="text-sm text-yellow-100">{step.outcome}</p>
                      </div>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10">
                      <Icon className="h-6 w-6 text-yellow-300" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-6 pb-24 pt-16" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-5xl rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/15 via-yellow-300/10 to-yellow-500/15 p-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">Let&apos;s Build Together</p>
          <h3 className="mt-3 text-3xl text-white md:text-4xl">{page.ctaTitle}</h3>
          <p className="mx-auto mt-4 max-w-3xl text-gray-200">{page.ctaText}</p>
          <a
            href="mailto:hello@wellsuresolution.com"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
          >
            Book a Strategy Call
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}

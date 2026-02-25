import { motion } from 'motion/react';
import { ArrowRight, BriefcaseBusiness, FileText, Lightbulb, PenLine, Rocket, Users } from 'lucide-react';

export type CompanyPage = {
  path: string;
  title: string;
  subtitle: string;
  intro: string;
  highlights: { label: string; value: string }[];
  focusAreas: { title: string; description: string }[];
  cta: { title: string; text: string; primary: { label: string; href: string }; secondary: { label: string; href: string } };
};

export const companyPages: CompanyPage[] = [
  {
    path: '/about-us',
    title: 'About Us',
    subtitle: 'A growth-focused team helping ambitious brands scale with confidence.',
    intro:
      'Wellsure Solution combines strategy, design, and execution to help modern businesses unlock consistent digital growth. We work like an extension of your team, not just another vendor.',
    highlights: [
      { label: 'Brands supported', value: '120+' },
      { label: 'Average partnership', value: '14 months' },
      { label: 'Cross-functional specialists', value: '25+' },
    ],
    focusAreas: [
      {
        title: 'Strategic Partnership',
        description: 'Every project starts with business outcomes and prioritizes work that improves revenue, retention, and brand equity.',
      },
      {
        title: 'Transparent Operations',
        description: 'Weekly reporting, clear milestones, and collaborative planning make progress visible and predictable for your leadership team.',
      },
      {
        title: 'Performance Culture',
        description: 'We blend experimentation with disciplined execution so your growth engine keeps improving month after month.',
      },
    ],
    cta: {
      title: 'Want to meet the team behind the results?',
      text: 'Let\'s discuss your next growth milestone and map the right execution plan together.',
      primary: { label: 'Book a discovery call', href: '#contact' },
      secondary: { label: 'Explore our portfolio', href: '/portfolio' },
    },
  },
  {
    path: '/services',
    title: 'Services',
    subtitle: 'Integrated solutions across strategy, marketing, design, and operations.',
    intro:
      'Our services are built to support every stage of your growth journey—from brand positioning and website experiences to marketplace performance and demand generation.',
    highlights: [
      { label: 'Core service lines', value: '5' },
      { label: 'Avg. go-live timeline', value: '2-6 weeks' },
      { label: 'Data-backed decisions', value: '100%' },
    ],
    focusAreas: [
      {
        title: 'Growth Strategy & Positioning',
        description: 'Audience insights, competitive mapping, and clear messaging frameworks for sharper go-to-market execution.',
      },
      {
        title: 'Performance Marketing',
        description: 'Paid campaigns, lifecycle communication, and SEO systems optimized for efficient and measurable growth.',
      },
      {
        title: 'Digital Experience & Commerce',
        description: 'High-converting websites, e-commerce optimizations, and marketplace operations designed for profitability.',
      },
    ],
    cta: {
      title: 'Need a tailored growth plan?',
      text: 'Choose a service track or request a custom mix based on your current business stage.',
      primary: { label: 'View detailed service journeys', href: '/website-development' },
      secondary: { label: 'Talk to an expert', href: '#contact' },
    },
  },
  {
    path: '/portfolio',
    title: 'Portfolio',
    subtitle: 'Selected growth stories from brands we\'ve helped scale.',
    intro:
      'From e-commerce acceleration to marketplace turnaround projects, our portfolio reflects practical execution with measurable impact across industries.',
    highlights: [
      { label: 'Case studies delivered', value: '60+' },
      { label: 'Revenue growth range', value: '1.5x-4x' },
      { label: 'Industries served', value: '12' },
    ],
    focusAreas: [
      {
        title: 'Conversion-Led Website Projects',
        description: 'Rebuilt brand websites that improved speed, trust, and checkout conversion for DTC businesses.',
      },
      {
        title: 'Marketplace Performance Turnarounds',
        description: 'Restructured listings, ad accounts, and catalog strategy to improve ranking and contribution margins.',
      },
      {
        title: 'Omnichannel Growth Programs',
        description: 'Connected paid media, retention, and merchandising systems to deliver sustained growth across channels.',
      },
    ],
    cta: {
      title: 'Want a similar growth trajectory?',
      text: 'See what is possible when strategy and execution move in sync.',
      primary: { label: 'Start your project', href: '#contact' },
      secondary: { label: 'Read our blog insights', href: '/blog' },
    },
  },
  {
    path: '/blog',
    title: 'Blog',
    subtitle: 'Actionable insights on digital growth, branding, and e-commerce execution.',
    intro:
      'Our blog shares frameworks, practical checklists, and market observations from projects we run every week, so your team can make faster and better decisions.',
    highlights: [
      { label: 'New insights', value: 'Weekly' },
      { label: 'Topics covered', value: 'Marketing + Ops' },
      { label: 'Reader focus', value: 'Founders & teams' },
    ],
    focusAreas: [
      {
        title: 'Growth Playbooks',
        description: 'Step-by-step guides on campaign planning, conversion optimization, and customer retention systems.',
      },
      {
        title: 'Marketplace Intelligence',
        description: 'Tactical ideas to improve listing quality, ad efficiency, and stock planning across top marketplaces.',
      },
      {
        title: 'Brand & Content Strategy',
        description: 'Messaging frameworks and content planning methods to build authority and improve performance.',
      },
    ],
    cta: {
      title: 'Looking for a specific topic?',
      text: 'Tell us your challenge and we\'ll point you to the most relevant resources.',
      primary: { label: 'Contact our strategy desk', href: '#contact' },
      secondary: { label: 'Learn about our team', href: '/about-us' },
    },
  },
  {
    path: '/careers',
    title: 'Careers',
    subtitle: 'Join a team that values creativity, ownership, and measurable outcomes.',
    intro:
      'We are building a high-performance culture where curious thinkers and disciplined executors can do their best work for ambitious brands.',
    highlights: [
      { label: 'Open collaboration', value: 'Always-on' },
      { label: 'Learning budget', value: 'Role based' },
      { label: 'Impact ownership', value: 'Day 1' },
    ],
    focusAreas: [
      {
        title: 'Meaningful Client Impact',
        description: 'Work directly on growth problems that shape real business outcomes across website, marketing, and commerce.',
      },
      {
        title: 'Continuous Learning',
        description: 'Get mentorship, documentation, and exposure to cross-functional projects that expand your capabilities quickly.',
      },
      {
        title: 'Culture of Accountability',
        description: 'We value clarity, initiative, and craftsmanship. Great ideas are welcomed, tested, and implemented fast.',
      },
    ],
    cta: {
      title: 'Think you\'d be a great fit?',
      text: 'Share your profile and we\'ll connect when a matching role opens.',
      primary: { label: 'Send your application', href: 'mailto:madhuri@wellsuresolutions.com' },
      secondary: { label: 'See our services', href: '/services' },
    },
  },
];

const icons = [Users, Rocket, BriefcaseBusiness, PenLine, FileText, Lightbulb];

export function CompanyPageView({ page }: { page: CompanyPage }) {
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-black px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">Wellsure Solution</p>
          <h1 className="mt-4 text-4xl text-white md:text-6xl">{page.title}</h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-200">{page.subtitle}</p>
          <p className="mt-6 max-w-3xl text-gray-400">{page.intro}</p>
        </div>
      </section>

      <section className="bg-gray-950 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {page.highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-3xl text-yellow-400">{item.value}</p>
              <p className="mt-2 text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl text-white md:text-5xl">How this page supports your growth</h2>
          <p className="mt-3 max-w-2xl text-gray-400">Practical focus areas built for teams that value clarity, momentum, and measurable outcomes.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {page.focusAreas.map((focus, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.article
                  key={focus.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10">
                    <Icon className="h-5 w-5 text-yellow-300" />
                  </div>
                  <h3 className="text-2xl text-white">{focus.title}</h3>
                  <p className="mt-3 text-gray-300">{focus.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-6 pb-24 pt-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/15 via-yellow-300/10 to-yellow-500/15 p-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">Next Step</p>
          <h3 className="mt-3 text-3xl text-white md:text-4xl">{page.cta.title}</h3>
          <p className="mx-auto mt-4 max-w-3xl text-gray-200">{page.cta.text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={page.cta.primary.href}
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              {page.cta.primary.label}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href={page.cta.secondary.href} className="rounded-xl border border-white/20 px-6 py-3 text-white transition-colors hover:border-yellow-400 hover:text-yellow-300">
              {page.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

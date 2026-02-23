import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const brands = [
  'NovaNest',
  'UrbanLeaf',
  'AquaVibe',
  'LumaGear',
  'Peakora',
  'KindCart',
  'VitalRoot',
  'Zenora',
  'GrowthAxis',
];

export function Brands() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => api.scrollNext(), 2800);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <section id="brands" className="border-y border-white/5 bg-black px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-yellow-400/80">Trusted by growing brands</p>
          <h2 className="text-3xl text-white sm:text-5xl">Brands We’ve Worked With</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
            Slide through the brands we support with account management, listing optimization, ads, and growth operations.
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={brand} className="basis-[80%] sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur"
                >
                  <p className="text-xl text-white">{brand}</p>
                  <p className="mt-2 text-sm text-gray-400">Marketplace growth & Amazon account operations</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 top-auto bottom-[-3rem] border-white/20 bg-black text-white hover:bg-yellow-400 hover:text-black sm:-left-10 sm:top-1/2 sm:bottom-auto" />
          <CarouselNext className="-right-2 top-auto bottom-[-3rem] border-white/20 bg-black text-white hover:bg-yellow-400 hover:text-black sm:-right-10 sm:top-1/2 sm:bottom-auto" />
        </Carousel>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Michael Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1548600983-a171dced97f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxNzk3OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzcxODI3ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMG9mZmljZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTgyNzgwMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Emily Thompson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1660578008487-087c3024dfe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlciUyMHRlY2glMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE4Mjc4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experienced professionals dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/50">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social icons on hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-9 h-9 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-lg">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-lg">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
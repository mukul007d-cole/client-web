import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Madhuri Jain',
    role: 'Founder & CEO',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3wi-wOb84WuNNqD7KgS2mVrCbsiF8AxMMw&s',
  },
  {
    name: 'Atul Jain',
    role: 'Director',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQHdGDpzCkRPBw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1609872653987?e=2147483647&v=beta&t=m8Dg-LjHrcPvTuNejjPbUkbZMWOGuiDmps0LF8YY0Q8',
  },
  {
    name: 'Tanmay',
    role: 'Operations Lead',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcn-F7KUY9wl7SXhYLaJPdMIoeuPBO9rtTQ&s',
  },
  {
    name: 'Bharat Sharma',
    role: 'Sales Lead',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvu1mLtqg8OsL6y4DrCbgv0QepBUYjLprXQ&s',
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
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
              viewport={{ once: true, amount: 0.35 }}
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
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const testimonials = [
    {
      text: "Good emergency response and caring treatment. Very thankful for the immediate help we received during a difficult time.",
      author: "Local Patient",
      location: "Kaluvai"
    },
    {
      text: "Doctor explains clearly and gives proper guidance. The lab tests being available in the same place saved us a lot of travel time.",
      author: "Family Member",
      location: "Nearby Village"
    },
    {
      text: "Useful hospital for Kaluvai and nearby villages. The cabin rooms are clean and the staff is very attentive 24/7.",
      author: "Community Member",
      location: "Nellore District"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 will-change-transform"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            What Our <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Patients Say</span>
          </h2>
          
          {/* Desktop Description */}
          <p className="hidden md:block text-lg text-gray-600 leading-relaxed">
            Trusted by families in Kaluvai and surrounding villages for reliable and compassionate healthcare.
          </p>
          
          {/* Mobile Description (Max 2 lines) */}
          <p className="md:hidden text-base text-gray-600 leading-relaxed px-4">
            Trusted by Kaluvai families for reliable, compassionate healthcare.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8"
        >
          {testimonials.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div 
                variants={itemVariants}
                key={index} 
                className={`
                  ${isFeatured ? 'col-span-2 md:col-span-1 bg-gradient-to-br from-medical-blue to-medical-teal text-white shadow-lg' : 'col-span-1 bg-white border border-gray-100 shadow-sm'} 
                  ${index === 2 ? '!bg-blue-50 !border-none' : ''}
                  rounded-[2rem] md:rounded-2xl p-5 md:p-8 relative flex flex-col transition-shadow duration-300 hover:shadow-xl will-change-transform cursor-pointer
                `}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`h-3 w-3 md:h-5 md:w-5 fill-current ${isFeatured ? 'text-yellow-300' : 'text-yellow-400'}`} />
                  ))}
                </div>
                
                <p className={`italic mb-6 md:mb-8 flex-1 relative z-10 ${isFeatured ? 'text-white/95 text-[15px] md:text-base leading-relaxed' : 'text-gray-700 text-[12px] md:text-base leading-snug md:leading-relaxed'}`}>
                  "{item.text}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto relative z-10">
                  <div className={`
                    w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-base md:text-lg shrink-0
                    ${isFeatured ? 'bg-white/20 text-white' : 'hidden md:flex bg-gradient-to-br from-medical-blue to-medical-teal text-white shadow-md'}
                  `}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-bold text-[13px] md:text-base leading-tight ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
                      {item.author}
                    </h4>
                    <p className={`text-[11px] md:text-sm font-medium mt-0.5 ${isFeatured ? 'text-white/80' : 'text-medical-teal'}`}>
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

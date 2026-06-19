import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const features = [
    "10+ years experienced doctor",
    "24/7 emergency support",
    "Lab tests in one place",
    "Clean patient cabin rooms",
    "Essential medical equipment available",
    "Trusted by local families",
    "Quick treatment decisions",
    "Affordable, accessible care"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left will-change-transform"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Why Choose <br className="block md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Kaluvai Hospital?</span>
            </h2>
            {/* Desktop Description */}
            <p className="hidden md:block text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              We bring reliable, high-quality medical care directly to the Kaluvai community, ensuring that families do not have to travel far for emergencies or essential treatments.
            </p>
            
            {/* Mobile Description (Max 2 lines) */}
            <p className="md:hidden text-base text-gray-600 mb-6 leading-relaxed px-2">
              Reliable, high-quality medical care in Kaluvai. No need to travel far for emergencies.
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left mt-8 md:mt-10"
            >
              {features.map((feature, index) => (
                <motion.div 
                  variants={itemVariants}
                  key={index} 
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 hover:shadow-md hover:border-teal-100 transition-all duration-300 group will-change-transform cursor-pointer"
                >
                  <div className="bg-teal-50/50 p-2 rounded-lg shrink-0 group-hover:bg-teal-100 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-medical-teal" />
                  </div>
                  <span className="text-gray-800 font-bold text-sm md:text-base leading-tight">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative will-change-transform hidden lg:block"
          >
            {/* Collage/Design element */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Doctor with patient" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <div className="bg-medical-teal p-6 rounded-2xl shadow-lg text-white">
                  <h3 className="text-3xl font-bold mb-1">24/7</h3>
                  <p className="text-teal-50 font-medium">Always Open for Emergencies</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-3xl font-bold text-medical-blue mb-1">10+</h3>
                  <p className="text-gray-600 font-medium">Years of Medical Excellence</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Medical facility" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

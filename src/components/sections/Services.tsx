import { 
  Thermometer, 
  Clock, 
  HeartPulse, 
  Wind, 
  Activity, 
  ShieldAlert, 
  Stethoscope, 
  Bug, 
  Brain,
  Scissors
} from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Emergency Care",
      desc: "Immediate medical response and life-saving treatments round the clock."
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Toxic Fevers",
      desc: "Expert diagnosis and rapid treatment for severe and complex viral fevers."
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Heart, Kidney & Respiratory",
      desc: "Comprehensive care and management for critical organ diseases."
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Asthma Treatment",
      desc: "Effective breathing support, nebulization, and long-term asthma care."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Diabetes & Thyroid",
      desc: "Dedicated management and monitoring of sugar levels and thyroid disorders."
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: "Poisoning Cases",
      desc: "Swift emergency intervention and detoxification for accidental poisoning."
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "BP Management",
      desc: "Regular monitoring and medication adjustment for hypertension."
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "Scorpion Bite Care",
      desc: "Immediate pain relief and antidote administration for scorpion stings."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Joint & Knee Pain",
      desc: "Diagnosis and relief for arthritis, joint inflammation, and mobility issues."
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Gastrointestinal Care",
      desc: "Treatment for severe stomach infections, acidity, and digestive disorders."
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Minor Bite Injuries",
      desc: "Wound cleaning, dressings, and vaccination for dog or animal bites."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Neurological Care",
      desc: "Basic screening and initial management for nerve and brain-related symptoms."
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 will-change-transform"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Specialized <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Treatments</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed px-2">
            Providing comprehensive, accessible, and high-quality healthcare facilities to the Kaluvai community under one roof.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.96 }}
              className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-blue-100 transition-shadow duration-300 group flex flex-col will-change-transform cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-medical-blue mb-3 sm:mb-4 group-hover:bg-medical-blue group-hover:text-white transition-colors shrink-0">
                <div className="scale-75 sm:scale-100 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-snug sm:leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

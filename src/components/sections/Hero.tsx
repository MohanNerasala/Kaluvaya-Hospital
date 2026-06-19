import { PhoneCall, ArrowRight, ShieldCheck, Clock, Activity, BedSingle, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative bg-medical-light overflow-hidden pt-8 pb-28 lg:pt-20 lg:pb-32">
      {/* Background Decor - Removed heavy CSS blurs for maximum scroll performance */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50/20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-50/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start will-change-transform"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-medical-blue text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-blue"></span>
              </span>
              Accepting Patients 24/7
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Trusted Hospital Care in <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Kaluvai</span>
            </h1>
            
            {/* Desktop Description */}
            <p className="hidden sm:block text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              Kaluvai Hospital provides 24/7 emergency care, experienced doctor consultation, lab testing, cabin rooms, and essential medical facilities for families in Kaluvai and nearby villages.
            </p>
            
            {/* Mobile Description (Max 2 lines) */}
            <p className="sm:hidden text-base text-gray-600 mb-6 leading-relaxed">
              Trusted 24/7 emergency care, expert doctor consultation, and essential lab facilities in Kaluvai.
            </p>
            
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto px-2 md:px-0 will-change-transform"
            >
              <a 
                href="tel:+919999999999" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-medical-blue to-medical-teal md:bg-none md:bg-medical-blue hover:bg-blue-800 text-white px-8 py-3 md:py-3.5 rounded-2xl md:rounded-full font-bold md:font-medium text-base transition-all shadow-md shadow-teal-500/20 md:shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <PhoneCall className="h-5 w-5" />
                <span>Call for Emergency</span>
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-100 md:border-gray-200 px-8 py-3 md:py-3.5 rounded-2xl md:rounded-full font-bold md:font-medium text-base transition-all shadow-sm hover:shadow active:scale-[0.98]"
              >
                <span>View Services</span>
                <ArrowRight className="h-5 w-5 text-medical-blue" />
              </a>
            </motion.div>
            
            {/* Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 w-full max-w-md lg:max-w-none text-left will-change-transform"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-medical-blue" />
                </div>
                <span className="font-medium text-gray-800 text-xs sm:text-sm">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-red-500" />
                </div>
                <span className="font-medium text-gray-800 text-xs sm:text-sm">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-teal-50 p-2 rounded-lg">
                  <Activity className="h-5 w-5 text-medical-teal" />
                </div>
                <span className="font-medium text-gray-800 text-xs sm:text-sm">Lab Tests Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-lg">
                  <BedSingle className="h-5 w-5 text-medical-green" />
                </div>
                <span className="font-medium text-gray-800 text-xs sm:text-sm">Patient Cabin Rooms</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Image & Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-10 mt-10 lg:mt-0 hidden md:block will-change-transform"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hospital Care" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 will-change-transform"
            >
              <div className="bg-green-100 p-3 rounded-full">
                <HeartPulse className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Trusted Care</p>
                <p className="font-bold text-gray-900">Dr. Rajesh</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 will-change-transform"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Modern Facilities</p>
                <p className="font-bold text-gray-900">Quality Treatment</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

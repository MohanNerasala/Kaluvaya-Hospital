import { PhoneCall, ArrowRight, ShieldCheck, Clock, Activity, BedSingle, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative bg-medical-light overflow-hidden pt-4 pb-[110px] md:pt-20 md:pb-32 h-[calc(100dvh-80px)] md:h-auto md:min-h-0 flex flex-col justify-center">
      {/* Background Decor - Removed heavy CSS blurs for maximum scroll performance */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50/20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-50/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-[430px] lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start h-full md:h-auto justify-evenly md:justify-start will-change-transform"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-medical-blue text-[14px] md:text-sm font-semibold md:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-blue"></span>
              </span>
              Accepting Patients 24/7
            </div>
            
            {/* Desktop Heading */}
            <h1 className="hidden md:block text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Trusted Hospital Care in <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Kaluvai</span>
            </h1>
            
            {/* Mobile Heading */}
            <h1 className="md:hidden font-extrabold text-gray-900 leading-[1.15] md:mb-5 tracking-tight w-full" style={{ fontSize: 'clamp(34px, 9vw, 42px)' }}>
              Trusted Hospital <br />
              Care in <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Kaluvai</span>
            </h1>
            
            {/* Desktop Description */}
            <p className="hidden md:block text-lg text-gray-600 mb-8 leading-relaxed">
              Kaluvai Hospital provides 24/7 emergency care, experienced doctor consultation, lab testing, cabin rooms, and essential medical facilities for families in Kaluvai and nearby villages.
            </p>
            
            {/* Mobile Description */}
            <p className="md:hidden text-base text-gray-500 md:mb-8 leading-relaxed max-w-[340px]">
              Trusted 24/7 emergency care, expert<br/> doctor consultation, and essential lab<br/> facilities in Kaluvai.
            </p>
            
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row justify-center lg:justify-start gap-3 md:gap-4 md:mb-10 w-full md:w-auto will-change-transform"
            >
              <a 
                href="tel:+919999999999" 
                className="flex items-center justify-center gap-2 w-full md:w-auto bg-gradient-to-r from-medical-blue to-medical-teal md:bg-none md:bg-medical-blue hover:bg-blue-800 text-white h-[52px] md:h-auto md:px-8 md:py-3.5 rounded-[14px] md:rounded-full font-bold md:font-medium text-[16px] transition-all shadow-md active:scale-[0.98]"
              >
                <PhoneCall className="h-5 w-5" />
                <span>Call for Emergency</span>
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center gap-2 w-full md:w-auto bg-white hover:bg-gray-50 text-gray-800 border border-gray-100 md:border-gray-200 h-[52px] md:h-auto md:px-8 md:py-3.5 rounded-[14px] md:rounded-full font-bold md:font-medium text-[16px] transition-all shadow-sm active:scale-[0.98]"
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
              className="grid grid-cols-2 gap-3 md:gap-6 w-full max-w-[360px] md:max-w-none mx-auto lg:mx-0 will-change-transform"
            >
              <div className="flex items-center gap-3 bg-white/40 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none">
                <div className="bg-blue-50 p-2.5 rounded-lg shrink-0">
                  <ShieldCheck className="h-5 w-5 text-medical-blue" />
                </div>
                <span className="font-medium text-gray-800 text-[13px] md:text-sm leading-tight">10+ Years<br className="md:hidden" /> <span className="hidden md:inline">Experience</span><span className="md:hidden">Experience</span></span>
              </div>
              <div className="flex items-center gap-3 bg-white/40 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none">
                <div className="bg-red-50 p-2.5 rounded-lg shrink-0">
                  <Clock className="h-5 w-5 text-red-500" />
                </div>
                <span className="font-medium text-gray-800 text-[13px] md:text-sm leading-tight">24/7<br className="md:hidden" /> <span className="hidden md:inline">Emergency</span><span className="md:hidden">Emergency</span></span>
              </div>
              <div className="flex items-center gap-3 bg-white/40 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none">
                <div className="bg-teal-50 p-2.5 rounded-lg shrink-0">
                  <Activity className="h-5 w-5 text-medical-teal" />
                </div>
                <span className="font-medium text-gray-800 text-[13px] md:text-sm leading-tight">Lab Tests<br className="md:hidden" /> <span className="hidden md:inline">Available</span><span className="md:hidden">Available</span></span>
              </div>
              <div className="flex items-center gap-3 bg-white/40 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none">
                <div className="bg-green-50 p-2.5 rounded-lg shrink-0">
                  <BedSingle className="h-5 w-5 text-medical-green" />
                </div>
                <span className="font-medium text-gray-800 text-[13px] md:text-sm leading-tight">Patient Cabin<br className="md:hidden" /> <span className="hidden md:inline">Rooms</span><span className="md:hidden">Rooms</span></span>
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

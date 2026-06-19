import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="will-change-transform"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight text-center lg:text-left">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Touch</span>
            </h2>
            
            {/* Desktop Description */}
            <p className="hidden md:block text-lg text-gray-600 mb-10 leading-relaxed">
              Whether it's a routine check-up or a medical emergency, Kaluvai Hospital is here to support you 24/7. Reach out to us directly.
            </p>
            
            {/* Mobile Description (Max 2 lines) */}
            <p className="md:hidden text-base text-gray-600 mb-8 leading-relaxed text-center px-4">
              Routine check-ups or medical emergencies, we are here 24/7.
            </p>
            
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-6">
              
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl flex items-center justify-center text-medical-blue shrink-0 shadow-inner">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Hospital Location</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Kaluvai, Nellore District,<br/>Andhra Pradesh</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl flex items-center justify-center text-medical-teal shrink-0 shadow-inner">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Emergency Contact</h4>
                  <a href="tel:+919999999999" className="text-gray-800 hover:text-medical-blue transition-colors text-base md:text-lg font-bold block mb-0.5">
                    +91 99999 99999
                  </a>
                  <p className="text-xs md:text-sm text-medical-teal font-semibold">Available 24/7</p>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Working Hours</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Emergency: <span className="font-semibold text-gray-900">24/7</span><br/>Consultations: Morning & Evening</p>
                </div>
              </div>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <a 
                href="tel:+919999999999" 
                className="group flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-medical-blue to-medical-teal hover:from-blue-700 hover:to-teal-600 text-white p-4 md:p-5 rounded-[1.5rem] font-bold transition-all shadow-[0_8px_20px_rgb(0,0,0,0.12)] hover:-translate-y-1 active:scale-[0.98] text-center"
              >
                <Phone className="h-7 w-7 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base">Call Now</span>
              </a>
              <a 
                href="#" 
                className="group flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-100 p-4 md:p-5 rounded-[1.5rem] font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] text-center"
              >
                <MapPin className="h-7 w-7 mb-1 text-medical-teal group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base">Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 h-[400px] lg:h-auto min-h-[400px] relative overflow-hidden flex items-center justify-center will-change-transform"
          >
             {/* Actual Map Embed Placeholder */}
             <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-center p-8">
               <MapPin className="h-16 w-16 text-gray-300 mb-4" />
               <h3 className="text-xl font-bold text-gray-500 mb-2">Map Location</h3>
               <p className="text-gray-400 max-w-xs">Replace this area with an actual Google Maps embed iframe for Kaluvai, Nellore.</p>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

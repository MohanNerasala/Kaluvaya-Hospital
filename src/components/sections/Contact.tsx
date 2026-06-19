import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="w-20 h-1 bg-medical-teal rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Whether it's a routine check-up or a medical emergency, Kaluvai Hospital is here to support you 24/7. Reach out to us directly.
            </p>
            
            <div className="space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-full text-medical-blue shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Hospital Location</h4>
                  <p className="text-gray-600">Kaluvai, Nellore District,<br/>Andhra Pradesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-4 rounded-full text-medical-teal shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Emergency Contact</h4>
                  <a href="tel:+919999999999" className="text-gray-600 hover:text-medical-blue transition-colors text-lg font-medium">
                    +91 99999 99999
                  </a>
                  <p className="text-sm text-medical-teal font-medium mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-4 rounded-full text-medical-green shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Working Hours</h4>
                  <p className="text-gray-600">Emergency: 24/7<br/>Consultations: Morning & Evening</p>
                </div>
              </div>

            </div>

            <div className="mt-10 flex gap-4">
              <a 
                href="tel:+919999999999" 
                className="flex items-center gap-2 bg-medical-blue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
              >
                <MapPin className="h-5 w-5 text-medical-teal" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 h-[400px] lg:h-auto min-h-[400px] relative overflow-hidden flex items-center justify-center">
             {/* Actual Map Embed Placeholder */}
             <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-center p-8">
               <MapPin className="h-16 w-16 text-gray-300 mb-4" />
               <h3 className="text-xl font-bold text-gray-500 mb-2">Map Location</h3>
               <p className="text-gray-400 max-w-xs">Replace this area with an actual Google Maps embed iframe for Kaluvai, Nellore.</p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}

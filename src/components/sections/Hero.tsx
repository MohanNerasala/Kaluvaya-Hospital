import { PhoneCall, ArrowRight, ShieldCheck, Clock, Activity, BedSingle, HeartPulse } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative bg-medical-light overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-medical-blue/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-medical-teal/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-medical-blue text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-blue"></span>
              </span>
              Accepting Patients 24/7
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Trusted Hospital Care in <span className="text-medical-blue">Kaluvai</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kaluvai Hospital provides 24/7 emergency care, experienced doctor consultation, lab testing, cabin rooms, and essential medical facilities for families in Kaluvai and nearby villages.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="tel:+919999999999" 
                className="flex items-center justify-center gap-2 bg-medical-blue hover:bg-blue-800 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <PhoneCall className="h-5 w-5" />
                <span>Call for Emergency</span>
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm hover:shadow"
              >
                <span>View Services</span>
                <ArrowRight className="h-5 w-5 text-medical-blue" />
              </a>
            </div>
            
            {/* Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-medical-blue" />
                </div>
                <span className="font-medium text-gray-800 text-sm">17+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-red-500" />
                </div>
                <span className="font-medium text-gray-800 text-sm">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-teal-50 p-2 rounded-lg">
                  <Activity className="h-5 w-5 text-medical-teal" />
                </div>
                <span className="font-medium text-gray-800 text-sm">Lab Tests Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-lg">
                  <BedSingle className="h-5 w-5 text-medical-green" />
                </div>
                <span className="font-medium text-gray-800 text-sm">Patient Cabin Rooms</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image & Floating Cards */}
          <div className="relative lg:ml-10 mt-10 lg:mt-0 hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hospital Care" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-3 rounded-full">
                <HeartPulse className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Trusted Care</p>
                <p className="font-bold text-gray-900">Dr. Rajesh</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Modern Facilities</p>
                <p className="font-bold text-gray-900">Quality Treatment</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

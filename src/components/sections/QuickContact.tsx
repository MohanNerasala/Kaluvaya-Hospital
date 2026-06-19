import { Phone, MapPin, TestTube2, User } from 'lucide-react';

export function QuickContact() {
  return (
    <div className="bg-transparent md:bg-medical-blue text-gray-800 md:text-white relative z-20 -mt-10 md:mt-0 px-4 md:px-0">
      <div className="max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8">
        <div className="bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:shadow-none p-5 md:p-4 flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-4 border border-gray-100 md:border-none">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full lg:w-auto text-xs md:text-sm">
            <div className="flex items-center gap-2 min-w-0">
              <Phone className="h-4 w-4 text-medical-blue md:text-medical-teal shrink-0" />
              <span className="font-bold md:font-medium truncate md:whitespace-nowrap text-gray-900 md:text-white">
                Emergency: 24/7 <span className="hidden md:inline">Available</span>
              </span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <MapPin className="h-4 w-4 text-medical-blue md:text-medical-teal shrink-0" />
              <span className="font-bold md:font-medium truncate md:whitespace-nowrap text-gray-900 md:text-white">
                Kaluvai<span className="hidden md:inline">, Nellore Dist.</span>
              </span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <User className="h-4 w-4 text-medical-blue md:text-medical-teal shrink-0" />
              <span className="font-bold md:font-medium truncate md:whitespace-nowrap text-gray-900 md:text-white">Dr. Rajesh</span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <TestTube2 className="h-4 w-4 text-medical-blue md:text-medical-teal shrink-0" />
              <span className="font-bold md:font-medium truncate md:whitespace-nowrap text-gray-900 md:text-white">
                Basic Labs <span className="hidden md:inline">Available</span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full lg:w-auto mt-2 md:mt-0">
            <a 
              href="tel:+919999999999" 
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-medical-blue hover:bg-blue-800 md:bg-white/10 md:hover:bg-white/20 text-white px-6 py-3 rounded-xl md:rounded-full text-sm font-bold md:font-medium transition-all shadow-md hover:shadow-lg md:shadow-none md:border md:border-transparent"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <a 
              href="#contact" 
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-medical-teal hover:bg-teal-600 md:bg-medical-teal md:hover:bg-teal-400 text-white px-6 py-3 rounded-xl md:rounded-full text-sm font-bold md:font-medium transition-all shadow-md hover:shadow-lg md:shadow-none md:border md:border-transparent"
            >
              <MapPin className="h-4 w-4" />
              Map
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}


import { Phone, MapPin, User, TestTube2, Map, PhoneCall } from 'lucide-react';

export function QuickContact() {
  return (
    <div className="bg-medical-blue text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full lg:w-auto text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-medical-teal" />
              <span className="font-medium whitespace-nowrap">Emergency: 24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-medical-teal" />
              <span className="font-medium whitespace-nowrap">Kaluvai, Nellore Dist.</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-medical-teal" />
              <span className="font-medium whitespace-nowrap">Dr. Rajesh</span>
            </div>
            <div className="flex items-center gap-2">
              <TestTube2 className="h-4 w-4 text-medical-teal" />
              <span className="font-medium whitespace-nowrap">Basic Labs Available</span>
            </div>
          </div>
          
          <div className="flex gap-3 w-full lg:w-auto mt-2 lg:mt-0">
            <a 
              href="tel:+919999999999" 
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call</span>
            </a>
            <a 
              href="#contact" 
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-medical-teal hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm shadow-sm"
            >
              <Map className="h-4 w-4" />
              <span>Map</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

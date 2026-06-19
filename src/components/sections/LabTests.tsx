
import { Microscope, Droplet, Activity, FlaskConical } from 'lucide-react';

export function LabTests() {
  const testCategories = [
    { name: "Blood Tests (CBP)", icon: <Droplet className="h-5 w-5" /> },
    { name: "Urine Tests (CUE)", icon: <FlaskConical className="h-5 w-5" /> },
    { name: "Sugar Tests (FBS, PLBS)", icon: <Activity className="h-5 w-5" /> },
    { name: "Thyroid Tests (T3, T4, TSH)", icon: <Microscope className="h-5 w-5" /> },
    { name: "Liver Function Tests (LFT)", icon: <Activity className="h-5 w-5" /> },
    { name: "Kidney Function Tests (KFT)", icon: <Activity className="h-5 w-5" /> },
    { name: "Lipid Profile", icon: <Droplet className="h-5 w-5" /> },
    { name: "Fever Profile", icon: <Microscope className="h-5 w-5" /> },
    { name: "Dengue/Malaria/Typhoid", icon: <FlaskConical className="h-5 w-5" /> },
    { name: "ECG", icon: <Activity className="h-5 w-5" /> },
    { name: "BP Monitoring", icon: <Activity className="h-5 w-5" /> }
  ];

  return (
    <section id="lab" className="py-20 bg-medical-light relative overflow-hidden">
      
      {/* Decor - Removed CSS blur for smooth scrolling */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/30 rounded-full -mr-32 -mt-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Right: Content */}
          <div className="lg:col-span-5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Lab Tests & <br className="block md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Diagnostics</span>
            </h2>
            {/* Desktop Description */}
            <p className="hidden md:block text-lg text-gray-600 mb-8 leading-relaxed">
              Kaluvai Hospital provides convenient in-house lab testing and diagnostic support. Quick and reliable results ensure faster and more accurate treatment decisions for you and your family.
            </p>
            
            {/* Mobile Description (Max 2 lines) */}
            <p className="md:hidden text-base text-gray-600 mb-6 leading-relaxed px-2">
              Quick and reliable in-house lab testing for accurate, faster treatment decisions.
            </p>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
               <div className="bg-teal-50 p-3 rounded-full">
                 <Microscope className="h-8 w-8 text-medical-teal" />
               </div>
               <div>
                 <h4 className="font-bold text-gray-900 text-lg">Accurate Results</h4>
                 <p className="text-gray-500 text-sm">Tested with modern diagnostic equipment</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Available Tests</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {testCategories.map((test, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                    <div className="text-medical-blue bg-blue-50/50 p-2 rounded-lg">
                      {test.icon}
                    </div>
                    <span className="font-medium text-gray-700">{test.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

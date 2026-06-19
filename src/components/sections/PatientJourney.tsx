
import { PhoneCall, UserCheck, Microscope, HeartPulse } from 'lucide-react';

export function PatientJourney() {
  const steps = [
    {
      step: "01",
      icon: <PhoneCall className="h-6 w-6" />,
      title: "Call or Visit",
      desc: "Contact us for an emergency or walk-in for a consultation."
    },
    {
      step: "02",
      icon: <UserCheck className="h-6 w-6" />,
      title: "Doctor Consultation",
      desc: "Meet Dr. Rajesh for a thorough check-up and diagnosis."
    },
    {
      step: "03",
      icon: <Microscope className="h-6 w-6" />,
      title: "Lab Tests if Needed",
      desc: "Get necessary blood or diagnostic tests done in-house."
    },
    {
      step: "04",
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Treatment & Follow-up",
      desc: "Receive medicines, rest in our cabins if required, and recover."
    }
  ];

  return (
    <section className="py-20 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Your Healthcare <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Journey</span>
          </h2>
          
          {/* Desktop Description */}
          <p className="hidden md:block text-lg text-gray-600 leading-relaxed">
            A simple, streamlined process ensuring you get the care you need without unnecessary delays.
          </p>
          
          {/* Mobile Description (Max 2 lines) */}
          <p className="md:hidden text-base text-gray-600 leading-relaxed px-4">
            A simple, streamlined process for rapid, delay-free care.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 py-4 sm:py-0">
          
          {/* Mobile Vertical Timeline Line */}
          <div className="absolute left-[26px] top-8 bottom-8 w-1 bg-gradient-to-b from-medical-blue/30 to-medical-teal/30 rounded-full sm:hidden z-0"></div>

          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>

          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-row sm:block items-start gap-6 sm:gap-0 sm:bg-white sm:rounded-2xl sm:p-8 sm:border sm:border-gray-100 sm:shadow-sm text-left sm:text-center group hover:-translate-y-2 transition-transform duration-300">
              
              {/* Timeline Node / Icon */}
              <div className="relative z-10 shrink-0 flex flex-col items-center sm:block sm:w-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white sm:bg-blue-50 rounded-full flex items-center justify-center text-medical-blue mx-0 sm:mx-auto mb-2 sm:mb-6 mt-0 sm:mt-2 group-hover:bg-medical-blue group-hover:text-white transition-colors border-4 border-medical-light sm:border-none shadow-md sm:shadow-inner">
                  {item.icon}
                </div>
                <div className="sm:absolute sm:-top-4 sm:left-1/2 sm:-translate-x-1/2 bg-gradient-to-r from-medical-blue to-medical-teal sm:bg-white text-white sm:text-medical-teal font-extrabold text-xs sm:text-sm px-3 py-1 rounded-full border-none sm:border sm:border-gray-100 shadow-sm">
                  Step {item.step}
                </div>
              </div>

              {/* Content Box */}
              <div className="bg-white rounded-2xl p-5 sm:p-0 shadow-sm border border-gray-100 sm:border-none sm:shadow-none sm:bg-transparent mt-0 sm:mt-0 flex-1 relative">
                {/* Speech Bubble Triangle (Mobile Only) */}
                <div className="absolute top-5 -left-2 w-4 h-4 bg-white border-l border-b border-gray-100 rotate-45 sm:hidden"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

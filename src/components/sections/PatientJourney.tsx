
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Healthcare Journey</h2>
          <div className="w-24 h-1 bg-medical-teal mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            A simple, streamlined process ensuring you get the care you need without unnecessary delays.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>

          {steps.map((item, index) => (
            <div key={index} className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-medical-teal font-bold text-sm px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                Step {item.step}
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-medical-blue mx-auto mb-6 mt-2 group-hover:bg-medical-blue group-hover:text-white transition-colors shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

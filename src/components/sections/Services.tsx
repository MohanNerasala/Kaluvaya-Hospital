
import { 
  Stethoscope, 
  Activity, 
  TestTube2, 
  BedSingle, 
  Syringe, 
  HeartPulse, 
  Scissors, 
  Pill, 
  Wind, 
  Clock,
  UserPlus,
  ShieldCheck
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Emergency Care",
      desc: "Immediate medical response and treatment round the clock."
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Doctor Consultation",
      desc: "Expert medical advice from 17+ years experienced MBBS doctor."
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "General Medicine",
      desc: "Comprehensive care for fevers, infections, and chronic issues."
    },
    {
      icon: <TestTube2 className="h-6 w-6" />,
      title: "Lab Tests",
      desc: "Quick and accurate blood, urine, and profile diagnostic tests."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Diagnostic Support",
      desc: "Reliable testing for precise treatment decisions."
    },
    {
      icon: <BedSingle className="h-6 w-6" />,
      title: "Patient Cabin Rooms",
      desc: "Clean, comfortable private rooms for resting and observation."
    },
    {
      icon: <Syringe className="h-6 w-6" />,
      title: "IV Fluids & Injections",
      desc: "Safe administration of essential IV treatments and medicines."
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "ECG & Monitoring",
      desc: "Basic cardiac monitoring and blood pressure tracking."
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Minor Procedures",
      desc: "Wound care, dressings, and safe minor medical procedures."
    },
    {
      icon: <Pill className="h-6 w-6" />,
      title: "Pharmacy Support",
      desc: "Essential medicines and prescriptions available promptly."
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Oxygen Support",
      desc: "Emergency oxygen cylinders and breathing assistance."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Follow-up Care",
      desc: "Continued guidance for complete recovery and wellness."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <div className="w-24 h-1 bg-medical-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Providing comprehensive, accessible, and high-quality healthcare facilities to the Kaluvai community under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-medical-blue mb-4 group-hover:bg-medical-blue group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

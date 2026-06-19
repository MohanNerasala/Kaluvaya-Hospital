
import { CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    "17+ years experienced doctor",
    "24/7 emergency support",
    "Lab tests in one place",
    "Clean patient cabin rooms",
    "Essential medical equipment available",
    "Trusted by local families",
    "Quick treatment decisions",
    "Affordable, accessible care"
  ];

  return (
    <section className="py-20 bg-medical-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Kaluvai Hospital?</h2>
            <div className="w-20 h-1 bg-medical-teal rounded-full mb-8"></div>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              We bring reliable, high-quality medical care directly to the Kaluvai community, ensuring that families do not have to travel far for emergencies or essential treatments.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-medical-teal shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Collage/Design element */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Doctor with patient" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <div className="bg-medical-teal p-6 rounded-2xl shadow-lg text-white">
                  <h3 className="text-3xl font-bold mb-1">24/7</h3>
                  <p className="text-teal-50 font-medium">Always Open for Emergencies</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-3xl font-bold text-medical-blue mb-1">17+</h3>
                  <p className="text-gray-600 font-medium">Years of Medical Excellence</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Medical facility" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

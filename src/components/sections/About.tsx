import { Building2, HeartHandshake, Stethoscope } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="pt-16 pb-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            About <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Kaluvai Hospital</span>
          </h2>
          {/* Desktop Description */}
          <p className="hidden md:block text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Kaluvai Hospital is a trusted healthcare center in Kaluvai, Nellore District, led by Dr. Rajesh with 10+ years of medical experience. We provide 24/7 emergency care, expert diagnosis, lab tests, and compassionate medical support for all ages.
          </p>
          
          {/* Mobile Description (Max 2 lines) */}
          <p className="md:hidden text-base text-gray-600 leading-relaxed px-2">
            Trusted 24/7 healthcare in Kaluvai, led by Dr. Rajesh with 10+ years of medical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-5 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group flex md:block gap-4 md:gap-0 items-start">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center md:mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="h-6 w-6 md:h-7 md:w-7 text-medical-blue" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-3">Modern Facility</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Equipped with essential medical technology, clean patient cabins, and a dedicated pharmacy to ensure comprehensive care under one roof.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-5 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group flex md:block gap-4 md:gap-0 items-start">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center md:mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Stethoscope className="h-6 w-6 md:h-7 md:w-7 text-medical-blue" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-3">Experienced Doctor</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Led by Dr. Rajesh, an MBBS doctor with over 10 years of clinical experience providing accurate diagnoses and trusted medical advice.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-5 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group flex md:block gap-4 md:gap-0 items-start">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-50 rounded-xl flex items-center justify-center md:mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <HeartHandshake className="h-6 w-6 md:h-7 md:w-7 text-medical-teal" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-3">Patient-Centered Care</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We prioritize patient comfort and swift recovery through compassionate treatment, clear communication, and dedicated follow-up support.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

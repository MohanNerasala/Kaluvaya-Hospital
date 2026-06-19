import { Award, HeartPulse, Stethoscope } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Kaluvai Hospital</h2>
          <div className="w-24 h-1 bg-medical-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kaluvai Hospital is a trusted healthcare center in Kaluvai, Nellore District, led by Dr. Rajesh with 17+ years of medical experience. The hospital focuses on timely diagnosis, compassionate treatment, emergency support, lab testing, cabin rooms, and essential medical care for patients of all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical-blue transition-colors">
              <Award className="h-7 w-7 text-medical-blue group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Doctor</h3>
            <p className="text-gray-600 leading-relaxed">
              Led by Dr. Rajesh, an MBBS doctor with over 17 years of clinical experience providing accurate diagnoses and trusted medical advice.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical-teal transition-colors">
              <HeartPulse className="h-7 w-7 text-medical-teal group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered Care</h3>
            <p className="text-gray-600 leading-relaxed">
              We prioritize patient comfort and swift recovery through compassionate treatment, clear communication, and dedicated follow-up support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical-green transition-colors">
              <Stethoscope className="h-7 w-7 text-medical-green group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Facilities</h3>
            <p className="text-gray-600 leading-relaxed">
              Equipped with modern lab diagnostic tools, clean patient cabin rooms, ECG monitoring, and a 24/7 emergency response setup.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

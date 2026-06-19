import { UserCheck, Clock, CheckCircle2 } from 'lucide-react';

export function DoctorProfile() {
  const specialities = [
    "General medicine care",
    "Family health consultations",
    "Chronic condition support",
    "Fever & infections",
    "BP & diabetes management",
    "Gastric problems & pain relief",
    "Basic pediatric care",
    "Elderly health support"
  ];

  return (
    <section id="doctor" className="py-20 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            
            {/* Image Side */}
            <div className="lg:col-span-5 relative bg-medical-blue/5">
              <div className="h-full min-h-[400px] relative p-8 flex items-center justify-center">
                {/* Placeholder for Doctor Image */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-2xl overflow-hidden relative z-10 bg-gray-100 flex items-center justify-center">
                   <img 
                    src="https://images.unsplash.com/photo-1612349317150-e410f624c4a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Rajesh" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="lg:col-span-7 p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-medical-blue text-sm font-semibold mb-4">
                <UserCheck className="h-4 w-4" />
                Head Doctor
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dr. Rajesh</h2>
              <p className="text-xl text-medical-teal font-medium mb-6">MBBS • 17+ Years Experience</p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Dedicated to providing high-quality medical care to the Kaluvai community. With extensive experience in general medicine, Dr. Rajesh ensures accurate diagnosis and effective treatment plans for patients of all ages.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {specialities.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-medical-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Timing Card */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                    <Clock className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Consultation Timings</h4>
                    <p className="text-gray-600 text-sm">Morning & Evening (Call for details)</p>
                  </div>
                </div>
                <div className="shrink-0 w-full sm:w-auto">
                  <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-lg font-bold text-sm text-center w-full sm:w-auto">
                    Emergency 24/7
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

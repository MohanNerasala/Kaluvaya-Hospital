
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "Good emergency response and caring treatment. Very thankful for the immediate help we received during a difficult time.",
      author: "Local Patient",
      location: "Kaluvai"
    },
    {
      text: "Doctor explains clearly and gives proper guidance. The lab tests being available in the same place saved us a lot of travel time.",
      author: "Family Member",
      location: "Nearby Village"
    },
    {
      text: "Useful hospital for Kaluvai and nearby villages. The cabin rooms are clean and the staff is very attentive 24/7.",
      author: "Community Member",
      location: "Nellore District"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <div className="w-24 h-1 bg-medical-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trusted by families in Kaluvai and surrounding villages for reliable and compassionate healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gray-200" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center text-medical-blue font-bold text-lg">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.author}</h4>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

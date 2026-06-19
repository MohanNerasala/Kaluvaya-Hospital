

export function Facilities() {
  const facilities = [
    {
      title: "Clean Cabin Rooms",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Private, hygienic rooms for comfortable recovery."
    },
    {
      title: "Hospital Beds",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Adjustable medical beds ensuring patient safety."
    },
    {
      title: "Emergency Observation",
      image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Dedicated area for immediate care and monitoring."
    },
    {
      title: "Lab Sample Collection",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Safe and hygienic sample collection setup."
    },
    {
      title: "Medical Equipment",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Modern diagnostic and monitoring tools."
    },
    {
      title: "Oxygen Support",
      image: "https://images.unsplash.com/photo-1538108149393-ce901537050f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Readily available oxygen cylinders for emergencies."
    },
    {
      title: "Pharmacy Support",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Stocked with essential medicines."
    },
    {
      title: "Waiting Area",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Comfortable and clean waiting space for attenders."
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Hospital <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-teal">Facilities</span>
          </h2>
          
          {/* Desktop Description */}
          <p className="hidden md:block text-lg text-gray-600 leading-relaxed">
            Equipped with essential medical infrastructure to ensure patient comfort, safety, and effective treatment.
          </p>
          
          {/* Mobile Description (Max 2 lines) */}
          <p className="md:hidden text-base text-gray-600 leading-relaxed px-4">
            Essential medical infrastructure for your comfort, safety, and rapid recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-medical-blue/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

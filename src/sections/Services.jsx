import { useState, useEffect } from 'react';
import { Smile, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../constants';


const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);



  return (
    <section className="relative py-20 bg-gradient-to-br     playfair-font        overflow-hidden">


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center p-2  mb-6 shadow-lg         backdrop-blur-sm rounded-3xl     border-1 border-white/20       bg-white/10  ">
            <Smile className="w-8 h-8 text-white mr-2" />
            <span className=" text-white font-semibold">Premium Dental Care</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Perfect Smile
            <span className="block bg-gradient-to-r from-red-500 via-yellow-500 to-black bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience world-class dental care with our comprehensive range of services. 
            From routine cleanings to complete smile makeovers, we're here to help you achieve optimal oral health.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="flex items-center text-gray-200">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>Board Certified Dentists</span>
            </div>
            <div className="flex items-center text-gray-200">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>Latest Technology</span>
            </div>
            <div className="flex items-center text-gray-200">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>Insurance Accepted</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative h-full  backdrop-blur-sm rounded-3xl     border-1 border-white/20       bg-white/10 backdrop-blur-md      overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${service.bgColor} border border-white/50`}>
                  {/* Gradient Border Effect                                   opacity-0 group-hover:opacity-100                     */}
                  <div className={`absolute inset-0 rounded-3xl                                   duration-500 -z-10 `}></div>
                  
                  {/* Image Section */}
                  <div className="relative h-48 mb-6 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t  opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  <div className="px-8 pb-8     text-white">
                    {/* Content */}
                    <h3 className="text-2xl font-bold  mb-4 ">
                      {service.title}
                    </h3>
                    
                    <p className=" mb-6 leading-relaxed overflow-auto">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center ">
                          <CheckCircle className="w-4 h-4  mr-3 flex-shrink-0" />
                          <span className="text-sm   ">{feature}</span>
                        </li>
                      ))}
                    </ul>

                  
                    <a className="flex items-center justify-between"      href = "/reconstructions">              
                      <button className={`group/btn inline-flex  cursor-pointer items-center px-6 py-3 bg-gradient-to-r bg-black text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 rounded-3xl  opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Services;
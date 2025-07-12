import React, { useState, useEffect } from 'react';

const BeforeAfterGallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const beforeAfterCases = [
    {
      id: 1,
      category: 'veneers',
      title: 'Porcelain Veneers Transformation',
      description: 'Complete smile makeover with custom porcelain veneers for a natural, radiant appearance',
      beforeImage: '/images/AB/AB1.jpg',
      afterImage: '/images/AB/A1.jpg'
    },
    {
      id: 2,
      category: 'whitening',
      title: 'Professional Teeth Whitening',
      description: 'Advanced whitening treatment achieving 8 shades brighter in a single session',
      beforeImage: '/images/AB/AB2.jpg',
      afterImage: '/images/AB/A2.jpg'
    },
    {
      id: 3,
      category: 'orthodontics',
      title: 'Invisalign Clear Aligners',
      description: 'Discreet orthodontic treatment for perfectly aligned teeth without metal braces',
      beforeImage: '/images/AB/AB3.jpg',
      afterImage: '/images/AB/A3.jpg'
    },
    {
      id: 4,
      category: 'implants',
      title: 'Single Tooth Implant',
      description: 'Permanent tooth replacement with titanium implant and natural-looking crown',
      beforeImage: '/images/AB/AB4.jpg',
      afterImage: '/images/AB/A4.jpg',
    },
    {
      id: 5,
      category: 'veneers',
      title: 'Composite Veneers',
      description: 'Cost-effective smile enhancement with composite resin veneers',
      beforeImage: '/images/AB/AB5.jpg',
      afterImage: '/images/AB/A5.jpg',
      duration: '2 weeks',
      patient: 'Emma S.'
    },
    {
      id: 6,
      category: 'orthodontics',
      title: 'Traditional Metal Braces',
      description: 'Comprehensive orthodontic correction for complex alignment issues',
      beforeImage: '/images/AB/AB6.jpg',
      afterImage: '/images/AB/A6.jpg',
      duration: '24 months',
      patient: 'Alex T.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Treatments', icon: '✨' },
    { id: 'veneers', name: 'Veneers', icon: '🦷' },
    { id: 'whitening', name: 'Whitening', icon: '⚡' },
    { id: 'orthodontics', name: 'Orthodontics', icon: '🔧' },
    { id: 'implants', name: 'Implants', icon: '🌟' }
  ];

  const filteredCases = activeTab === 'all' 
    ? beforeAfterCases 
    : beforeAfterCases.filter(caseItem => caseItem.category === activeTab);

  const BeforeAfterCard = ({ caseData, index }) => {
    const [showAfter, setShowAfter] = useState(false);

    return (
      <div 
        className={`group cursor-pointer     ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0'
        }`}
        style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        onClick={() => setSelectedCase(caseData)}
      >
        <div className="  rounded-2xl shadow-lg hover:shadow-2xl    bg-black/60    transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={showAfter ? caseData.afterImage : caseData.beforeImage}
              alt={showAfter ? `After - ${caseData.title}` : `Before - ${caseData.title}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            


            {/* Hover Button */}
            <a    href = "/image-slider"    className="       absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button 
                className="cursor-pointer   bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg text-sm"
                onMouseEnter={() => setShowAfter(true)}
                onMouseLeave={() => setShowAfter(false)}
              >
                View Transformation
              </button>
            </a>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">
                {categories.find(cat => cat.id === caseData.category)?.icon}
              </span>
              <span className="text-xs font-medium text-white uppercase tracking-wider">
                {categories.find(cat => cat.id === caseData.category)?.name}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink transition-colors">
              {caseData.title}
            </h3>
            
            <p className="text-white mb-3 leading-relaxed text-sm">
              {caseData.description}
            </p>

          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="bg-gradient-to-br      playfair-font">
      {/* Header */}
      <div className="py-12 bg-gradient-to-r text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Before & After Gallery
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
              Witness the incredible smile transformations achieved through our advanced dental treatments
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="py-8  shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all shadow-md text-sm ${
                  activeTab === category.id
                    ? 'bg-pink text-white shadow-lg scale-105'
                    : 'border-2 border-white  text-white hover:bg-pink hover:scale-105'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-12 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">
              Real Results from Real Patients
            </h2>
            <p className="text-lg text-white max-w-xl mx-auto">
              Hover over each image to see the amazing transformation results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseData, index) => (
              <BeforeAfterCard key={caseData.id} caseData={caseData} index={index} />
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No cases found for this category.</p>
            </div>
          )}
        </div>
      </div>


      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>



    </div>
  );
};

export default BeforeAfterGallery;
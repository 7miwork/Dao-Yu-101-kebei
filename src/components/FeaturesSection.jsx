import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Structured Learning Paths",
      description: "Organized educational journeys with clear progression and milestones.",
      delay: "coming soon"
    },
    {
      title: "Teacher Control Panel",
      description: "Comprehensive tools for class management and student oversight.",
      delay: "coming soon"
    },
    {
      title: "Parent Progress View",
      description: "Real-time insights into children's academic development.",
      delay: "coming soon"
    },
    {
      title: "School Management System",
      description: "Administrative tools for institution-wide coordination.",
      delay: "coming soon"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              {/* Delay Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                {feature.delay}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

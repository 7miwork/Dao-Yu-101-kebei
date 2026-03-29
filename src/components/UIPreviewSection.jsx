import React from 'react';

const UIPreviewSection = () => {
  const previews = [
    {
      title: "Student Dashboard",
      description: "Track courses, assignments, and progress in one place",
      color: "blue"
    },
    {
      title: "Teacher Dashboard",
      description: "Manage classes, create content, and monitor student performance",
      color: "indigo"
    },
    {
      title: "Parent Overview",
      description: "Stay informed about your child's learning journey",
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-100",
        accent: "bg-blue-500",
        light: "bg-blue-200"
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        accent: "bg-indigo-500",
        light: "bg-indigo-200"
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-100",
        accent: "bg-teal-500",
        light: "bg-teal-200"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Designed for every role
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Purpose-built interfaces for students, teachers, and parents.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {previews.map((preview, index) => {
            const colorClasses = getColorClasses(preview.color);
            return (
              <div 
                key={index} 
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-6 transition-all duration-200 hover:shadow-md`}
              >
                {/* Mock Dashboard Preview */}
                <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
                  {/* Header Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 bg-red-300 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-300 rounded-full"></div>
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded"></div>
                  </div>
                  
                  {/* Content Blocks */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 ${colorClasses.accent} rounded-lg`}></div>
                      <div className="flex-1">
                        <div className="w-24 h-2 bg-gray-200 rounded mb-1"></div>
                        <div className="w-16 h-1.5 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className={`${colorClasses.light} rounded-lg p-3`}>
                        <div className="w-full h-2 bg-white/60 rounded mb-2"></div>
                        <div className="w-3/4 h-1.5 bg-white/40 rounded"></div>
                      </div>
                      <div className={`${colorClasses.light} rounded-lg p-3`}>
                        <div className="w-full h-2 bg-white/60 rounded mb-2"></div>
                        <div className="w-3/4 h-1.5 bg-white/40 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <div className="flex-1 h-2 bg-gray-100 rounded"></div>
                      <div className="w-8 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Preview Info */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {preview.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {preview.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Full dashboard interfaces coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default UIPreviewSection;
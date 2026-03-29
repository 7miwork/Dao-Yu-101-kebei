import React from 'react';

const ProblemSolutionSection = () => {
  const problems = [
    "Fragmented learning tools across multiple platforms",
    "No centralized system for tracking progress",
    "Poor visibility into student learning outcomes"
  ];

  const solutions = [
    "Unified platform for all educational needs",
    "Role-based dashboards for every stakeholder",
    "Structured learning paths with clear milestones"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why schools choose Dao-Yu-101
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We solve the core challenges facing modern educational institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems Column */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">The Challenge</h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Solution</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
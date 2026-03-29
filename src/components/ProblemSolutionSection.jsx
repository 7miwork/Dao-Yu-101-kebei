import React from 'react';

const ProblemSolutionSection = () => {
  const problems = [
    {
      title: "Fragmented Learning Systems",
      description: "Students and teachers juggle multiple platforms for different subjects and administrative tasks.",
      icon: "🔄"
    },
    {
      title: "Missing Progress Overview", 
      description: "Parents lack comprehensive insight into their children's educational journey and development.",
      icon: "📊"
    },
    {
      title: "No Central Platform",
      description: "Schools struggle with disconnected tools that don't communicate with each other effectively.",
      icon: "🔌"
    }
  ];

  const solutions = [
    {
      title: "Unified Learning Hub",
      description: "All educational activities, assignments, and communications in one integrated platform.",
      icon: "🎯"
    },
    {
      title: "Real-Time Progress Tracking",
      description: "Comprehensive dashboards for parents, teachers, and students to monitor learning outcomes.",
      icon: "📈"
    },
    {
      title: "Seamless Integration",
      description: "Connect all stakeholders with role-based access and collaborative tools.",
      icon: "🔗"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Challenge → The Solution
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Modern education faces complex challenges. Dao-Yu-101 provides elegant solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problems Column */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Current Challenges</h3>
              <p className="text-text-secondary">Issues facing modern education</p>
            </div>
            
            {problems.map((problem, index) => (
              <div key={index} className="card border-l-4 border-red-200 hover:border-red-300 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl flex-shrink-0">{problem.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-text-secondary">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Dao-Yu-101 Solutions</h3>
              <p className="text-text-secondary">How we solve these problems</p>
            </div>
            
            {solutions.map((solution, index) => (
              <div key={index} className="card border-l-4 border-green-200 hover:border-green-300 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl flex-shrink-0">{solution.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {solution.title}
                    </h4>
                    <p className="text-text-secondary">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Ready to Transform Your Educational Experience?
              </h3>
              <p className="text-text-secondary mb-6">
                Join schools that have already streamlined their educational operations with Dao-Yu-101.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">Start Free Trial</button>
                <button className="btn-secondary">Schedule Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main CTA */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Start building better learning environments
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
          Join schools and families already using Dao-Yu-101 to create structured, effective learning experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white font-medium py-4 px-10 rounded-lg hover:bg-blue-700 transition-all duration-200 text-base shadow-sm hover:shadow-md"
          >
            Enter Platform
          </Link>
        </div>

        {/* Trust Note */}
        <p className="mt-8 text-sm text-gray-500">
          Free to get started · No credit card required
        </p>
      </div>
    </section>
  );
};

export default CTASection;
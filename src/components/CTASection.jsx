import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Start using Dao-Yu-101 today
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white font-medium py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Enter Platform
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

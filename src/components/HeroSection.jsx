import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Dao-Yu-101 — A Modern Learning System for Schools, Teachers & Families
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          A unified platform for structured learning, progress tracking, and school collaboration.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Get Started
          </Link>
          <Link 
            to="/login" 
            className="bg-white text-gray-900 font-medium px-8 py-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-lg"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

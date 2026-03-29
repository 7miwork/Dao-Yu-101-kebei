import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-surface">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 animate-fade-in">
          Education platform for
          <span className="block text-gradient mt-2">
            schools, teachers, parents & students
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 animate-slide-up">
          A unified learning operating system that brings together all stakeholders in education 
          with seamless collaboration, progress tracking, and adaptive learning experiences.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Link to="/login" className="btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary text-lg px-8 py-4">
            Try Demo Login
          </Link>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-text-secondary">User Roles</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-text-secondary">Secure</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-text-secondary">Available</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">GDPR</div>
            <div className="text-text-secondary">Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

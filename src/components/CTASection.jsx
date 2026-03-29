import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Education?
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join thousands of educators and students who are already experiencing the future of learning with Dao-Yu-101.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to="/login" className="bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Free
          </Link>
          <Link to="/login" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-200">
            Try Demo Account
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">No Credit Card</div>
            <div className="text-sm">Required to start</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">14-Day Trial</div>
            <div className="text-sm">Full feature access</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">GDPR Compliant</div>
            <div className="text-sm">Privacy first</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">24/7 Support</div>
            <div className="text-sm">Always here to help</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/80 mb-4">
            Questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
            <a href="mailto:support@dao-yu-101.com" className="hover:text-white transition-colors flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>support@dao-yu-101.com</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+49-30-12345678" className="hover:text-white transition-colors flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>+49 30 12345678</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

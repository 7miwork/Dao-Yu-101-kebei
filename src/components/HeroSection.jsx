import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../i18n';

const HeroSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          {t("landing.heroTitle")}
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t("landing.heroSubtitle")}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-base shadow-sm hover:shadow-md"
          >
            {t("landing.cta")}
          </Link>
          <Link 
            to="/login" 
            className="bg-white text-gray-700 font-medium px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 text-base"
          >
            {t("landing.tryDemo")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
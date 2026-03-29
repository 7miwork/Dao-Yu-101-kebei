import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import UIPreviewSection from '../components/UIPreviewSection';
import CTASection from '../components/CTASection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <ProblemSolutionSection />
        <UIPreviewSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DY</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">Dao-Yu-101</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A Modern Learning System for Schools & Families
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="/login" className="hover:text-blue-600 transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><a href="mailto:support@dao-yu-101.com" className="hover:text-blue-600 transition-colors">Email Support</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Dao-Yu-101. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
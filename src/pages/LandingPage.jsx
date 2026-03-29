import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CTASection from '../components/CTASection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DY</span>
                </div>
                <span className="text-xl font-semibold text-text-primary">Dao-Yu-101</span>
              </div>
              <p className="text-text-secondary text-sm">
                Learning Operating System for modern education.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Product</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="/login" className="hover:text-primary transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="#trust" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Support</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="mailto:support@dao-yu-101.com" className="hover:text-primary transition-colors">Email Support</a></li>
                <li><a href="tel:+49-30-12345678" className="hover:text-primary transition-colors">Phone Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary text-sm">
            <p>&copy; 2024 Dao-Yu-101. All rights reserved. Built with ❤️ for education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { t } from '../i18n';

const HowItWorksSection = () => {
  const steps = t("howItWorks.steps");

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold rounded-full mb-6 mx-auto">
                {index + 1}
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent" 
                     style={{ width: 'calc(100% - 4rem)', left: 'calc(50% + 2rem)' }}></div>
              )}
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-2 text-sm text-text-secondary">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Demo */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {t("howItWorks.readyTitle")}
              </h3>
              <p className="text-text-secondary mb-6">
                {t("howItWorks.readyDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">{t("howItWorks.getStarted")}</button>
                <button className="btn-secondary">{t("howItWorks.watchDemo")}</button>
              </div>
            </div>
            
            {/* Demo Preview */}
            <div className="bg-surface rounded-xl p-6 shadow-soft">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{t("howItWorks.demoPreview.student.title")}</div>
                    <div className="text-sm text-text-secondary">{t("howItWorks.demoPreview.student.description")}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{t("howItWorks.demoPreview.teacher.title")}</div>
                    <div className="text-sm text-text-secondary">{t("howItWorks.demoPreview.teacher.description")}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{t("howItWorks.demoPreview.parent.title")}</div>
                    <div className="text-sm text-text-secondary">{t("howItWorks.demoPreview.parent.description")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

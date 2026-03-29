import React from 'react';

const TrustSection = () => {
  return (
    <section id="trust" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Built for Modern Education Institutions
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Trusted by educational institutions that value security, privacy, and educational excellence.
          </p>
        </div>
        
        {/* School/Institution Logos Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[
            { name: 'Berlin Gymnasium', type: 'High School' },
            { name: 'München Realschule', type: 'Middle School' },
            { name: 'Hamburg Grundschule', type: 'Elementary' },
            { name: 'Köln Integrierte Gesamtschule', type: 'Comprehensive' },
            { name: 'Frankfurt Berufsschule', type: 'Vocational' },
            { name: 'Stuttgart Förderschule', type: 'Special Education' }
          ].map((institution, index) => (
            <div 
              key={index}
              className="card p-6 text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div className="font-medium text-text-primary text-sm">{institution.name}</div>
              <div className="text-text-secondary text-xs">{institution.type}</div>
            </div>
          ))}
        </div>
        
        {/* Trust Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary">GDPR Compliant</h3>
            <p className="text-text-secondary">
              Full compliance with European data protection regulations ensuring student privacy.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary">Enterprise Security</h3>
            <p className="text-text-secondary">
              Bank-level encryption and security measures to protect sensitive educational data.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary">Role-Based Access</h3>
            <p className="text-text-secondary">
              Granular permission system ensuring appropriate access for all user types.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

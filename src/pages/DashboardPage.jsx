import React from 'react';
import { useAuth } from '../auth/useAuth';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  const getRoleSpecificContent = () => {
    switch (user?.role) {
      case 'student':
        return {
          title: 'Student Dashboard',
          subtitle: `Welcome back, ${user?.name}!`,
          description: `Class: ${user?.className}`,
          features: [
            'View your assignments',
            'Track your progress',
            'Access learning materials',
            'Communicate with teachers'
          ]
        };
      case 'teacher':
        return {
          title: 'Teacher Dashboard',
          subtitle: `Welcome back, ${user?.name}!`,
          description: `Department: ${user?.department}`,
          features: [
            'Manage your classes',
            'Create assignments',
            'Grade student work',
            'Track student progress'
          ]
        };
      case 'parent':
        return {
          title: 'Parent Dashboard',
          subtitle: `Welcome back, ${user?.name}!`,
          description: `Children: ${user?.children?.join(', ')}`,
          features: [
            'Monitor child progress',
            'View reports',
            'Communicate with teachers',
            'Access school updates'
          ]
        };
      case 'school':
        return {
          title: 'School Administration',
          subtitle: `Welcome back, ${user?.name}!`,
          description: `Institution Type: ${user?.institutionType}`,
          features: [
            'Manage institution',
            'Oversee all classes',
            'Generate reports',
            'Manage staff and students'
          ]
        };
      case 'admin':
        return {
          title: 'System Administration',
          subtitle: `Welcome back, ${user?.name}!`,
          description: 'Full system access',
          features: [
            'System configuration',
            'User management',
            'Analytics and reporting',
            'Platform maintenance'
          ]
        };
      default:
        return {
          title: 'Dashboard',
          subtitle: 'Welcome!',
          description: '',
          features: []
        };
    }
  };

  const content = getRoleSpecificContent();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-text-primary">{content.title}</h1>
              <p className="text-text-secondary">{content.subtitle}</p>
              {content.description && (
                <p className="text-sm text-text-secondary mt-1">{content.description}</p>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-text-secondary">
                Role: <span className="font-medium text-text-primary capitalize">{user?.role}</span>
              </span>
              <button
                onClick={logout}
                className="btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="card md:col-span-2 lg:col-span-3">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  Welcome to your dashboard
                </h2>
                <p className="text-text-secondary">
                  This is your personalized {user?.role} dashboard. More features coming soon!
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          {content.features.map((feature, index) => (
            <div key={index} className="card hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-text-primary font-medium">{feature}</span>
              </div>
            </div>
          ))}

          {/* Stats Card */}
          <div className="card md:col-span-2 lg:col-span-3 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-text-secondary">Active Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">8</div>
                <div className="text-sm text-text-secondary">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-text-secondary">Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">4.8</div>
                <div className="text-sm text-text-secondary">Rating</div>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="card md:col-span-2 lg:col-span-3 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              More Features Coming Soon
            </h3>
            <p className="text-text-secondary mb-4">
              We're working hard to bring you advanced dashboard features, analytics, and collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Stay Updated</button>
              <button className="btn-secondary">Send Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-surface shadow-soft border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DY</span>
            </div>
            <span className="text-xl font-semibold text-text-primary">Dao-Yu-101</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </Link>
            <Link to="#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">
              How It Works
            </Link>
            <Link to="#trust" className="text-text-secondary hover:text-text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-text-secondary">
                  Welcome, {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn-secondary"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn-secondary">
                  Login
                </Link>
                <Link to="/login" className="btn-primary">
                  Try Demo
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-secondary hover:text-text-primary p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link 
              to="#features" 
              className="block text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="#how-it-works" 
              className="block text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="#trust" 
              className="block text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {isAuthenticated ? (
              <div className="space-y-4 pt-4 border-t border-border">
                <span className="block text-text-secondary">
                  Welcome, {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="w-full btn-secondary"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-4 border-t border-border">
                <Link 
                  to="/login" 
                  className="block btn-secondary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/login" 
                  className="block btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try Demo
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

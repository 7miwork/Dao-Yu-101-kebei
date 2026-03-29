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

  const getDashboardLink = () => {
    if (!user) return null;
    return `/#/dashboard/${user.role}`;
  };

  const getRoleLabel = (role) => {
    const labels = {
      student: 'Student Dashboard',
      teacher: 'Teacher Panel',
      parent: 'Parent Portal',
      school: 'School Admin',
      admin: 'System Admin'
    };
    return labels[role] || 'Dashboard';
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DY</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Dao-Yu-101</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated && user ? (
              <>
                <a 
                  href={getDashboardLink()} 
                  className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                >
                  {getRoleLabel(user.role)}
                </a>
                {user.role === 'student' && (
                  <>
                    <a href="/#/dashboard/student" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      My Classes
                    </a>
                    <a href="/#/dashboard/student" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Assignments
                    </a>
                  </>
                )}
                {user.role === 'teacher' && (
                  <>
                    <a href="/#/dashboard/teacher" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      My Classes
                    </a>
                    <a href="/#/dashboard/teacher" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Gradebook
                    </a>
                  </>
                )}
                {user.role === 'parent' && (
                  <>
                    <a href="/#/dashboard/parent" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Children
                    </a>
                    <a href="/#/dashboard/parent" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Reports
                    </a>
                  </>
                )}
                {user.role === 'school' && (
                  <>
                    <a href="/#/dashboard/school" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Teachers
                    </a>
                    <a href="/#/dashboard/school" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Students
                    </a>
                  </>
                )}
                {user.role === 'admin' && (
                  <>
                    <a href="/#/dashboard/admin" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Users
                    </a>
                    <a href="/#/dashboard/admin" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Settings
                    </a>
                  </>
                )}
              </>
            ) : (
              <>
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Features
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  About
                </a>
              </>
            )}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">
                  {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/login" 
                  className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Demo
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            {isAuthenticated && user ? (
              <>
                <a 
                  href={getDashboardLink()} 
                  className="block text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {getRoleLabel(user.role)}
                </a>
                {user.role === 'student' && (
                  <>
                    <a 
                      href="/#/dashboard/student" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      My Classes
                    </a>
                    <a 
                      href="/#/dashboard/student" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Assignments
                    </a>
                  </>
                )}
                {user.role === 'teacher' && (
                  <>
                    <a 
                      href="/#/dashboard/teacher" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      My Classes
                    </a>
                    <a 
                      href="/#/dashboard/teacher" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Gradebook
                    </a>
                  </>
                )}
                {user.role === 'parent' && (
                  <>
                    <a 
                      href="/#/dashboard/parent" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Children
                    </a>
                    <a 
                      href="/#/dashboard/parent" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Reports
                    </a>
                  </>
                )}
                {user.role === 'school' && (
                  <>
                    <a 
                      href="/#/dashboard/school" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Teachers
                    </a>
                    <a 
                      href="/#/dashboard/school" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Students
                    </a>
                  </>
                )}
                {user.role === 'admin' && (
                  <>
                    <a 
                      href="/#/dashboard/admin" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Users
                    </a>
                    <a 
                      href="/#/dashboard/admin" 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Settings
                    </a>
                  </>
                )}
                <div className="pt-4 border-t border-gray-100">
                  <span className="block text-gray-600 text-sm mb-2">
                    {user?.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="block text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <a 
                  href="#features" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <Link 
                    to="/login" 
                    className="block text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/login" 
                    className="block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Try Demo
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
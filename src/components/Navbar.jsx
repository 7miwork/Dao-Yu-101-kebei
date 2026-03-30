import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { BASE_URL, getDashboardUrl, getLoginUrl } from '../config/base';
import { t, setLanguage, getLanguage } from '../i18n';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = BASE_URL;
  };

  const getDashboardLink = () => {
    if (!user) return null;
    return getDashboardUrl(user.role);
  };

  const getRoleLabel = (role) => {
    const labels = {
      student: t("roles.student"),
      teacher: t("roles.teacher"),
      parent: t("roles.parent"),
      school: t("roles.school"),
      admin: t("roles.admin")
    };
    return labels[role] || t("header.dashboard");
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={BASE_URL} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DY</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Dao-Yu-101</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#/shop" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              {t("navbar.shop") || "Shop"}
            </a>
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
                    <a href={getDashboardUrl('student')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.myClasses")}
                    </a>
                    <a href={getDashboardUrl('student')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.assignments")}
                    </a>
                  </>
                )}
                {user.role === 'teacher' && (
                  <>
                    <a href={getDashboardUrl('teacher')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.myClasses")}
                    </a>
                    <a href={getDashboardUrl('teacher')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.gradebook")}
                    </a>
                  </>
                )}
                {user.role === 'parent' && (
                  <>
                    <a href={getDashboardUrl('parent')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.children")}
                    </a>
                    <a href={getDashboardUrl('parent')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.reports")}
                    </a>
                  </>
                )}
                {user.role === 'school' && (
                  <>
                    <a href={getDashboardUrl('school')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.teachers")}
                    </a>
                    <a href={getDashboardUrl('school')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.students")}
                    </a>
                  </>
                )}
                {user.role === 'admin' && (
                  <>
                    <a href={getDashboardUrl('admin')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.users")}
                    </a>
                    <a href={getDashboardUrl('admin')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {t("navbar.settings")}
                    </a>
                  </>
                )}
              </>
            ) : (
              <>
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t("navbar.features")}
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t("navbar.about")}
                </a>
              </>
            )}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center">
            <select 
              value={getLanguage()} 
              onChange={(e) => setLanguage(e.target.value)}
              className="text-sm text-gray-600 bg-transparent border-none cursor-pointer focus:outline-none"
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="zh-TW">中文</option>
            </select>
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
                  {t("navbar.logout")}
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to={getLoginUrl()} 
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  {t("navbar.login")}
                </Link>
                <Link 
                  to={getLoginUrl()} 
                  className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t("navbar.tryDemo")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Language Switcher */}
          <div className="md:hidden flex items-center mr-2">
            <select 
              value={getLanguage()} 
              onChange={(e) => setLanguage(e.target.value)}
              className="text-sm text-gray-600 bg-transparent border-none cursor-pointer focus:outline-none"
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="zh-TW">中文</option>
            </select>
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
              <a 
                href="#/shop" 
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("navbar.shop") || "Shop"}
              </a>
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
                      href={getDashboardUrl('student')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.myClasses")}
                    </a>
                    <a 
                      href={getDashboardUrl('student')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.assignments")}
                    </a>
                  </>
                )}
                {user.role === 'teacher' && (
                  <>
                    <a 
                      href={getDashboardUrl('teacher')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.myClasses")}
                    </a>
                    <a 
                      href={getDashboardUrl('teacher')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.gradebook")}
                    </a>
                  </>
                )}
                {user.role === 'parent' && (
                  <>
                    <a 
                      href={getDashboardUrl('parent')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.children")}
                    </a>
                    <a 
                      href={getDashboardUrl('parent')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.reports")}
                    </a>
                  </>
                )}
                {user.role === 'school' && (
                  <>
                    <a 
                      href={getDashboardUrl('school')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.teachers")}
                    </a>
                    <a 
                      href={getDashboardUrl('school')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.students")}
                    </a>
                  </>
                )}
                {user.role === 'admin' && (
                  <>
                    <a 
                      href={getDashboardUrl('admin')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.users")}
                    </a>
                    <a 
                      href={getDashboardUrl('admin')} 
                      className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("navbar.settings")}
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
                  {t("navbar.logout")}
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
                  {t("navbar.features")}
                </a>
                <a 
                  href="#" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("navbar.about")}
                </a>
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <Link 
                    to={getLoginUrl()} 
                    className="block text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("navbar.login")}
                  </Link>
                  <Link 
                    to={getLoginUrl()} 
                    className="block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("navbar.tryDemo")}
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
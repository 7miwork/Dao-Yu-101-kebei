import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { DEMO_ACCOUNTS } from '../auth/demoAccounts';
import { BASE_URL } from '../config/base';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate(result.redirectTo);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleDemoLogin = (email, password) => {
    setFormData({ email, password });
    // Auto-submit after setting demo credentials
    setTimeout(() => {
      document.getElementById('login-form').dispatchEvent(new Event('submit'));
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
            <span className="text-white font-bold text-2xl">DY</span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary">
            Sign in to Dao-Yu-101
          </h2>
          <p className="mt-2 text-text-secondary">
            Access your educational dashboard
          </p>
        </div>

        {/* Login Form */}
        <form id="login-form" className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="card space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>

        {/* Demo Accounts */}
        <div className="mt-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-text-primary">Try Demo Accounts</h3>
            <p className="text-sm text-text-secondary">
              Click any account below to login instantly
            </p>
          </div>
          
          <div className="space-y-2">
            {DEMO_ACCOUNTS.map((account) => (
              <button
                key={account.id}
                onClick={() => handleDemoLogin(account.email, account.password)}
                className="w-full card hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-text-primary group-hover:text-primary">
                      {account.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {account.email} • {account.role}
                    </div>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <a
            href={BASE_URL}
            className="text-primary hover:text-primary/80 font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

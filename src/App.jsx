import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProviderWrapper } from './auth/authProvider';
import { ProtectedRoute, PublicRoute } from './auth/protectedRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { getDashboardPath } from './auth/roles';

function App() {
  return (
    <AuthProviderWrapper>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/" 
            element={
              <PublicRoute>
                <LandingPage />
              </PublicRoute>
            } 
          />
          
          <Route 
            path="/login" 
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } 
          />
          
          {/* Protected Dashboard Routes */}
          <Route 
            path="/dashboard/:role" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          
          {/* Fallback Routes */}
          <Route path="/dashboard" element={<Navigate to="/dashboard/student" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProviderWrapper>
  );
}

export default App;

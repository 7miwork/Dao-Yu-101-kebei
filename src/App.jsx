import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProviderWrapper } from './auth/authProvider';
import { ProtectedRoute, PublicRoute } from './auth/protectedRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/dashboard/student';
import TeacherDashboard from './pages/dashboard/teacher';
import ParentDashboard from './pages/dashboard/parent';
import SchoolDashboard from './pages/dashboard/school';
import AdminDashboard from './pages/dashboard/admin';
import { BASE_URL } from './config/base';

function App() {
  // Back button failsafe - ensure we always stay within the repo path
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/' || window.location.pathname === '') {
        window.location.href = BASE_URL;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
            path="/dashboard/student" 
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/dashboard/teacher" 
            element={
              <ProtectedRoute>
                <TeacherDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/dashboard/parent" 
            element={
              <ProtectedRoute>
                <ParentDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/dashboard/school" 
            element={
              <ProtectedRoute>
                <SchoolDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/dashboard/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Fallback Routes */}
          <Route path="/dashboard" element={<Navigate to="/dashboard/student" replace />} />
          <Route path="*" element={<Navigate to={BASE_URL} replace />} />
        </Routes>
      </Router>
    </AuthProviderWrapper>
  );
}

export default App;

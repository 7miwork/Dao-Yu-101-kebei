import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, hasRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export const PublicRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user) {
    const { getDashboardPath } = require('./roles');
    return <Navigate to={getDashboardPath(user.role)} replace />;
  }

  return children;
};

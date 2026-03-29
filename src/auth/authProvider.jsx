import React from 'react';
import { AuthProvider } from './useAuth';

export const AuthProviderWrapper = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

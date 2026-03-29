import { useState, useEffect, createContext, useContext } from 'react';
import { findDemoAccount } from './demoAccounts';
import { getDashboardPath } from './roles';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = localStorage.getItem('dao-yu-user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('dao-yu-user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const account = findDemoAccount(email, password);
      if (account) {
        const userSession = {
          id: account.id,
          email: account.email,
          role: account.role,
          name: account.name,
          // Include additional role-specific data
          ...(account.role === 'student' && { className: account.className }),
          ...(account.role === 'teacher' && { department: account.department }),
          ...(account.role === 'parent' && { children: account.children }),
          ...(account.role === 'school' && { institutionType: account.institutionType }),
        };
        
        setUser(userSession);
        localStorage.setItem('dao-yu-user', JSON.stringify(userSession));
        return { success: true, redirectTo: getDashboardPath(account.role) };
      } else {
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dao-yu-user');
  };

  const isAuthenticated = !!user;
  const hasRole = (role) => user?.role === role;

  const value = {
    user,
    isAuthenticated,
    hasRole,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

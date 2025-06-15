
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Define user roles
export type Role = 'student' | 'instructor' | 'admin';

// User type
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  branch: string;
}

// Auth context type
type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: Role;
    branch: string;
  }) => Promise<void>;
  logout: () => void;
};

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

// Auth provider props type
type AuthProviderProps = {
  children: React.ReactNode;
};

// Mock users for demo (in real app, this would be from a database)
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'student@example.com',
    password: 'password123',
    role: 'student' as Role,
    branch: 'addis-ababa',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'instructor@example.com',
    password: 'password123',
    role: 'instructor' as Role,
    branch: 'addis-ababa',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123',
    role: 'admin' as Role,
    branch: 'addis-ababa',
  },
];

// Auth provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check local storage for existing session on load
  useEffect(() => {
    const storedUser = localStorage.getItem('hirtoli-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function - mock implementation for demo
  const login = async (email: string, password: string) => {
    // In a real app, make an API call here
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    // Create a user object without the password
    const { password: _, ...safeUser } = foundUser;
    setUser(safeUser);
    localStorage.setItem('hirtoli-user', JSON.stringify(safeUser));

    // Redirect based on user role
    const dashboardRoute = getDashboardRoute(safeUser.role);
    window.location.href = dashboardRoute;
  };

  // Register function - mock implementation for demo
  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: Role;
    branch: string;
  }) => {
    // In a real app, make an API call here
    // Check if user already exists
    if (MOCK_USERS.some((u) => u.email === userData.email)) {
      throw new Error('User with this email already exists');
    }

    // Create new user (in a real app, this would be added to the database)
    const newUser = {
      id: Math.random().toString(36).substring(2, 9),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      branch: userData.branch,
    };

    setUser(newUser);
    localStorage.setItem('hirtoli-user', JSON.stringify(newUser));

    // Redirect based on user role
    const dashboardRoute = getDashboardRoute(newUser.role);
    window.location.href = dashboardRoute;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('hirtoli-user');
  };

  // Helper function to get dashboard route based on role
  const getDashboardRoute = (role: Role): string => {
    switch (role) {
      case 'student':
        return '/student-dashboard';
      case 'instructor':
        return '/instructor-dashboard';
      case 'admin':
        return '/admin-dashboard';
      default:
        return '/';
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the auth context
export const useAuth = () => useContext(AuthContext);

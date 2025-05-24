import { createContext, useContext, ReactNode, useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  getAuth,
  UserCredential
} from 'firebase/auth';

// Define the shape of our Auth context
interface AuthContextType {
  user: User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>; // Logout returns a Promise<void>
  loading: boolean;
}

// Define props for the provider
interface AuthProviderProps {
  children: ReactNode;
}

const firebaseConfig = {
  apiKey: "AIzaSyAAx_knJ_qqxPkJQ_xoIZnxt_c6gb6Wdys",
  authDomain: "todoapp-eeeb7.firebaseapp.com",
  projectId: "todoapp-eeeb7",
  storageBucket: "todoapp-eeeb7.appspot.com",
  messagingSenderId: "1072574112522",
  appId: "1:1072574112522:web:65fc4e184aed9894dc90f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Create the context with an initial undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- FIX IS HERE ---
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // This error will be thrown if useAuth is called outside of AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
// --- END FIX ---

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setuser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setuser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Only render children when loading is false to prevent rendering before auth state is known */}
      {!loading && children}
    </AuthContext.Provider>
  );
};
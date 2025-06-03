import { createContext, useContext, useMemo, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage"; // make sure your hook is typed too!
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "../firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Define the shape of our Auth context
interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Define props for the provider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the context with an initial undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();
  const [storedUser, setStoredUser] = useLocalStorage<string | null>("user", null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser.email);
        setStoredUser(firebaseUser.email);
      } else {
        setUser(null);
        setStoredUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (error: any) {
      console.error("Login failed:", error.message);
      throw error; // Re-throw the error for handling in the component
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      debugger
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (error: any) {
      console.error("Signup failed:", error.message);
      throw error; // Re-throw the error for handling in the component
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error: any) {
      console.error("Logout failed:", error.message);
    }
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      login,
      signup,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

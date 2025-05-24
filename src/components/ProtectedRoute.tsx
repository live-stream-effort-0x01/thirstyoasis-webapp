import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser, loading } = useAuth();

  // Show a loading indicator while the authentication state is being determined
  if (loading) {
    return <div>Loading authentication...</div>; // Or a spinner component
  }

  // If there's no current user, redirect to the login page
  // `replace` prop ensures the user can't just hit back to go to the protected route
  return currentUser ? children : <Navigate to="/login" replace />;
}
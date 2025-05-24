// src/Router.tsx
import React, { useState, Dispatch, SetStateAction, ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LandingPage from './routes/LandingPage';
import StreamPage from './routes/StreamPage';
import NotFoundPage from './routes/NotFoundPage';
import ProfilePage from './routes/ProfilePage';

import "../styles/unified.css";

// Import your AuthProvider and useAuth hook
import { AuthProvider, useAuth } from "../hooks/useAuth";


// --- PROTECTEDROUTE COMPONENT ---
// This component ensures a user is authenticated before rendering its children.
interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth(); // Use 'user' property from useAuth context

  if (loading) {
    // Show a loading indicator while the authentication state is being determined
    return <div>Loading authentication...</div>; // Or a more sophisticated spinner
  }

  // If no user is logged in, redirect to the home page.
  // The user can then use the Login/Signup buttons in the Header.
  if (!user) {
    return <Navigate to="/" replace />; // `replace` prevents adding to history
  }

  // If authenticated, render the children components.
  return <>{children}</>;
}
// --- END PROTECTEDROUTE COMPONENT ---


export default function Router() {
    // Centralized Modal State: This is where modalKey lives for all modals
    const [modalKey, setModalKey] = useState<ModalKey>(null);

    return (
        <>
            <AuthProvider>
                {/* The main Modal component is rendered here, outside Routes,
                    so it can overlay any page and respond to modalKey changes. */}
                <Modal modalKey={modalKey} setModalKey={setModalKey} />

                <Routes>
                    {/* Public Routes - pass modalKey/setModalKey */}
                    <Route
                        path="/"
                        element={<LandingPage modalKey={modalKey} setModalKey={setModalKey} />}
                    />
                    <Route
                        path="/hub"
                        element={<LandingPage modalKey={modalKey} setModalKey={setModalKey} />}
                    />

                    {/* Protected Routes - wrapped with the internal ProtectedRoute component */}
                    <Route
                        path="/stream"
                        element={
                            <ProtectedRoute>
                                {/* StreamPage now receives modalKey/setModalKey for any modals it might open */}
                                <StreamPage modalKey={modalKey} setModalKey={setModalKey} />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                {/* ProfilePage now receives modalKey/setModalKey for any modals it might open */}
                                <ProfilePage modalKey={modalKey} setModalKey={setModalKey} />
                            </ProtectedRoute>
                        }
                    />

                    {/* 404 Page and catch-all route */}
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate to="/404" replace />} /> {/* Catch-all for undefined routes */}
                </Routes>
            </AuthProvider>
        </>
    );
}
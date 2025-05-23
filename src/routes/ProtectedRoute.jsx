import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/signIn" replace />;
  }
  return children;
};

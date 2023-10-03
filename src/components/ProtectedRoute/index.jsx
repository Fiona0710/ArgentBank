import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = window.localStorage.getItem('token');
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    return <Navigate to="/SignIn" replace />;
  }

  return children;
}
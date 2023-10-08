import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const token = useSelector(state => state.Auth.token)
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    return <Navigate to="/SignIn" replace />;
  }

  return children;
}
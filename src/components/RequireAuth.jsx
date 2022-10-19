import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.userSlice.user);
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;

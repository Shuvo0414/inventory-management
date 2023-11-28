// ManegerRoute.js
import useManeger from "../hooks/useManeger";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ManegerRoute = ({ children, forbiddenElement }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isManeger, isManegerLoading] = useManeger();

  if (loading || isManegerLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user && isManeger) {
    return children;
  }

  return (
    forbiddenElement || <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export default ManegerRoute;

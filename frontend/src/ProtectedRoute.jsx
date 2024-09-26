import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (redirectPath = "/signin", isAdminOnly = false) => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

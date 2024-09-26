import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (redirectPath = "/signin", isAdminOnly = false) => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    return <Navigate to={"/signin"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

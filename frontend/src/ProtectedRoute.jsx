import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (redirectPath = "/signin", isAdminOnly = false) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    console.log("Redirecting to signin");
    return <Navigate to={"/signin"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

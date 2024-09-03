import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FloatingIcon from "./Components/FloatingIcon";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <FloatingIcon />
      <Outlet />
    </>
  );
};

export default RootLayout;

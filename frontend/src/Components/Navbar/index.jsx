import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authServices";

const NavLinks = [
  {
    title: "Home",
    URL: "/",
  },
  {
    title: "Add Review",
    URL: "/add-review",
  },
  {
    title: "Butt.png",
    URL: "/butt",
  },
  {
    title: "Logout",
    URL: "",
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="navbar">
      <div className="logo">Fork n Tell</div>
      <Button
        className="menu-button"
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
        <div className="drawer-menu">
          {NavLinks.map((link, i) => {
            if (link.title === "Logout") {
              return (
                <Link key={i} className="nav-links" onClick={handleLogout}>
                  {link.title}
                </Link>
              );
            }
            return (
              <Link to={link.URL} className="nav-links" key={i}>
                {link.title}
              </Link>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;

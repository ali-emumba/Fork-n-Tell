import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import "./styles.css";
import { Link } from "react-router-dom";

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
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

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
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="drawer-menu">
          {NavLinks.map((link) => (
            <Link to={link.URL} className="nav-links">
              {link.title}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;

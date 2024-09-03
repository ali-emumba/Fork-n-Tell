import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import "./styles.css";

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
        className="drawer-menu"
      >
        <p>Home</p>
        <p>Reviews</p>
        <p>Contact Us</p>
      </Drawer>
    </div>
  );
};

export default Navbar;

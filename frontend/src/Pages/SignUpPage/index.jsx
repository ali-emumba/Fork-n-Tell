import React from "react";
import { motion } from "framer-motion";
import SignUpForm from "../../Components/SignUpForm";
import signup_page_image from "./../../assets/signup_page_image.jpg";
import "./styles.css"; // Import the CSS file

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="illustration-container">
        <img src={signup_page_image} alt="illustration" />
      </div>
      <div className="signup-container">
        <motion.p
          className="welcome-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Welcome to <b>Fork n Tell</b>
        </motion.p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;

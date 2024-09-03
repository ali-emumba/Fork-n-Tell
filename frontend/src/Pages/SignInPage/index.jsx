import React from "react";
import { motion } from "framer-motion";
import SignInForm from "./../../Components/SignInForm";
import signin_page_image from "./../../assets/signin_page_image.jpg";
import "./styles.css";

const SignInPage = () => {
  return (
    <div className="signin-page">
      <div className="signin-container">
        <motion.p
          className="welcome-back"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Welcome back to <b>Fork n Tell</b>
        </motion.p>
        <SignInForm />
      </div>
      <div className="illustration-container">
        <img src={signin_page_image} alt="image of french fries" />
      </div>
    </div>
  );
};

export default SignInPage;

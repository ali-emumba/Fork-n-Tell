import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authServices";

const SignInForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      const { accessToken, refreshToken, user } = await loginUser(
        data.email,
        data.password
      );
      console.log(accessToken, refreshToken, user);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Stagger the fields by 0.2 seconds
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="signin-form">
      <motion.h3
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fieldVariants}
      >
        Sign In
      </motion.h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email field */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
          className="form-group"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </motion.div>

        {/* Password field */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
          className="form-group"
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </motion.div>

        {/* Submit button */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
          className="form-group"
        >
          <button type="submit">Sign In</button>
        </motion.div>

        <motion.p
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
        >
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </motion.p>
      </form>
    </div>
  );
};

export default SignInForm;

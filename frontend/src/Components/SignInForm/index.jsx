import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./styles.css";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
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

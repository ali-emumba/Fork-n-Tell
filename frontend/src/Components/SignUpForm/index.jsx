import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "./styles.css"; // Import the CSS file

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="signup-form">
      <motion.h3
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fieldVariants}
      >
        Sign Up
      </motion.h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name field */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
          className="form-group"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </motion.div>

        {/* Email field */}
        <motion.div
          custom={3}
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
          custom={4}
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

        {/* Confirm Password field */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
          className="form-group"
        >
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
            })}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </motion.div>

        {/* How was your day - Slider */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
          className="form-group"
        >
          <label htmlFor="day">How was your day? (1-10)</label>
          <input type="range" id="day" min="1" max="10" {...register("day")} />
        </motion.div>

        {/* Submit button */}
        <motion.div
          custom={7}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
          className="form-group"
        >
          <button type="submit">Sign Up</button>
        </motion.div>

        <motion.p
          custom={8}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
        >
          Already have an account? <a href="/signin">Sign in</a>
        </motion.p>
      </form>
    </div>
  );
};

export default SignUpForm;

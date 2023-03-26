import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "../SignupForm/SignupForm";

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p className="signup-link">
          New user?{" "}
          <Link to="#" onClick={handleShowModal}>
            Sign up
          </Link>
        </p>
      </form>
      <SignupForm showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default LoginForm;

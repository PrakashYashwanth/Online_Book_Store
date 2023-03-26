import React from "react";
import LoginForm from "../../charges/LoginForm/LoginForm";
import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src="images/book-image" alt="book" className="login-image" />
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import './AuthPage.css'; // Ensure you have created the corresponding CSS file for styling

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>MobileBazar</h1>
        <p>Buy and Sell Used Mobile Phones</p>
      </div>

      <div className="form-container">
        {isLogin ? (
          <div className="login-form">
            <h2>Log in to your account</h2>
            <form>
              <div className="form-input">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-input">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="form-btn">Log In</button>
            </form>
            <p className="toggle-text">
              Don't have an account? <span onClick={toggleForm}>Register here</span>
            </p>
          </div>
        ) : (
          <div className="register-form">
            <h2>Create a new account</h2>
            <form>
              <div className="form-input">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-input">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Choose a username" required />
              </div>
              <div className="form-input">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Create a password" required />
              </div>
              <button type="submit" className="form-btn">Sign Up</button>
            </form>
            <p className="toggle-text">
              Already have an account? <span onClick={toggleForm}>Log in here</span>
            </p>
          </div>
        )}
      </div>

      <footer>
        <p>&copy; 2024 MobileBazar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

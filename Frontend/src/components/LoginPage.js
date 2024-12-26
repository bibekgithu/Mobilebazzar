// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login functionality here (API call or validation)
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo">
          <h2>MobileBazar</h2>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="links">
          <Link to="/forgot-password">Forgotten password?</Link>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

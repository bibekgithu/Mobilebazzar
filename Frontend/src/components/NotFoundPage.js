// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ fontSize: '18px', color: '#007BFF' }}>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;

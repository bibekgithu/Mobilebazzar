import React from "react";
import './HomePage.css'; // Ensure you have a corresponding CSS file for styling

const HomePage = () => {
  const handleBuyerClick = () => {
    // Redirect to the Buyer section or page
    window.location.href = "/buyer"; // Change this to the actual route for Buyer
  };

  const handleSellerClick = () => {
    // Redirect to the Seller section or page
    window.location.href = "/seller"; // Change this to the actual route for Seller
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>MobileBazar</h1>
        <p>Buy and Sell Used Mobile Phones</p>
      </header>

      <div className="role-selection-container">
        <h2>Welcome to MobileBazar</h2>
        <p>Select your role to get started:</p>

        <div className="role-buttons">
          <button onClick={handleBuyerClick} className="role-button buyer-btn">
            Buyer
          </button>
          <button onClick={handleSellerClick} className="role-button seller-btn">
            Seller
          </button>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 MobileBazar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

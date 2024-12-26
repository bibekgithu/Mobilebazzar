import React, { useState } from "react";
import "./SellerPage.css"; // Ensure your CSS is updated for additional styling

const SellerPage = () => {
  const [phoneImage, setPhoneImage] = useState(null);
  const [phoneDetails, setPhoneDetails] = useState({
    title: "",
    description: "",
    price: "",
    contact: "",
    location: "", // Allow manual entry of district
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoneImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPhoneDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", phoneDetails, phoneImage);
    alert("Phone details submitted successfully!");
  };

  return (
    <div className="seller-page">
      <h1>Sell Your Used Phone</h1>
      <form onSubmit={handleSubmit} className="seller-form">
        <div className="form-group">
          <label htmlFor="phone-title">Phone Title:</label>
          <input
            type="text"
            id="phone-title"
            name="title"
            value={phoneDetails.title}
            onChange={handleInputChange}
            placeholder="Enter phone model (e.g., iPhone 12)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-description">Description:</label>
          <textarea
            id="phone-description"
            name="description"
            value={phoneDetails.description}
            onChange={handleInputChange}
            placeholder="Enter phone details (e.g., condition, accessories, etc.)"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="phone-price">Price (in NPR):</label>
          <input
            type="number"
            id="phone-price"
            name="price"
            value={phoneDetails.price}
            onChange={handleInputChange}
            placeholder="Enter price in Nepali Rupees"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-info">Contact Information:</label>
          <input
            type="text"
            id="contact-info"
            name="contact"
            value={phoneDetails.contact}
            onChange={handleInputChange}
            placeholder="Enter your contact number or email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-location">Location (District):</label>
          <input
            type="text"
            id="phone-location"
            name="location"
            value={phoneDetails.location}
            onChange={handleInputChange}
            placeholder="Enter the district of the phone"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-image">Upload Phone Image:</label>
          <input
            type="file"
            id="phone-image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {phoneImage && <img src={phoneImage} alt="Phone Preview" className="image-preview" />}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellerPage;

import React from "react";
import "./Home.css";

function decodeObject(encoded) {
  try {
    const decoded = atob(encoded);
    const obj = JSON.parse(decoded);
    return obj;
  } catch (error) {
    console.error("Error decoding object:", error);
    return null;
  }
}

const Home = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const data = queryParams.get("data");
  const obj = decodeObject(data);

  return obj && obj.name ? (
    <div className="paytm-container">
      <div className="left-section">
        <h2 className="product-heading">Hello {obj.name}</h2>
        <p className="product-name">Product: ProductName</p>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="right-section">
        <h2 className="payment-heading">Pay Here!!</h2>
        <div className="payment-form">
          <div className="paytm-input">
            <label className="paytm-label">Amount (INR)</label>
            <input
              className="paytm-input-field"
              type="number"
              // value={amount}
              // onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className="paytm-button">Pay with Paytm</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="error-container">
      <p>Something went wrong! Please Regenerate Payment Link</p>
      <button className="go-back-button">Go Back</button>
    </div>
  );
};

export default Home;

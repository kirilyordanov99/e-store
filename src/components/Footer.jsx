import React, { useState } from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your logic for handling the email subscription here
    console.log(`Subscribed with email: ${email}`);
    // You can send the email to your backend for processing or handle it as needed
  };

  return (
    <footer>
      <div className="row primary">
        <div className="column about">
          <h3>React E-store template</h3>
          <p>
            Learning react by creating simple, and effective template for 
            online store also
          </p>
          <div className="social">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-youtube-square"></i>
          </div>
        </div>
        <div className="column subscribe">
          <h3>Newsletter</h3>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn btn-outline-primary " onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="row copyright">
        <div className="footer-menu">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="contact">Contact</a>
          <a href="products">Porducts</a>
          <a href="terms">Terms</a>
        </div>
        <p>Copyright &copy; 2021 Kiril Yordanov</p>
      </div>
    </footer>
  );
};

export default Footer;

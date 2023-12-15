import React from 'react';
import { Footer, Navbar } from "../components";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Terms and Services</h1>
        <hr />
        <p className="lead">
          Welcome to eStore, your imaginative online shopping adventure! Before you embark on this thrilling journey, take a moment to familiarize yourself with our whimsical terms of service.
        </p>
        
        <h2>1. Acceptance of Whimsical Terms</h2>
        <p>
          By entering the enchanting realm of our website, you hereby agree to dance to the rhythm of these terms of service. Should you choose not to participate in this dance, kindly exit the portal immediately.
        </p>

        <h2>2. About the Enchanted eStore</h2>
        <p>
          eStore is a magical online emporium carefully crafted for the sole purpose of spreading joy and learning. As a figment of our imagination, eStore exists in the ethereal realm of education and fantasy. No tangible transactions or purchases can be conjured within this mystical space.
        </p>

        <h2>3. Spellbinding Products and Imaginary Currency</h2>
        <p>
          Explore our collection of fantastical products with your mind's eye. Use your imaginary currency to make-believe purchases that exist only in the wondrous land of eStore. Each interaction is a spell cast in the magical tapestry of your imagination.
        </p>

        <h2>4. Mystical Contact Us</h2>
        <p>
          If you ever find yourself lost in the enchanted woods of questions, send a mystical message to our wise owls at info@estore.com. They will guide you back to the path of knowledge and wonder.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;

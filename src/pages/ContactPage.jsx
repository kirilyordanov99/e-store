import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Make sure to provide the correct path to your Navbar component

<<<<<<< HEAD
const ContactPage = () =>
 {
  const [ formData, setFormData ] = useState({
=======
const ContactPage = () => {
  const [formData, setFormData] = useState({
>>>>>>> 5f850ceb0e534b3ae6c4e1fd15dfc5f8868537df
    name: '',
    email: '',
    subject: '',
    message: '',
  });

<<<<<<< HEAD
  const handleSubmit = ( e ) => 
  {
    e.preventDefault();
    // Send form data to the PHP script using AJAX
    fetch('contact.php', 
    {
      method: 'POST',
      body: JSON.stringify( formData ),
    })
      .then((response) => 
      {
        if (response.status === 200) {
          alert( 'Email sent successfully!' );
          // You can also redirect to a success page here if needed.
        } else {
          alert( 'Failed to send email.' );
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the PHP script using AJAX
    fetch('contact.php', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Email sent successfully!');
          // You can also redirect to a success page here if needed.
        } else {
          alert('Failed to send email.');
>>>>>>> 5f850ceb0e534b3ae6c4e1fd15dfc5f8868537df
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
<<<<<<< HEAD
            <form onSubmit={ handleSubmit }>
=======
            <form onSubmit={handleSubmit}>
>>>>>>> 5f850ceb0e534b3ae6c4e1fd15dfc5f8868537df
              <div className="form my-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
<<<<<<< HEAD
                  value={ formData.name }
                  onChange={ handleChange }
=======
                  value={formData.name}
                  onChange={handleChange}
>>>>>>> 5f850ceb0e534b3ae6c4e1fd15dfc5f8868537df
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
<<<<<<< HEAD
                  value={ formData.email }
                  onChange={ handleChange }
=======
                  value={formData.email}
                  onChange={handleChange}
>>>>>>> 5f850ceb0e534b3ae6c4e1fd15dfc5f8868537df
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
<<<<<<< HEAD
                  value={ formData.subject }
                  onChange={ handleChange }
=======
                  value={formData.subject}
                  onChange={handleChange}
>>>>>>> 5f850ceb0e534b3ae6c4e1fd15dfc5f8868537df
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="message">Message</label>
                <textarea
<<<<<<< HEAD
                  rows={ 5 }
                  name="message"
                  value={ formData.message }
                  onChange={ handleChange }
=======
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
>>>>>>> 5f850ceb0e534b3ae6c4e1fd15dfc5f8868537df
                  className="form-control"
                  id="message"
                  placeholder="If the contact form doesn't work, simply send an email to kirchovt@gmail.com!"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;

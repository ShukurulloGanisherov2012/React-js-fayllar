import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 
    5000); 
  }

  return (
    <>
      <div className="container bg-light py-5">
        <h1 className='text-center mb-5'>Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.6320705899516!2d68.77466267945985!3d40.49489243598057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b207ac5e50942b%3A0xc672808b9c46d45a!2sIT%20LIVE%20ACADEMY!5e0!3m2!1suz!2s!4v1717521543481!5m2!1suz!2s"
              width="100%"
              height="450"
              style={{ border: "2px solid blue" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <div className="col-md-6">
            <h2>Fill in gaps</h2>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              {/* Bootstrap alert */}
              {showAlert && 
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  Thank you for contacting us! We'll get back to you soon.
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              }
              <button onClick={handleClick} type="button" className="btn btn-success fs-6">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import './App.css';
import { FaCheckCircle } from "react-icons/fa";
import Home from './Home.jsx';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false); // New state to manage navigation

  const handleClick = (e) => {
    e.preventDefault();
    if (email === '') {
      setError(true);
      document.querySelector('input').style.backgroundColor = '#ffd1c1';
    } else {
      setError(false);
      setEmail('');
      document.querySelector('input').style.backgroundColor = '#fff';
      setIsSubscribed(true); // Set the state to true to navigate to Home
    }
  };

  if (isSubscribed) {
    return <Home />;
  }

  return (
    <div className="App">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li><FaCheckCircle className="icon" />Product discovery and building what matters</li>
            <li><FaCheckCircle className="icon" />Measuring to ensure updates are a success</li>
            <li><FaCheckCircle className="icon" />And much more!</li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h5 style={{ fontSize: '15px', fontWeight: '700' }}>Email Address</h5>
            {error && <h5 className='error' style={{ fontSize: '15px', fontWeight: '700', color: '#FF527B' }}>Valid Email required</h5>}
          </div>

          <form className="newsletter-form" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="newsletter-image">
          <img src="/img.png" alt="Newsletter visual" />
        </div>
      </div>
    </div>
  );
}

export default App;

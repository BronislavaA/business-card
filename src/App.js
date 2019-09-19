import React from 'react';
import logo from './logo192.png';
import address from './placeholder.png'
import phone from './phone-call.png'
import email from './envelope.png'
import './App.css';

const App = () => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="front">
          <div className="title">
            <h1>Name Surname</h1>
            <p>Official position</p>
          </div>
          <div className="divider"></div>
          <div className="contact">
            <div className="icon-text">
              <img src={phone} alt="phone"/>
              <p>+111 22 333</p>
            </div>
            <div className="icon-text">
              <img src={address} alt="address"/>
              <p>123 Your Street</p>
            </div>
            <div className="icon-text">
              <img src={email} alt="email"/>
              <p>youremail@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="card-logo">
            <img src={logo} alt="logo"/>
            <p className="company-name">Company Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

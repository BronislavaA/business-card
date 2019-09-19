import logo from './logo192.png';
import address from './placeholder.png'
import phone from './phone-call.png'
import email from './envelope.png'
import styled from 'styled-components'
import React from 'react'

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
`

const StyledCard = styled.div`
  background-color: transparent;
  width: 600px;
  height: 400px;
  perspective: 1000px;

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  :hover .card-inner {
    transform: rotateY(180deg);
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid rgba(0,0,0,0.4);
    align-items: center;
    color: black;
    display: flex;
    background-color: white;
    background: url(${props => props.backgroundImage}) no-repeat center fixed;
    background-size: cover;
  }

  .title {
    flex: 45%;
  }
  
  .contact {
    flex: 45%;
  }
  
  .divider { 
    flex: auto;
    overflow: hidden;
    height: 100%;
    margin-left: 10px;  
  }
  
  .divider:after { 
    content:''; 
    display: block;
    margin-left: -20px;
    width: 20px;
    height: 100%;  
    border-radius: 12px / 125px;  
    box-shadow: 0 0 8px #00000057;
  }
  
  .title h1, .title p {
    margin: 0;
    text-align: right;
    text-transform: uppercase
  }
  
  .icon-text img, .icon-text p {
    display: inline-block;
    vertical-align: middle;
  }
  
  .icon-text img {
    margin: 0 5px;
  }
  
  .back {
    transform: rotateY(180deg);
  }
  
  .card-logo {
    margin: auto;
    display: block;
    text-align: center;
    text-transform: uppercase;
  }
`;
/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */

const App = () => {
  return (
    <StyledApp>
      <StyledCard backgroundImage={"background.jpg"}>
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
      </StyledCard>
    </StyledApp>
  );
}

export default App;

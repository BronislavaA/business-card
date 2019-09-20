import styled from 'styled-components'
import React from 'react'
import { Title, IconText, Logo } from './components'

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
  
  .back {
    transform: rotateY(180deg);
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
      <StyledCard backgroundImage={"images/background.jpg"}>
        <div className="card-inner">
          <div className="front">
            <Title/>
            <div className="divider"></div>
            <div className="contact">
              <IconText phone/>
              <IconText address/>
              <IconText email/>
            </div>
          </div>
          <div className="back">
            <Logo/>
          </div>
        </div>
      </StyledCard>
    </StyledApp>
  );
}

export default App;

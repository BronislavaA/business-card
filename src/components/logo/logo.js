import React from "react";
import styled from 'styled-components'

const StyledLogo = styled.div`
  margin: auto;
  display: block;
  text-align: center;
  text-transform: uppercase;

  h1, p {
    margin: 0;
  }
`
/**
 * @param props
 * @returns {*}
 * @constructor
 */
const Logo = () => {
  return (
    <StyledLogo>
      <img src="images/logo192.png" alt="logo"/>
      <h1>Company Name</h1>
      <p>Slogan for company here</p>
    </StyledLogo>
  )
}

export default Logo
import React from "react";
import styled from 'styled-components'

const StyledLogo = styled.div`
  margin: auto;
  display: block;
  text-align: center;
  text-transform: uppercase;
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
      <h2>Company Name</h2>
    </StyledLogo>
  )
}

export default Logo
import React from "react";
import styled from 'styled-components'

const StyledTitle = styled.div`
  flex: 45%;
  margin-right: 20px;  

  h1, p {
    margin: 0;
    text-align: right;
    text-transform: uppercase
  }
`
/**
 * @param props
 * @returns {*}
 * @constructor
 */
const Title = () => {
  return (
    <StyledTitle>
      <h1>Evan Bradley</h1>
      <p>Climate Change Analyst</p>
    </StyledTitle>
  )
}

export default Title
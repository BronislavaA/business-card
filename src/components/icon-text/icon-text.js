import React from "react";
import styled from 'styled-components'

const StyledIconText = styled.div`
  img, p {
    display: inline-block;
    vertical-align: middle;
  }
  
  img {
    margin: 0 5px;
  }
`
/**
 * @param props
 * @returns {*}
 * @constructor
 */
const phone = (
  <div>
    <img src="images/phone-call.png" alt="phone"/>
    <p>+111 22 333</p>
  </div>
)
const address = (
  <div>
    <img src="images/placeholder.png" alt="address"/>
    <p>123 Your Street</p>
  </div>
)
const email = (
  <div>
    <img src="images/envelope.png" alt="email"/>
    <p>youremail@gmail.com</p>
  </div>
)

const IconText = (props) => {
  if (props.phone) {
    return (
      <StyledIconText>
        {phone}
      </StyledIconText>
    )
  }
  if (props.address) {
    return (
      <StyledIconText>
        {address}
      </StyledIconText>
    )
  }
  if (props.email) {
    return (
      <StyledIconText>
        {email}
      </StyledIconText>
    )
  }
}

export default IconText
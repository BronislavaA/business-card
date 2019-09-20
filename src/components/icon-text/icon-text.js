import React from "react";
import styled from 'styled-components'

const StyledIconText = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: stretch;
  }

  i, p {
    display: inline-block;
    vertical-align: middle;
  }
  
  i {
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
    <i class="material-icons">phone</i>
    <p><b>+477 3086 7958</b></p>
  </div>
)
const address = (
  <div>
    <i class="material-icons">room</i>
    <p><b>72 Boar Lane, GL53 4TY</b></p>
  </div>
)
const email = (
  <div>
    <i class="material-icons">mail_outline</i>
    <p><b>evan.bradley@gmail.com</b></p>
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
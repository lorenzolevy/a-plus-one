import PropTypes from "prop-types"
import React from "react"
import { 
  StyledHeader, 
  StyledLink, 
  Title,
  NavMenu, 
  CallWrap, 
  activeStyles, 
  Icon 
} from "./GlobalHead.styles"

import { navItems } from './Constants.js' 

const GlobalHead = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink title="Navigate to home" to="/">
      <Title>{siteTitle}</Title>
    </StyledLink>
    <input type="checkbox" id="res-menu" />
    <NavMenu id="navigation">
      {!!navItems && navItems.length > 0 && navItems.map(({ to, text }, index) => (
        <StyledLink key={`header-nav-item-${index}`} to={to} activeStyle={activeStyles}>
          {text}
        </StyledLink>
      ))}
    </NavMenu>
    <CallWrap>
      <a
        title="Click to call Selah Roofing"
        style={{ textDecoration: "none" }}
        href="tel:1-323-870-7086"
      >
        <div>
          <p id="num-text">CALL</p>
          <p id="number">(323) 870-7086</p>
          <Icon icon={["fas", "phone-alt"]} />
        </div>
      </a>
    </CallWrap>
    <label htmlFor="res-menu">
      <Icon icon={["fas", "bars"]} id="sign-one" />
      <Icon icon={["fas", "times"]} id="sign-two" />
    </label>
  </StyledHeader>
)

GlobalHead.propTypes = {
  siteTitle: PropTypes.string,
}

GlobalHead.defaultProps = {
  siteTitle: ``,
}

export default GlobalHead

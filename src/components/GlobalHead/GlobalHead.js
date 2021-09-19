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


const GlobalHead = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink title="Navigate to home" to="/">
      <Title>{siteTitle}</Title>
    </StyledLink>
    <input type="checkbox" id="res-menu" />
    <NavMenu id="navigation">
      <StyledLink to="/" activeStyle={activeStyles}>
        Home
      </StyledLink>
      <StyledLink to="/about" activeStyle={activeStyles}>
        About
      </StyledLink>
      <StyledLink to="/quote" activeStyle={activeStyles}>
        Contact
      </StyledLink>
      <StyledLink to="/projects" activeStyle={activeStyles}>
        Projects
      </StyledLink>
    </NavMenu>

    <CallWrap>
      <a
        title="Click to call Selah Roofing"
        style={{ textDecoration: `none` }}
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

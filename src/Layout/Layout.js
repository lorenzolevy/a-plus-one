import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GlobalFooter from "../components/GlobalFooter"
import GlobalHead from "../components/GlobalHead"
import "../styles/layout.css"
import { Container, Content } from "./Layout.styles"

import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYelp, faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; 
library.add(faEnvelope, faPhoneAlt, faMapMarkerAlt, faBars, faTimes, faYelp, faFacebook, faGoogle, faInstagram )

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <GlobalHead siteTitle={data.site.siteMetadata.title || 'title'} />
          <Content>
              <main>{children}</main>
          </Content>
        <GlobalFooter />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

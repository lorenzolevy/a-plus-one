import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../components/footer"
import GlobalHead from "../components/GlobalHead"
import "../styles/layout.css"
import styled from "styled-components"

import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYelp, faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; 
library.add(faEnvelope, faPhoneAlt, faMapMarkerAlt, faBars, faTimes, faYelp, faFacebook, faGoogle, faInstagram )


const Container = styled.div`
  background-color: hsla(210, 20%, 11%, 1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const Content = styled.div`
  flex-grow: 1;
`

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
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

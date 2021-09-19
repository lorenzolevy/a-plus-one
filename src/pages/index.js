import React from "react"
import Hero from "../components/Hero"
import Layout from "../Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero bottomBorder buttons={[{ to: "/contact/", text: "Contact Us"}]} />
  </Layout> 
)

export default IndexPage

import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero bottomBorder buttons={[{ to: "/contact/", text: "Contact Us"}]} heroTitle="A-Plus One" descriptionText="Lets build something sturdy together" />
  </Layout> 
)

export default IndexPage

import React from "react"
import Layout from "../Layout"
import SEO from "../components/Seo"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import RowBlock from "../components/RowBlock"

export const query=graphql` 
{
  aboutHero: file(relativePath: {eq: "about-hero.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  gutters: file(relativePath: {eq: "gutters.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  commercial: file(relativePath: {eq: "commercial.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  residential: file(relativePath: {eq: "residential.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const AboutPage = ({ data }) => {
  const blocks = [
    {
      title: "Commercial",
      description: "We provide top-quality installation for businesses and apartments, and can have your new roofing installed in no time at all.",
      src: data.commercial.childImageSharp.fluid,
    },
    {
      title: "Residential",
      description: "Our roofers are professional. They can assist with leak repair and roof remodeling, allowing you to get the exact look you want.",
      src: data.residential.childImageSharp.fluid,
    },
    {
      title: "Gutters",
      description: "We specialize in seamless rain gutters, which will help prevent leaks while adhering to the aesthetic standards of your property.",
      src: data.gutters.childImageSharp.fluid,
    },
  ]
  return (
    <Layout>
      <SEO title="About" />
      <Hero
        bottomBorder
        height="50vh"
        bigOnIphone
        smallOnIpad
        maxWidth
        heroMarginBottom="3px"
        heroPadding="2rem 0" 
        gradient={`linear-gradient(hsla(216, 63%, 22%, 0.7),hsla(216, 63%, 22%, 0.2))`} 
        heroTitle="Protecting Your Homes and Businesses From Weathering." 
        descriptionText="See More Of Our Work." 
      />
      <RowBlock blocks={blocks} />
    </Layout>
)}



export default AboutPage

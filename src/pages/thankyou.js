import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { graphql } from 'gatsby'
import Hero from "../components/Hero"

const buttons = [
    {
        to: "/",
        text: "Home"
    },
    {
      to: "/projects",
      text: "Projects"
    },
]

export const query=graphql`
{
    hero: file(relativePath: { eq: "thankyou.jpeg" }) {
        childImageSharp {
            fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}`

const ThanksPage = ({ data }) => (
  <Layout>
    <SEO title="Thank You!" />
    <Hero imgSrc={data.hero.childImageSharp.fluid} centered buttons={buttons} />    
  </Layout>
)

export default ThanksPage
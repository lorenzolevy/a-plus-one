import React from "react"
import Layout from "../Layout"
import SEO from "../components/Seo"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Icon from "../primitives/Icon"

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Hero
        bottomBorder
        height="29vh"
        smallOnIpad
        maxWidth
        heroMarginBottom="3px"
        heroPadding="2rem 0" 
        gradient={'linear-gradient(hsla(216, 63%, 22%, 0.7),hsla(216, 63%, 22%, 0.2))'} 
        heroTitle="Projects" 
        descriptionText="See More Of Our Work." 
        content={
          <>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.yelp.com/biz_photos/selah-roofing-pico-rivera-california"
            >
              <Icon icon={["fab", "yelp"]} />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/pg/selahroofing.net/photos/"
            >
              <Icon icon={["fab", "facebook"]} />
            </a>
          </>
        }
      />
      <Gallery data={data} />
    </Layout>
  )
}

export default ProjectsPage

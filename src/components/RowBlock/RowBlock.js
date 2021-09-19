import React from 'react'
import { ThirdsContainer, ServicesContentWrap, SectionTitle } from "./RowBlock.styles"
import BgImg from "gatsby-background-image"

const RowBlock = ({ blocks }) => (
    <ThirdsContainer>
      {!!blocks && blocks.length > 0 && blocks.map(({ src, title, description }, index) => (
        <BgImg
          key={`row-block-${index}`}
          fluid={[`linear-gradient(hsla(216, 63%, 22%, 0.6),hsla(216, 63%, 22%, 0.6))`, src]}
        >
          <ServicesContentWrap>
            <SectionTitle>{title}</SectionTitle>
            <p>{description}</p>
          </ServicesContentWrap>
        </BgImg>
      ))}
    </ThirdsContainer>
)

export default RowBlock

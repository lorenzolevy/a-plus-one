import React from 'react'
import { Link } from "gatsby"
import { PrimaryButton, StyledHero, ContentWrap, HeroTitle } from './Hero.styles'

const Hero = ({ 
  buttons, 
  heroTitle, 
  imgSrc, 
  descriptionText,
  bottomBorder, 
  centered, 
  height, 
  maxWidth, 
  heroMargin,
  heroPadding,
  gradient,
  content,
  smallOnIpad,
  bigOnIphone
}) => {
  return (
    <StyledHero
      height={height}
      maxWidth={maxWidth}
      heroMargin={heroMargin}
      heroPadding={heroPadding}
      bigOnIphone={bigOnIphone}
      tag="section"
      fluid={[
        !!gradient ? gradient : `linear-gradient(to right, rgba(65, 82, 98, 0.8),rgba(65, 82, 98, 0.1))`, !!imgSrc ? imgSrc : ''
      ]}
    >
      <ContentWrap centered={centered}>
        {!!heroTitle && <HeroTitle smallOnIpad={smallOnIpad} bottomBorder={bottomBorder}>{heroTitle}</HeroTitle>}
        <div>
          {!!descriptionText && <p>{descriptionText}</p>}
          {!!content && content}
          {!!buttons && buttons.length > 0 && buttons.map(({ text, to }, index) => (
            <Link key={`hero-button-${index}`} to={to}>
              <PrimaryButton buttonStyle={buttons.length === 1 ? 0 : 1}>
                {!!text ? text : "default text"}
              </PrimaryButton>
            </Link>
          ))}
        </div>
      </ContentWrap>
    </StyledHero>
  )
}

export default Hero

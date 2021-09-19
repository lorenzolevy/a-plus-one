import BgImage from "gatsby-background-image"
import styled, { css } from "styled-components"

export const PrimaryButton = styled.div`
  ${({ buttonStyle }) => buttonStyle === 0 ? 'max-width: 300px;' : 'max-width: 160px; min-width: 160px;'}
  ${({ buttonStyle }) => buttonStyle === 0 ? '' : 'margin: .6rem;'}
  font-size: 1rem;
  letter-spacing: 0.15rem;
  background-color: ${({ buttonStyle}) => buttonStyle === 0 ? css`linear-gradient(
    to right,
    rgba(65, 82, 98, 0.8),
    rgba(65, 82, 98, 0.1)
  )` : 'hsla(210,73%,95%,.9)'};
  box-shadow: inset 0 0 0 2px hsla(210, 73%, 95%, 1);
  border-radius: 0;
  border: 0;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  height: 2.6rem;
  font-family: Source Sans Pro;
  text-transform: uppercase;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  ${({ buttonStyle }) => buttonStyle === 0 ? '' : 'color: hsla(216, 92%, 62%, 1);'}
  display: ${({ buttonStyle }) => buttonStyle === 0 ? 'flex' : 'inline-flex'};
  &:hover {
    box-shadow: inset 0 0 0 2px rgba(128, 193, 255, 0.98);
    ${({ buttonStyle }) => buttonStyle === 0 ? '' : 'background-color: rgba(128, 193, 255, 0.98);'}
    color:  ${({ buttonStyle }) => buttonStyle === 0 ? 'rgba(128, 193, 255, 0.98)' : 'hsla(216, 92%, 62%, 1)'};
    cursor: pointer;
  }
`

export const StyledHero = styled(BgImage)`
  height: ${({ height }) => !!height ? height : '95vh'};
  ${({ maxWidth }) => !!maxWidth ? 'width: 100%;' : ''}
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ heroPadding }) => heroPadding ? heroPadding : 'inherit'};
  margin: ${({ heroMargin }) => heroMargin ? heroMargin : 'inherit'};
  ${({ bigOnIphone }) => bigOnIphone ? css`@media(max-width: 340px) {height: 100vh;}` : ''}
`

export const ContentWrap = styled.div`
  padding: 2rem 3rem 0 2.4rem;
  max-width: 900px;
  ${({ centered }) => !!centered ? 'margin: 0 auto; text-align: center;' : ''}
  > div > p {
    display: block;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    font-family: Source Sans Pro;
    margin-bottom: 0.6rem;
    font-weight: 600;
    color: hsla(210, 73%, 95%, 1);
    text-transform: uppercase;
    ${({ centered }) => !!centered ? 'text-align: center;' : ''}
  }
  > div > a {
    text-decoration: none;
    color: hsla(210, 73%, 95%, 1);
  }
  > p {
    max-width: 600px;
    display: block;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    font-family: Source Sans Pro;
    margin-bottom: 0.6rem;
    font-weight: 600;
    color: hsla(210, 73%, 95%, 1);
    text-transform: uppercase;
    padding-bottom: 0rem;
  }
`

export const HeroTitle = styled.h1`
  font-family: Roboto;
  color: hsla(210, 73%, 95%, 0.9);
  width: 100%;
  font-size: 2.6rem;
  margin-bottom: .2rem;
  ${({ bottomBorder }) => !!bottomBorder ? css`&:after {
    content: "";
    background-color: hsla(210, 73%, 95%, 1);
    display: block;
    height: 2px;
    margin: 1.6rem 0 1.2rem 0;
    width: 100%;
  }` : ''}
  ${({ smallOnIpad }) => smallOnIpad && css`@media (max-width: 780px) {
    font-size: 2rem;
  }`}

`
import Img from "gatsby-background-image"
import styled from "styled-components"

export const Grid = styled.div`
  @media (max-width: 680px) {
    > div > div {
      height: 270px;
      margin-bottom: 3px;
    }
  }
  @media (max-width: 1150px) and (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
    > div > div {
      height: 300px;
    }
  }
  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
    > div > div {
      height: 450px;
    }
  }
  display: grid;
  > div {
    position: relative;
    overflow: hidden !important;
  }
  max-width: 2000px;
  margin: 0 auto;
`
export const CardWrap = styled.div`
  overflow: hidden;
`

export const ProjectCard = styled(Img)`
  height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s, filter 0.25s;
  &:hover {
    transform: scale(1.08);
    filter: saturate(1.3);
    overflow: hidden;
    background-color: none;
  }
`
export const CardInner = styled.div`
  overflow: hidden;
  background-color: hsla(210, 20%, 32%, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 1rem;
  font-family: Roboto;
  &:hover {
    background-color: none;
  }
  > h1 {
    margin: 0;
    padding: 1rem 1rem 0.2rem 1rem;
    font-size: 1.4rem;
    color: hsla(210, 73%, 95%, 1);
  }
  > p {
    padding: 0.3rem 1rem;
    font-size: 1rem;
    color: hsla(210, 20%, 80%, 1);
    font-family: Roboto;
    font-weight: 300;
  }
`
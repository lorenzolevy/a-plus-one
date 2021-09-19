import styled from "styled-components"

const HeroTitle = styled.h1`
  font-family: Roboto;
  color: hsla(210,73%,95%,1);
  width: 100%;
  font-size: 2.6rem;
  &:after {
      content: "";
      background-color: hsla(210,73%,95%,1);
      display: block;
      height: 2px;
      margin: 1.6rem 0 1.2rem 0;
      width: 100%;
    }
  @media(max-width: 780px){
    font-size: 2rem;
  }
`

export const SectionTitle = styled(HeroTitle)`
  &:after {
    content: "";
    display: none;
  }
  margin-bottom: .6rem;
`

export const ThirdsContainer = styled.div`
  > div {
    height: 500px;
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  display: flex;
  width: 100%;
  @media(max-width:1300px) {
    flex-direction: column;
    > div {
      width: 100%;
      margin-bottom: 3px;
    }
  }
  @media(max-width:730px) {
    flex-direction: column;
    > div {
      margin-bottom: 3px;
      height: 300px;
    }
  }
`

const ContentWrap = styled.div`
    padding: 2rem 3rem 0 2.4rem;
    max-width: 1000px;
    > p {
        max-width: 600px;
        display: block;
        font-size: 1rem; 
        letter-spacing: 0.15rem;
        font-family: Source Sans Pro;
        margin-bottom: .6rem;
        font-weight: 600;
        color: hsla(210,73%,95%,1);
        text-transform: uppercase;
        padding-bottom: .8rem;
    }
`

export const ServicesContentWrap = styled(ContentWrap)`
  > h1 {
    font-size: 2rem;
    @media(max-width: 780px){
      font-size: 1.8rem;
    }
  }
  > p {
    font-size: 1rem;
    font-family: Roboto;
    letter-spacing: 0.05rem;
    font-weight: 400;
    text-transform: none;
    color: hsla(210,73%,95%,.8);
    padding: 0;
  }
`
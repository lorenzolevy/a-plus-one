import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Wrapper = styled.div`
  @media (max-width: 1150px) {
    min-height: 200px;
    padding-left: 1.2rem;
  }
  padding: 2.4rem 0 0.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 1px hsla(210, 20%, 25%, 0.98);
  height: 33.33%;
  > a {
    text-decoration: none;
  }
`

export const ContactItemWrap = styled.div`
  text-decoration: none;
  > a {
    display: inline-flex;
    font-family: Roboto;
    font-weight: 300;
    text-decoration: none;
    color: hsla(210, 73%, 95%, 0.8);
    &:hover {
      > svg,
      p {
        transition: color 0.5s;
        color: rgba(128, 193, 255, 0.98);
      }
    }
    > p {
      padding: 0.2rem 0.6rem 0 0.6rem;
    }
  }
`
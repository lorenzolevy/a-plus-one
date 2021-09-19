import styled from "styled-components"

export const StyledFooter = styled.footer`
  color: hsla(210, 20%, 67%, 1);
  padding: 1.2rem 1rem;
`

export const Container = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`

export const IconContainer = styled.div`
  @media (max-width: 600px) {
    padding-top: 0.8rem;
  }
`
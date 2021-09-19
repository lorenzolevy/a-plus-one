import React from "react"
import { StyledFooter, IconContainer, Container } from "./GlobalFooter.styles"
import Icon from "../../primitives/Icon"

import { footerOptions } from "./Constants"

const GlobalFooter = () => (
  <StyledFooter>
    <Container>
      © {new Date().getFullYear()} Selah Roofing Corporation
      <IconContainer>
        {!!footerOptions && footerOptions.length > 0 && footerOptions.map(({href, icon, type}, index) => (
            <a
              key={`footer-item-${index}`}
              rel={type !== 'MAILTO' ? "noopener noreferrer" : "false"}
              target={type !== 'MAILTO' ? "noopener noreferrer" : "false"}
              href={href}
            >
              <Icon icon={[icon[0], icon[1]]} />
            </a>
          ))
        }
      </IconContainer>
    </Container>
  </StyledFooter>
)

export default GlobalFooter
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = styled(FontAwesomeIcon)`
  padding: 0.1rem;
  font-size: 1.8rem;
  color: hsla(210, 73%, 95%, 0.9);
  margin-right: 0.8rem;
  &:hover {
    color: rgba(128, 193, 255, 0.98);
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }
`

export default Icon
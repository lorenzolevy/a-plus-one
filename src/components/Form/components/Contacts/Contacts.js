import React from "react"
import { Wrapper, ContactItemWrap, Icon } from "./Contacts.styles" 

const Contacts = () => (
  <>
    <Wrapper>
      <ContactItemWrap>
        <a href="tel:1-323-870-7086">
          <Icon icon={["fas", "phone-alt"]} />
          <p>(323) 870-7086</p>
        </a>
      </ContactItemWrap>
    </Wrapper>
    <Wrapper>
      <ContactItemWrap>
        <a href="mailto:calvin.selahroofing@gmail.com ">
          <Icon icon={["fas", "envelope"]} />
          <p>calvin.selahroofingcorp@gmail.com</p>
        </a>
      </ContactItemWrap>
    </Wrapper>
    <Wrapper>
      <ContactItemWrap>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/maps/place/Selah+Roofing/@33.9408414,-118.0954894,10z/data=!4m5!3m4!1s0x0:0x3b64bd9b48b72dd4!8m2!3d33.9408414!4d-118.0954894"
        >
          <Icon icon={["fas", "map-marker-alt"]} />
          <p className="offset">Los Angeles, CA</p>
        </a>
      </ContactItemWrap>
    </Wrapper>
  </>
)

export default Contacts
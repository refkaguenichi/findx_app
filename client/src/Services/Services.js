import React from "react";
import Icon1 from "../images/easy.png";
import Icon2 from "../images/svg-8.svg";
import Icon3 from "../images/svg-10.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH2,
  ServicesH3,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "../common/ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH2>Our services</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH3>Simple tracking</ServicesH3>
          <ServicesP>
            Submitting lost or found items is simple. Input the required
            information and let our system go to work.{" "}
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH3>Smart matching</ServicesH3>
          <ServicesP>
            Our matching system smartly handle and locates items lost or found
            and who potentially owns them.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH3>Premium Benefits</ServicesH3>
          <ServicesP>
            Once you create an account, you have acces to our platform forever.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

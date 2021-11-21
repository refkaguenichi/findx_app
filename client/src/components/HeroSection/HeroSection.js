import React from "react";
import Video from "../../videos/video.mp4";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "../../common/HeroSectionElements";
import { useState } from "react";
import { Button } from "../../common/ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Wherever you lost it, you find it...just list it</HeroH1>
        <HeroP>
          At findX we provide an intelligent lost & found matching system, which
          automatically identifies, matches, and pairs recently lost or found
          items with one another.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

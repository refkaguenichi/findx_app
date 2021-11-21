import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/ButtonElements";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  ImgWrap,
  Img,
} from "../../common/InfoSectionElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark ? 1 : 0}
                >
                  {buttonLabel === "Get started" ? (
                    <Link to="/post/add">Get started</Link>
                  ) : buttonLabel === "View recent posts" ? (
                    <Link to="/posts">View recent posts</Link>
                  ) : buttonLabel === "Start now" ? (
                    <Link to="/signUp">Start now</Link>
                  ) : (
                    <Link to="/charts">View chart</Link>
                  )}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;

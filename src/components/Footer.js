import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const FooterSection = styled.section`
  background: #000d1a;
  color: white;
  width: 100%;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;
const FooterContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Quote = styled.div`
  flex: 1;
  padding: 2rem 0rem;
  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;
const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: white;
  }
  span{
    position: relative;
  }
  span::after{
    content: '';
    position: absolute;
    bottom:-5px;
    left:0;
    width: 0;
    height: 0.09rem;
    background-color: #48cae4;
    transition: width 0.2s linear 0.05s;
  }
  span:hover{
    color: #90e0ef;
    transition: all 0.2s linear 0.05s;
  }
  span:hover::after{
    width: 100%;
  }
  h4{
    color: #CD853F;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;
const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
  &:hover{
    transform: scale(1.2);
    color: #fb8500;
  }
`;
const Instagram = styled(FaInstagram)`
  ${Icons}
`;
const Facebook = styled(FaFacebookF)`
  ${Icons}
`;
const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;
const Youtube = styled(FaYoutube)`
  ${Icons}
`;
const Contact = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: flex-start;
    }
`;
const Author = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 768px){
        justify-content: flex-start;
        text-align: left;
        margin-bottom: 2rem;
    }
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterTop>
          <Quote>
            <h3>
              Let's find <br />
              your Dream Villa
            </h3>
          </Quote>
          <FooterInfo>
            <h4>Contact Us</h4>
            <Link to="/homes"><span>FAQ</span></Link>
            <Link to="/homes"><span>Support</span></Link>
            <Link to="/homes"><span>Questions</span></Link>
          </FooterInfo>
          <FooterInfo>
            <h4>Offices</h4>
            <Link to="/homes"><span>Ho Chi Minh City</span></Link>
            <Link to="/homes"><span>Quy Nhon City</span></Link>
            <Link to="/homes"><span>Ha Noi City</span></Link>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcon>
            <a href="/" target="_blank">
              <Youtube />
            </a>
            <a href="/" target="_blank">
              <Instagram />
            </a>
            <a href="/" target="_blank">
              <Facebook />
            </a>
            <a href="/" target="_blank">
              <LinkedIn />
            </a>
          </SocialIcon>
          <Author>A demo-website project coded by ReactJS by thdungwithbugs &copy; 2022</Author>
          <Contact>
            <Button to="/homes">Let's Chat</Button>
          </Contact>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;

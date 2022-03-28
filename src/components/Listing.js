import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import HomePic1 from "../images/home1.jpg";
import HomePic2 from "../images/home2.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;
const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  padding: 0 1rem;
  min-height: 550px;
  height: 100%;
  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: all 0.3s linear;
  &:hover {
    transform: translateY(-2px);
  }
`;

const Listing = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1 data-aos='fade-right' data-aos-duration='1000' data-aos-once='true' data-aos-anchor-placement='center bottom' >View our newest spacing villas</h1>
        </Heading>
        <InfoRow>
          <InfoWrap data-aos='zoom-out-up' data-aos-duration='1200' data-aos-once='true' data-aos-anchor-placement='center bottom'  >
            <Image src={HomePic1} alt="home" />
            <h2>8 Beds 10 Bath villa in Quy Nhon, Binh Dinh</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
            </InfoLink>
          </InfoWrap>
          <InfoWrap data-aos='zoom-out-down' data-aos-duration='1200' data-aos-once='true' data-aos-anchor-placement='center bottom' >
            <Image
              src={HomePic2}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>4 Beds 2 Bath villa in Nha Trang, Khanh Hoa</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listing;

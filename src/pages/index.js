import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Listing from "../components/Listing";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { SliderData } from "../data/SliderData";

const Homes = () => {
  return (
    <>
      <Hero slides={SliderData}></Hero>
      <InfoSection {...InfoData}></InfoSection>
      <Listing></Listing>
      <Features></Features>
      <InfoSection {...InfoDataTwo}></InfoSection>
    </>
  );
};

export default Homes;

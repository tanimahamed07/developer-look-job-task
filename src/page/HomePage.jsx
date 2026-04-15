import React from "react";
import Banner from "../component/home/Banner";
import IntroSection from "../component/home/IntroSection";
import Service from "../component/home/Service";
import Content from "../component/home/Content";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <IntroSection></IntroSection>
      <Service></Service>
      <Content></Content>
    </div>
  );
};

export default HomePage;

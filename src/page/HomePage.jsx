import React from "react";
import Banner from "../component/home/Banner";
import IntroSection from "../component/home/IntroSection";
import Service from "../component/home/Service";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <IntroSection></IntroSection>
      <Service></Service>
    </div>
  );
};

export default HomePage;

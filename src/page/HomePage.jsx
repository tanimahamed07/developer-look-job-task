import Banner from "../component/home/Banner";
import IntroSection from "../component/home/IntroSection";
import Service from "../component/home/Service";
import Content from "../component/home/Content";
import Brand from "../component/home/Brand";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <IntroSection />
      <Service />
      <Content />
      <Brand />
    </div>
  );
};

export default HomePage;

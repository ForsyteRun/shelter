import {
  About,
  BackgroundWrapper,
  Donation,
  Header,
  Help,
  OurFriends,
  Present,
} from "@/components/layout";

const MainPage = () => {
  return (
    <>
      <BackgroundWrapper>
        <Header />
        <Present />
      </BackgroundWrapper>
      <About />
      <div className="wrapper">
        <OurFriends />
      </div>
      <Help />
      <div className="wrapper">
        <Donation />
      </div>
    </>
  );
};

export default MainPage;

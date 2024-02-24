import {
  About,
  BackgroundWrapper,
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
      <OurFriends />
      <Help />
    </>
  );
};

export default MainPage;

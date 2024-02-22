import {
  About,
  BackgroundWrapper,
  Header,
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
    </>
  );
};

export default MainPage;

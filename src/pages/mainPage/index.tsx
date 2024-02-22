import { About, BackgroundWrapper, Header, Present } from "@/components/layout";

const MainPage = () => {
  return (
    <>
      <BackgroundWrapper>
        <Header />
        <Present />
      </BackgroundWrapper>
      <About />
    </>
  );
};

export default MainPage;

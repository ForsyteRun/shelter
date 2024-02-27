import {
  About,
  Donation,
  Help,
  Introduce,
  OurFriends,
} from "@/components/layout";

const MainPage = () => {
  return (
    <>
      <Introduce />
      <About />
      <div className="wrapper" id="pets">
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

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

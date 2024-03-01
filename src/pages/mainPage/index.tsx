import {
  About,
  Donation,
  Help,
  OurFriends,
  Present,
} from "@/components/layout";

const MainPage = () => {
  return (
    <>
      <Present />
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

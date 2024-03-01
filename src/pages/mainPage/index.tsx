import {
  About,
  BackgroundWrapper,
  Donation,
  Help,
  OurFriends,
  Present,
} from "@/components/layout";
import s from "./styles.module.scss";

const MainPage = () => {
  return (
    <>
      <BackgroundWrapper style={s.backgroundStyle}>
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

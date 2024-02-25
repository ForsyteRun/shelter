import s from "./styles.module.scss";
import cn from "classnames";
import puppy from "@/assets/footer-puppy.png";
import { FooterInfo } from "@/components/layout";
import { footerInfo } from "@/db/footer";

const Footer = () => {
  return (
    <div className={cn("container", s.container)}>
      <div>
        <img src={puppy} alt="puppy-dog" />
      </div>
      <FooterInfo data={footerInfo[1]} styles={s.childContainerRight} />
      <FooterInfo data={footerInfo[0]} styles={s.childContainerLeft} />
    </div>
  );
};

export default Footer;

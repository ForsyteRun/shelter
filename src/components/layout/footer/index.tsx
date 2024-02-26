import s from "./styles.module.scss";
import cn from "classnames";
import puppy from "@/assets/footer-puppy.png";
import { FooterInfo } from "@/components/layout";
import { footerInfo } from "@/db/footer";

const Footer = () => {
  return (
    <div className={cn("container", s.container)}>
      <div className={s.contentContainer}>
        <FooterInfo
          data={footerInfo[0]}
          styles={cn(s.content, s.contentLeft)}
        />
        <FooterInfo
          data={footerInfo[1]}
          styles={cn(s.content, s.contentRight)}
        />
      </div>
      <div className={s.imageWrapper}>
        <img src={puppy} alt="puppy-dog" />
      </div>
    </div>
  );
};

export default Footer;

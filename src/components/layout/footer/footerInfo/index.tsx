import { IFooterInfo, IFooterInfoContent } from "@/types/interfaces";
import { FC } from "react";
import s from "./styles.module.scss";

interface IProps {
  data: IFooterInfo;
  styles: string;
}

const addCorrectTag = (content: string) => {
  const fullString = content.replaceAll(" ", "");
  const isPhoneNumber =
    String(parseInt(fullString)).split("").length === fullString.length - 1;

  const isEmail = content.includes("@");

  if (isEmail) {
    return (
      <a href={`mailto:${content}`} className={s.footerLinks}>
        {content}
      </a>
    );
  } else if (isPhoneNumber) {
    return (
      <a href={`tel:${content}`} className={s.footerLinks}>
        {content}
      </a>
    );
  } else {
    return <h3 className={s.footerAdress}>{content}</h3>;
  }
};

const FooterInfo: FC<IProps> = ({ data, styles }) => {
  const { info, title } = data;

  return (
    <div key={title} className={styles}>
      <h2>{title}</h2>
      {info.map(({ logo, content }: IFooterInfoContent, index: number) => (
        <div key={index}>
          <img src={logo} alt="logo" />
          {addCorrectTag(content)}
        </div>
      ))}
    </div>
  );
};

export default FooterInfo;

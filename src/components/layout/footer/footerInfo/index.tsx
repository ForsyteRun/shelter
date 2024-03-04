import { IFooterInfo, IFooterInfoContent } from "@/types/interfaces";
import { FC } from "react";

interface IProps {
  data: IFooterInfo;
  styles: string;
}

const FooterInfo: FC<IProps> = ({ data, styles }) => {
  const { info, title } = data;

  return (
    <div key={title} className={styles}>
      <h2>{title}</h2>
      {info.map(({ logo, content }: IFooterInfoContent, index: number) => (
        <div key={index}>
          <img src={logo} alt="logo" />
          <h3>{content}</h3>
        </div>
      ))}
    </div>
  );
};

export default FooterInfo;

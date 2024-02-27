import { FC, useState } from "react";
import { Button } from "@/components/UI";
import { ISliderData } from "@/types/interfaces";
import cn from "classnames";
import s from "./styles.module.scss";

interface PropsType extends ISliderData {
  styles: string;
}

const Card: FC<PropsType> = ({ title, path, styles, disc, type, info }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={cn(styles, s.container)}>
      <img src={path} alt={title} />
      <h3>{title}</h3>
      <Button
        title="Learn more"
        styles={cn("button", s.button)}
        callback={setIsModal}
      ></Button>
      {isModal && <div>{disc}</div>}
    </div>
  );
};

export default Card;

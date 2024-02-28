import { FC } from "react";
import s from "./styles.module.scss";
import { ISliderData } from "@/types/interfaces";

interface Props {
  data: Omit<ISliderData, "path">;
}

const ModalContent: FC<Props> = ({ data }) => {
  const { title, disc, info, type } = data;

  return (
    <div className={s.bodyContent}>
      <h2>{title}</h2>
      <h3>{type}</h3>
      <h4>{disc}</h4>
      <ul>
        {Object.entries(info).map(([key, value]) => (
          <li key={key} className={s.list}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalContent;

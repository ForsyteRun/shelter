import { helpData } from "@/db/help";
import s from "./styles.module.scss";
import cn from "classnames";
import { IHelpData } from "@/types/interfaces";

const Help = () => {
  return (
    <div className={cn("container", s.container)}>
      <h2>
        How you can help <div>our shelter</div>
      </h2>
      <div className={s.content}>
        {helpData.map(({ title, path }: IHelpData) => (
          <div key={title} className={s.contentContainer}>
            <img src={path} alt={title} />
            <h3 className={s.title}>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;

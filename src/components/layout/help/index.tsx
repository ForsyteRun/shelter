import { helpData } from "@/db/help";
import s from "./styles.module.scss";
import cn from "classnames";
import { IHelpData } from "@/types/interfaces";

const Help = () => {
  return (
    <section className={cn("container", s.container)}>
      <h2>
        How you can help <div>our shelter</div>
      </h2>
      <div className={s.content}>
        {helpData.map(({ title, path }: IHelpData, index) => (
          <div
            key={title}
            className={cn(s.contentContainer, { [s.lastRow]: index > 4 })}
          >
            <img src={path} alt={title} />
            <h3 className={cn(s.title)}>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Help;

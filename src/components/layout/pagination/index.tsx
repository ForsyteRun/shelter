import PaginationCards from "./paginationCards";
import s from "./styles.module.scss";
import cn from "classnames";

const Pagination = () => {
  return (
    <section className={s.wrapper}>
      <div className={cn("container", s.container)}>
        <h2>
          Our friends who <div>are looking for a house</div>
        </h2>
        <PaginationCards />
      </div>
    </section>
  );
};

export default Pagination;

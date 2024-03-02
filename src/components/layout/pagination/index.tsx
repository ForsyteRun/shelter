import PaginationCards from "./paginationCards";
import PaginationNavigation from "./paginationNavigation";
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
        <PaginationNavigation />
      </div>
    </section>
  );
};

export default Pagination;

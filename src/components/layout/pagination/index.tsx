import cn from "classnames";
import PaginationContent from "./paginationContent";
import s from "./styles.module.scss";

const Pagination = () => {
  return (
    <section className={s.wrapper}>
      <div className={cn("container", s.container)}>
        <h2>
          Our friends who <div>are looking for a house</div>
        </h2>
        <PaginationContent />
      </div>
    </section>
  );
};

export default Pagination;

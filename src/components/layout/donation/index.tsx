import donation from "@/assets/donation-dog.png";
import s from "./styles.module.scss";
import cn from "classnames";
import { card } from "@/assets/icons";

const Donation = () => {
  return (
    <div className={cn("container", s.container)}>
      <div className={s.imageWrapper}>
        <img src={donation} alt="donation-dog" />
      </div>
      <div className={s.content}>
        <h2 className={s.title}>
          You can also <span>make a donation</span>
        </h2>
        <h4>Name of the bank / Type of bank account</h4>
        <div className={s.donation}>
          <img src={card} alt="credit-card" />
          <span>8380 2880 8028 8791 7435</span>
        </div>
        <h5>
          Legal information and lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac
          diam. Praesent ultrices maximus tortor et vulputate. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </h5>
      </div>
    </div>
  );
};

export default Donation;

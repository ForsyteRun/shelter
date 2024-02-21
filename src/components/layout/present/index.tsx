import Button from "@/components/UI/button";
import s from "./styles.module.scss";
import puppy from "@/assets/start-screen-puppy.png";

const Present = () => {
  return (
    <section className={s.container}>
      <div className={s.content}>
        <h1>
          Not only people <span>need a house</span>
        </h1>
        <p>
          We offer to give a chance to a little and nice puppy with an extremely
          wide and open heart. He or she will love you more than anybody else in
          the world, you will see!
        </p>
        <Button title="Make a friend" styles={s.button} />
      </div>
      <div className={s.imgWrapper}>
        <img src={puppy} alt="dog" />
      </div>
    </section>
  );
};

export default Present;

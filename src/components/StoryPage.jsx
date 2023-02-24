import { useState } from "react";
import styles from "./StoryPage.module.css";

const StoryPage = () => {
  const [mouseDownAt, setMouseDownAt] = useState("");
  const [transform, setTransform] = useState("translate(0%, 30%)");

  window.onmousedown = (e) => {
    const position = `${e.clientX}`

    setMouseDownAt(position);
    console.log(e.clientX)

    window.onmousemove = (e) => {
      const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * 100;

      setTransform(`translate(${percentage}%, 30%)`);
    };
  };

  return (
    <section className={styles.storyPageSection}>
      <div id={styles.imageTrack} style={{ transform }}>
        <img
          className={styles.image}
          src="https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://images.dog.ceo/breeds/mountain-bernese/n02107683_1468.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://images.dog.ceo/breeds/samoyed/n02111889_7207.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://images.dog.ceo/breeds/mountain-bernese/n02107683_1468.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://images.dog.ceo/breeds/samoyed/n02111889_7207.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default StoryPage;

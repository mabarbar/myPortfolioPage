import styles from "./Home.module.css";
import Arrow from "./Arrow";
import { useState } from "react";

const Home = ({ executeScroll, goToSectionRef }) => {
  const [width, setWidth] = useState("");

  const handleOnMove = (e) => {
    setWidth(`${(e.clientX / window.innerWidth) * 100}%`);
  };

  return (
    <>
      <section
        className={styles.homeSection}
        onMouseMove={handleOnMove}
        onTouchMove={(e) => handleOnMove(e.touches[0])}
      >
        <div
          id={styles.leftSide}
          className={`${styles.side}`}
          style={{ width }}
        >
          <h1 className={styles.title}>
            <span className={styles.ordinary}>Mateusz Barzenc</span>{" "}
            <span className={styles.fancy}>inz architekt</span>
          </h1>
        </div>
        <div id={styles.rightSide} className={styles.side}>
          <h1 className={styles.title}>
            <span className={styles.ordinary}>Mateusz Barzenc</span>{" "}
            <span className={styles.fancy}>frontend dev</span>
          </h1>
        </div>
        <div className={styles.arrowContainer}>
          <Arrow
            executeScroll={executeScroll}
            goToSectionRef={goToSectionRef}
          />
        </div>
      </section>
    </>
  );
};

export default Home;

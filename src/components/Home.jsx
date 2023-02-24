import { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [width, setWidth] = useState("");

  const handleOnMove = (e) => {
    setWidth(`${(e.clientX / window.innerWidth) * 100}%`);
  };

  return (
    <section
      onMouseMove={(e) => handleOnMove(e)}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      className={styles.homeSection}
    >
      <div id={styles.leftSide} className={`${styles.side}`} style={{ width }}>
        <h1 className={styles.title}>
          Mateusz Barzenc <span className={styles.fancy}>inż architekt</span>
        </h1>
      </div>
      <div id={styles.rightSide} className={styles.side}>
        <h1 className={styles.title}>
          Mateusz Barzenc <span className={styles.fancy}>frontend dev</span>
        </h1>
      </div>
    </section>
  );
};

export default Home;

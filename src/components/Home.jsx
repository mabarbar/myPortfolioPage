import styles from "./Home.module.css";

const Home = ({ width, executeScroll, goToSectionRef }) => {
  return (
    <section
      className={styles.homeSection}
      onClick={() => executeScroll(goToSectionRef)}
    >
      <div id={styles.leftSide} className={`${styles.side}`} style={{ width }}>
        <h1 className={styles.title}>
          Mateusz Barzenc <span className={styles.fancy}>inz architekt</span>
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

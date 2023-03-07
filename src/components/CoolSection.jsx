import styles from "./CoolSection.module.css";

import Arrow from "./Arrow";

const CoolSection = ({ executeScroll, goToSectionRef, goToPrevSectionRef }) => {
  return (
    <section className={styles.coolSection} onClick={() => executeScroll()}>
      <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToPrevSectionRef}
        top={"205%"}
        rotate={"180deg"}
      />
      <div id={styles.tiles}></div>
      <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToSectionRef}
        top={"290%"}
      />
    </section>
  );
};

export default CoolSection;

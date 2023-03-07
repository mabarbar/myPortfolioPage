import styles from "./CoolSection.module.css";
import Arrow from "./Arrow";

const CoolSection = ({ executeScroll, goToSectionRef, goToPrevSectionRef }) => {
  let columns = Math.floor(document.body.clientWidth / 50);
  let rows = Math.floor(document.body.clientHeight / 50);

  return (
    <section className={styles.coolSection} onClick={() => executeScroll()}>
      {/* <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToPrevSectionRef}
        top={"205%"}
        rotate={"180deg"}
      /> */}
      
      <div id={styles.tiles}>{columns}</div>
      {/* <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToSectionRef}
        top={"290%"}
      /> */}
    </section>
  );
};

export default CoolSection;

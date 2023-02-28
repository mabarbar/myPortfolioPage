import styles from "./CoolSection.module.css";

const CoolSection = ({ executeScroll }) => {
  return (
    <section className={styles.coolSection} onClick={() => executeScroll()}>
      CoolSection
    </section>
  );
};

export default CoolSection;

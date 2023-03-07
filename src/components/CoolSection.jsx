import styles from "./CoolSection.module.css";
import Arrow from "./Arrow";
import CoolTile from "./CoolTile";
import Image from "./Image";
import { useEffect, useState } from "react";

const CoolSection = ({ executeScroll, goToSectionRef, goToPrevSectionRef }) => {
  const [columns, setColumns] = useState(
    Math.floor(document.body.clientWidth / 100)
  );
  const [rows, setRows] = useState(
    Math.floor(document.body.clientHeight / 100)
  );
  const [coolArray, setCoolArray] = useState(
    Array.from({ length: columns * rows }, (v, k) => k)
  );

  useEffect(() => {
    setColumns(Math.floor(document.body.clientWidth / 100));
    setRows(Math.floor(document.body.clientHeight / 100));
    setCoolArray(Array.from({ length: columns * rows }, (v, k) => k));
  }, [columns]);

  return (
    <section className={styles.coolSection} onClick={setColumns}>
      {/* <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToPrevSectionRef}
        top={"205%"}
        rotate={"180deg"}
      /> */}
      <div id={styles.tiles}>
        {coolArray.map((item) => (
          <CoolTile key={item.id} item={item.text} />
        ))}
      </div>
      {/* <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToSectionRef}
        top={"290%"}
      /> */}
    </section>
  );
};

export default CoolSection;

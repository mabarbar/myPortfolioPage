import styles from "./CoolSection.module.css";
import Arrow from "./Arrow";
import CoolTile from "./CoolTile";
import { useState } from "react";

const CoolSection = ({ executeScroll, goToSectionRef, goToPrevSectionRef }) => {
  const createTiles = (quantity) => {
    Array.from({ length: columnsNumber * rowsNumber }, (v, k) => k);
  };

  const [columnsNumber, setColumnsNumber] = useState(
    Math.floor(document.body.clientWidth / 100)
  );
  const [rowsNumber, setRowsNumber] = useState(
    Math.floor(document.body.clientHeight / 100)
  );
  const [gridTemplateColumns, setColumns] = useState(
    `repeat(${columnsNumber}, 1fr)`
  );
  const [gridTemplateRows, setRows] = useState(`repeat(${rowsNumber}, 1fr)`);
  const [coolArray, setCoolArray] = useState(
    Array.from({ length: columnsNumber * rowsNumber }, (v, k) => k)
  );

  const createGrid = () => {
    setColumnsNumber(Math.floor(document.body.clientWidth / 100));
    setRowsNumber(Math.floor(document.body.clientHeight / 100));
    setCoolArray(
      Array.from({ length: columnsNumber * rowsNumber }, (v, k) => k)
    );
    setColumns(`repeat(${columnsNumber}, 1fr)`);
    setRows(`repeat(${rowsNumber}, 1fr)`);
    console.log(coolArray);
  };

  window.onresize = createGrid;

  // useEffect(() => {
  //   createGrid();
  // }, []);

  return (
    <section className={styles.coolSection}>
      <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToPrevSectionRef}
        top={"205%"}
        rotate={"180deg"}
      />
      <div id={styles.tiles} style={{ gridTemplateRows, gridTemplateColumns }}>
        {coolArray.map((item) => (
          <CoolTile key={item} item={item} />
        ))}
      </div>
      <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToSectionRef}
        top={"290%"}
      />
    </section>
  );
};

export default CoolSection;

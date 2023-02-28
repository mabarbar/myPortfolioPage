import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Arrow.module.css";

const Arrow = ({ executeScroll, goToSectionRef, top, rotate }) => {
  return (
    <div
      className={styles.arrow}
      onClick={() => executeScroll(goToSectionRef)}
      style={{ top, rotate }}
    >
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );
};

export default Arrow;

import { useEffect, useState } from "react";
import styles from "./Image.module.css";

const Image = ({ item, percentage, id, changePargraphText }) => {
  // let objectPosition = `${100 + percentage}% center`;
  const [objectPosition, setObjectPosition] = useState("center center");

  useEffect(() => {
    setObjectPosition(`${100 + percentage}% center`);
  });

  return (
    <img
      className={styles.image}
      onClick={(e) => {
        changePargraphText(id);
      }}
      style={{ objectPosition }}
      src={item.url}
      alt=""
      draggable="false"
    />
  );
};

export default Image;

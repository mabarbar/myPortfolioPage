import { useEffect, useState } from "react";
import styles from "./Image.module.css";

const Image = ({ item, percentage, id, changePargraphText }) => {
  // let objectPosition = `${100 + percentage}% center`;
  const [objectPosition, setObjectPosition] = useState("center center");
  const [pressed, setPressed] = useState("scale(1)");

  useEffect(() => {
    setObjectPosition(`${100 + percentage}% center`);
  }, [percentage]);

  const handleMouseDown = (e) => {
    setPressed("scale(0.8)");
  };

  const handleMouseUp = (e) => {
    setPressed("scale(1)");
  };

  const handleMouseOver = (e) => {
    setPressed("scale(0.98)");
  };

  return (
    <img
      className={styles.image}
      onClick={(e) => {
        changePargraphText(id);
      }}
      onMouseDown={(e) => {
        handleMouseDown();
      }}
      onMouseUp={(e) => {
        handleMouseUp();
      }}
      onMouseLeave={(e) => {
        handleMouseUp();
      }}
      onMouseOver={(e) => {
        handleMouseOver();
      }}
      style={{ objectPosition, transform: `${pressed}` }}
      src={item.url}
      alt=""
      draggable="false"
    />
  );
};

export default Image;

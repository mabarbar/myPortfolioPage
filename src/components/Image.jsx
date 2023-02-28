import styles from "./Image.module.css";

const Image = ({ item, percentage }) => {
  let objectPosition = `${100 + percentage}% center`;
  return (
    <img
      className={styles.image}
      style={{ objectPosition }}
      src={item.url}
      alt=""
      draggable="false"
    />
  );
};

export default Image;

import styles from "./Image.module.css";

const Image = ({ item, percentage, id, changePargraphText }) => {
  let objectPosition = `${100 + percentage}% center`;
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

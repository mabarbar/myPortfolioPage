import styles from "./StoryPage.module.css";

const Image = ({ item }) => {
  return (
    <img className={styles.image} src={item.url} alt="" draggable="false" />
  );
};

export default Image;

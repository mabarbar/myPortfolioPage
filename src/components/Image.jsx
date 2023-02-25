import styles from "./StoryPage.module.css";

const Image = ({ item }) => {
  console.log(item);
  return (
    <img className={styles.image} src={`${item}`} alt="" draggable="false" />
  );
};

export default Image;

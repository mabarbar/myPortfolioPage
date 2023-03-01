import styles from "./HeaderStory.module.css";

const HeaderStory = ({ opacity, left, paragraphText }) => {
  return (
    <div className={styles.headerTrack} style={{ left }}>
      <h2 style={{ opacity }}>Krotka historia</h2>
      <p style={{ opacity }}>{paragraphText}</p>
    </div>
  );
};

export default HeaderStory;

import styles from "./CoolTile.module.css";


const CoolTile = ({ key, item }) => {
  return <div key={item} className={styles.tile}>{item}</div>;
};

export default CoolTile;

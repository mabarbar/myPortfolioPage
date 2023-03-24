import styles from "./HeaderStory.module.css";

const HeaderStory = ({ opacity, left, paragraphText }) => {
  return (
    <div className={styles.headerTrack} style={{ left }}>
      <h2 style={{ opacity }}>Krótka historia</h2>
      <p style={{ opacity }}>Samouk Front-end Developer z pasją do nauki nowych umiejętności i technologii. Absolwent Architektury, obecnie student Informatyki na Politechnice Lubelskiej. Projektowaniem stron internetowych i web developmentem zacząłem interesować się w 2020 roku. Z pomocą kreatywności, staram się tworzyć nowoczesne aplikacje, które oferują doświadczenia zorientowane ku użytkownikowi.</p>
    </div>
  );
};

export default HeaderStory;

import { useState } from "react";
import styles from "./StorySection.module.css";
import Image from "./Image";
import Arrow from "./Arrow";
import HeaderStory from "./HeaderStory";

import image1 from "../img/1.webp";
import image2 from "../img/2.webp";
import image3 from "../img/3.webp";
import image4 from "../img/4.webp";
import image5 from "../img/5.webp";

const StoryPage = ({ executeScroll, goToSectionRef, goToPrevSectionRef }) => {
  const [transform, setTransform] = useState("translate(0%, 30%)");
  const [opacity, setOpacity] = useState("1");
  const [percentage, setPercentage] = useState("");
  const [mouseDownAt, setMouseDownAt] = useState("0");
  const [prevPercentage, setPrevPercentage] = useState("0");
  const [text, setText] = useState("Nowonarodzony");

  const animateSlider = (e) => {
    if (mouseDownAt === "0") return;

    const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPercentage(nextPercentage);

    setTransform(`translate(${nextPercentage}%, 30%)`);
    setOpacity(`${1 + (nextPercentage * 2) / 100}`);

    // let picSlide = pictures.map((item) => item);
    // console.log(picSlide);

    for (const image of pictures) {
      image.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  const pictures = [
    {
      id: "1",
      url: image1,
      objectPosition: "100% 50%",
    },
    {
      id: "2",
      url: image2,
      objectPosition: "100% 50%",
    },
    {
      id: "3",
      url: image3,
      objectPosition: "100% 50%",
    },
    {
      id: "4",
      url: image4,
      objectPosition: "100% 50%",
    },
    {
      id: "5",
      url: image5,
      objectPosition: "100% 50%",
    },
  ];

  const changePargraphText = (id) => {
    switch (`${id}`) {
      case "1":
        setText(
          "Od kiedy odrosłem od ziemii, ciągnęło mnie do komputerów. Jak byłem mały, miałem ogromne szczęście mając młodych rodziców, którzy grali w gry. Dzięki temu mogłem obserwować jak zagrywali się w klasyki takie jak Heroesy, czy Warcraft :)"
        );
        break;
      case "2":
        setText(
          "Zmieniający się tekst po kliknięciu w obrazek: Podstawówka balti"
        );
        break;
      case "3":
        setText("Zmieniający się tekst po kliknięciu w obrazek: Liceum");
        break;
      case "4":
        setText(
          "Zmieniający się tekst po kliknięciu w obrazek: Rok temu pierwsze kroki w frontendzie"
        );
        break;
      case "5":
        setText("Zmieniający się tekst po kliknięciu w obrazek: Teraz");
        break;
      default:
        setText("Zmieniający się tekst po kliknięciu w obrazek: Nowonarodzony");
        break;
    }
  };

  const paragraphText =
    "Samouk Front-end Developer z pasją do nauki nowych umiejętności i technologii. Absolwent Architektury, obecnie student Informatyki na Politechnice Lubelskiej. Projektowaniem stron internetowych i web developmentem zacząłem interesować się w 2020 roku. Z pomocą kreatywności, staram się tworzyć nowoczesne aplikacje, które oferują doświadczenia zorientowane ku użytkownikowi.";

  return (
    <section
      className={styles.storyPageSection}
      onMouseDown={(e) => {
        setMouseDownAt(e.clientX);
      }}
      onMouseUp={() => {
        setMouseDownAt("0");
        setPrevPercentage(percentage);
      }}
      onMouseMove={animateSlider}
      onTouchMove={(e) => animateSlider(e.touches[0])}
    >
      <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToPrevSectionRef}
        top={"105%"}
        rotate={"180deg"}
      />
      <div id={styles.imageTrack} style={{ transform }}>
        <HeaderStory opacity={opacity} paragraphText={paragraphText} />
        {pictures.map((item) => (
          <Image
            key={item.id}
            id={item.id}
            item={item}
            percentage={percentage}
            changePargraphText={changePargraphText}
          />
        ))}
        <HeaderStory
          opacity={-opacity}
          left={"110%"}
          paragraphText={paragraphText}
        />
      </div>
      <p className={styles.storyParagraph}>{text}</p>
      <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToSectionRef}
        top={"190%"}
      />
    </section>
  );
};

export default StoryPage;

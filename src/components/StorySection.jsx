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
  const [text, setText] = useState(
    "Klikaj na zdjęcia, żeby mnie poznać bliżej! ;)"
  );

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
          "Od małego, ciągnęło mnie do komputerów. Miałem ogromne szczęście mając młodych rodziców, którzy grali w gry. Dzięki temu mogłem obserwować jak zagrywali się w klasyki takie jak Heroesy, czy Warcraft :)"
        );
        break;
      case "2":
        setText(
          "W roku 2019 przyszedł czas na wybór kierunku studiów. Po długich rozmyślaniach padło na architekturę, gdzie nauczyłem się wielu zagadnień, które jak po pewnym czasie stwierdziłem idealnie wpasowują się w wachlarz umiejętności Front-End Developera."
        );
        break;
      case "3":
        setText(
          "Programowania i Front-endu zacząłem się uczyć w czasach pandemii. Ze względu na ówczesne realia miałem mnóstwo czasu na naukę nowych zagadnień i właśnie wtedy stwierdziłem, że chcę się zajmować programowaniem."
        );
        break;
      case "4":
        setText(
          "W roku 2021 postanowiłem się zapisać na studia informatyczne, żeby rozszerzyć swoje horyzonty poza Front-end. Dlaczego? Lubię mieć szeroką wiedzę z dziedziny, z którą mam do czynienia na codzień :)"
        );
        break;
      case "5":
        setText(
          "W lutym 2023 skończyłem Architekturę, a obecnie szukam stażu, lub pracy żeby rozpocząć swoją komercyjną przygodę w IT. Jestem szczęśliwy, ze względu na perspektywę, że będę robił to co naprawdę lubię."
        );
        break;
      default:
        setText("defualt text");
        break;
    }
  };

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
        <HeaderStory opacity={opacity} />
        {pictures.map((item) => (
          <Image
            key={item.id}
            id={item.id}
            item={item}
            percentage={percentage}
            changePargraphText={changePargraphText}
          />
        ))}
        <HeaderStory opacity={-opacity} left={"110%"} />
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

import { useState } from "react";
import styles from "./StoryPage.module.css";
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

  window.onmousedown = (e) => {
    setMouseDownAt(e.clientX);
  };

  window.onmouseup = () => {
    setMouseDownAt("0");
    setPrevPercentage(percentage);
  };

  window.onmousemove = (e) => {
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
        setText("Zmieniający się tekst po kliknięciu w obrazek: Nowonarodzony");
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam sed sint id blanditiis ea ut, unde eligendi laborum veritatis maxime. Error iste recusandae similique voluptas eveniet velit natus totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam sed sint id blanditiis ea ut, unde eligendi laborum veritatis maxime. Error iste recusandae similique .";

  return (
    <section className={styles.storyPageSection}>
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

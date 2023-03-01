import { useState } from "react";
import styles from "./StoryPage.module.css";
import Image from "./Image";
import Arrow from "./Arrow";

import image2 from "../img/2.webp";
import image3 from "../img/3.webp";
import image4 from "../img/4.webp";
import image5 from "../img/5.webp";
import image6 from "../img/6.webp";

const StoryPage = ({ executeScroll, goToSectionRef, goToPrevSectionRef }) => {
  const [transform, setTransform] = useState("translate(0%, 30%)");
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

    // let picSlide = pictures.map((item) => item);
    // console.log(picSlide);

    for (const image of pictures) {
      image.objectPosition = `${100 + nextPercentage}% center`;
    }

    for (const image of pictures) {
      image.objectPosition = `${100 + nextPercentage}% center`;
    }
  };

  const pictures = [
    {
      id: "1",
      url: image6,
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
        setText("Nowonarodzony");
        break;
      case "2":
        setText("Podstawówka balti");
        break;
      case "3":
        setText("Liceum");
        break;
      case "4":
        setText("Rok temu pierwsze kroki w frontendzie");
        break;
      case "5":
        setText("Teraz");
        break;
      default:
        setText("Nowonarodzony");
        break;
    }
  };

  return (
    <section className={styles.storyPageSection}>
      <Arrow
        executeScroll={executeScroll}
        goToSectionRef={goToPrevSectionRef}
        top={"105%"}
        rotate={"180deg"}
      />
      <div id={styles.imageTrack} style={{ transform }}>
        {pictures.map((item) => (
          <Image
            key={item.id}
            id={item.id}
            item={item}
            percentage={percentage}
            changePargraphText={changePargraphText}
          />
        ))}
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

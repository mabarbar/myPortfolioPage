import { useState } from "react";
import styles from "./StoryPage.module.css";
import Image from "./Image";

import image2 from "../img/2.webp";
import image3 from "../img/3.webp";
import image4 from "../img/4.webp";
import image5 from "../img/5.webp";
import image6 from "../img/6.webp";

const StoryPage = ({ executeScroll, goToSectionRef }) => {
  const [transform, setTransform] = useState("translate(-50%, 30%)");
  const [percentage, setPercentage] = useState("");
  const [mouseDownAt, setMouseDownAt] = useState("0");
  const [prevPercentage, setPrevPercentage] = useState("-50");

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

  return (
    <section className={styles.storyPageSection}>
      <div id={styles.imageTrack} style={{ transform }}>
        {pictures.map((item) => (
          <Image key={item.id} item={item} percentage={percentage} />
        ))}
      </div>
      <p
        className={styles.storyParagraph}
        onClick={(e) => {
          e.stopPropagation();
          executeScroll(goToSectionRef);
        }}
      >
        Tutaj byłem mały
      </p>
    </section>
  );
};

export default StoryPage;

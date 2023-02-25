import { useState } from "react";
import styles from "./StoryPage.module.css";
import Image from "./Image";

const StoryPage = () => {
  const [transform, setTransform] = useState("translate(0%, 30%)");
  const [percentage, setPercentage] = useState("");
  const [mouseDownAt, setMouseDownAt] = useState("0");
  const [prevPercentage, setPrevPercentage] = useState("0");

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
    // Math.min(nextPercentage, 0);
    // Math.max(nextPercentage, -100);
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPercentage(nextPercentage);

    setTransform(`translate(${nextPercentage}%, 30%)`);

    // for (const image of track.getElementsByClassName("image")) {
    //   image.animate(
    //     {
    //       objectPosition: `${100 + nextPercentage}% center`,
    //     },
    //     { duration: 1200, fill: "forwards" }
    //   );
    // }
  };

  const pictures = [
    {
      url: "../img/6.webp",
      id: "6",
    },
    {
      url: "../img/3.webp",
      id: "3",
    },
    {
      url: "../img/6.webp",
      id: "6",
    },
    {
      url: "../img/3.webp",
      id: "3",
    },
    {
      url: "../img/6.webp",
      id: "6",
    },
    {
      url: "../img/3.webp",
      id: "3",
    },
  ];

  return (
    <section className={styles.storyPageSection}>
      <div id={styles.imageTrack} style={{ transform }}>
        {pictures.map((item) => (
          <Image key={item.id} item={item.url} />
        ))}
      </div>
    </section>
  );
};

export default StoryPage;

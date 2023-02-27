import { useState } from "react";
import styles from "./StoryPage.module.css";
import Image from "./Image";

import image1 from "../img/3.webp";
import image2 from "../img/2.webp";
import image3 from "../img/3.webp";
import image4 from "../img/4.webp";
import image5 from "../img/5.webp";
import image6 from "../img/6.webp";

const StoryPage = ({ myRef }) => {
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
      id: "1",
      url: image1,
    },
    {
      id: "2",
      url: image2,
    },
    {
      id: "3",
      url: image3,
    },
    {
      id: "4",
      url: image4,
    },
    {
      id: "5",
      url: image5,
    },
    {
      id: "6",
      url: image6,
    },
  ];

  return (
    <section className={styles.storyPageSection} ref={myRef}>
      <div id={styles.imageTrack} style={{ transform }}>
        {pictures.map((item) => (
          <Image key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default StoryPage;

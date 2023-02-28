import { useState, useRef } from "react";
import Home from "./components/Home";
import StoryPage from "./components/StoryPage";
import CoolSection from "./components/CoolSection";
import "./App.css";
// import ContactPage from "./components/ContactPage";

function App() {
  const [width, setWidth] = useState("");

  const homeRef = useRef();
  const storyPageRef = useRef();
  const coolSectionRef = useRef();

  const handleOnMove = (e) => {
    setWidth(`${(e.clientX / window.innerWidth) * 100}%`);
  };

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <div
      className="App"
      onMouseMove={(e) => handleOnMove(e)}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
    >
      <div ref={homeRef}>
        <Home
          width={width}
          executeScroll={executeScroll}
          goToSectionRef={storyPageRef}
        />
      </div>
      <div ref={storyPageRef}>
        <StoryPage
          executeScroll={executeScroll}
          goToSectionRef={coolSectionRef}
        />
      </div>
      <div ref={coolSectionRef}>
        <CoolSection executeScroll={executeScroll} />
      </div>
      {/* <ContactPage /> */}
    </div>
  );
}

export default App;

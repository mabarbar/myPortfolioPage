import { useState, useRef } from "react";
import Home from "./components/Home";
import StoryPage from "./components/StoryPage";
import CoolSection from "./components/CoolSection";
import "./App.css";
// import ContactPage from "./components/ContactPage";

function App() {
  const homeRef = useRef();
  const storyPageRef = useRef();
  const coolSectionRef = useRef();

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({
      behavior: "smooth",
    });

  const [transform, setTransform] = useState("");

  const cursorFunction = (e) => {
    setTransform(`translate3d(${e.clientX}px, ${e.clientY}px, 0)`);
  };

  return (
    <>
      <div className="cursor" style={{ transform }}></div>
      <div className="App" onMouseMove={cursorFunction}>
        <div ref={homeRef}>
          <Home executeScroll={executeScroll} goToSectionRef={storyPageRef} />
        </div>
        <div ref={storyPageRef}>
          <StoryPage
            executeScroll={executeScroll}
            goToSectionRef={coolSectionRef}
            goToPrevSectionRef={homeRef}
          />
        </div>
        <div ref={coolSectionRef}>
          <CoolSection
            executeScroll={executeScroll}
            goToSectionRef={homeRef}
            goToPrevSectionRef={storyPageRef}
          />
        </div>
        {/* <ContactPage /> */}
      </div>
    </>
  );
}

export default App;

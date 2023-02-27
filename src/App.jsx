import { useState, useRef } from "react";
import Home from "./components/Home";
import StoryPage from "./components/StoryPage";
import styles from "./App.css";
// import CoolSection from "./components/CoolSection";
// import ContactPage from "./components/ContactPage";

function App() {
  const [width, setWidth] = useState("");

  const handleOnMove = (e) => {
    setWidth(`${(e.clientX / window.innerWidth) * 100}%`);
  };

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div
      className="App"
      onMouseMove={(e) => handleOnMove(e)}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
    >
      <Home width={width} executeScroll={executeScroll} />
      <StoryPage myRef={myRef} />
      {/* <CoolSection />
      <ContactPage /> */}
    </div>
  );
}

export default App;

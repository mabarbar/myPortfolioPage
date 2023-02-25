import { useState } from "react";
import Home from "./components/Home";
import StoryPage from "./components/StoryPage";
// import CoolSection from "./components/CoolSection";
// import ContactPage from "./components/ContactPage";

function App() {
  const [width, setWidth] = useState("");

  const handleOnMove = (e) => {
    setWidth(`${(e.clientX / window.innerWidth) * 100}%`);
  };

  return (
    <div
      className="App"
      onMouseMove={(e) => handleOnMove(e)}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
    >
      <Home width={width} />
      <StoryPage />
      {/* <CoolSection />
      <ContactPage /> */}
    </div>
  );
}

export default App;

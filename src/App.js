import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Home from "./components/Home";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setselectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setselectedPage={setselectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setselectedPage={setselectedPage}
          />
        )}
        <Home />
      </div>
    </div>
  );
}

export default App;

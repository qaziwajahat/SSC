// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import FAQ from "./components/FAQ/Roadmap";
import Team from "./components/Team/Team";
import Roadmap from "./components/Roadmap/Roadmap";
import { useState} from "react";
// import Buy from "./components/Buynow/Buy.jsx";

function App() {
  const [connecctstatus, setConnectedstatus] = useState(false);

  return (
    <>
      <Navbar />
      <Home />
      {/* <Buy
        connecctstatus={connecctstatus}
        setConnectedstatus={setConnectedstatus}
      /> */}
      <Roadmap/>
      <About />
      <Team />
      <FAQ />

    </>
  );
}

export default App;

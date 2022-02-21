import Navbar from "./components/Navbar.js";

import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./screen/MainScreen.js";
import Speechconvert from "./screen/Speechconvert.js";
import AboutScreen from "./screen/AboutScreen.js";
import PriceScreen from "./screen/PriceScreen.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<MainScreen />} />
          </Routes>
          <Routes>
            <Route path="/speechconvert" element={<Speechconvert />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
          <Routes>
            <Route path="/pricing" element={<PriceScreen />} />
          </Routes>

        </div>
        <Footer />

      </div>
    </Router>

  );
}

export default App;

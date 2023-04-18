import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/home/home";
import { ParallaxProvider } from "react-scroll-parallax";
import Test from "../src/pages/home/test";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;

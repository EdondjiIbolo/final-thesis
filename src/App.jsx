import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { ManCollection } from "./components/ManCollection";
import { WomenCollection } from "./components/WomenCollection";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<ManCollection />} />
      <Route path="/women" element={<WomenCollection />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

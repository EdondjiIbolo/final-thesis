import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { ManCollection } from "./components/ManCollection";
import { WomenCollection } from "./components/WomenCollection";
import { About } from "./components/About";
import { Detail } from "./components/Detail";
import { Setting } from "./components/Setting";
import { Login, Signin } from "./components/Login";
import ProcessOrder from "./components/ProcessOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<ManCollection />} />
      <Route path="/women" element={<WomenCollection />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/check-out" element={<ProcessOrder />} />
    </Routes>
  );
}

export default App;

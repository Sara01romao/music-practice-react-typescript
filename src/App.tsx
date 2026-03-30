import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Exercises } from "./pages/Exercises/Exercises";
import "./App.css";
import { Menu } from "./components/Menu";
import Chords from "./pages/Chords/Chords";
import MetronomePage from "./pages/Metronome/Metronome";
import logo from "./assets/ms-logo.svg"

export function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <div className="flex justify-center w-full p-4">
          <img src={logo} alt="" className="flex mx-auto max-w-[100px]" />
        </div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metronome" element={<MetronomePage />} />
          <Route path="/chords/:type" element={<Chords />} />
          <Route path="/exercise/:type/:id" element={<Exercises />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

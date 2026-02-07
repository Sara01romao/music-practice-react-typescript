
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Exercises } from './pages/exercises/Exercises';
import { Header } from './components/Header';
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  );
}
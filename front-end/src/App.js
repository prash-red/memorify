import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from './pages/Landing';
import { Journal } from './pages/Journal';
import { Album } from './pages/Album';
import { Characters } from './pages/Characters';
import { Gallery } from './pages/Gallery';
import {Login} from "./pages/Login";
import {Signup} from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/album" element={<Album />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

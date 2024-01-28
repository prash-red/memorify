import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from './pages/Landing';
import { Journal } from './pages/Journal';
import { Album } from './pages/Album';
import { Loading } from './pages/Loading';
import { Gallery } from './pages/Gallery';
import {Login} from "./pages/Login";
import {Signup} from "./pages/Signup";
import {Read} from "./pages/Read";
import {Contacts} from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
              <Route path="/read" element={<Read />} />
              <Route path="/contacts" element={<Contacts />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/album" element={<Album />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'semantic-ui-css/semantic.min.css';

//import page content
import Home from "./routes/Home";
import Project from "./routes/Project";
import Education from "./routes/Education";
import Skill from "./routes/Skill";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

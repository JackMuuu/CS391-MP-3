import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Credits from './components/Credits/Credits';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';


function App() {
  const [showCredits, setShowCredits] = useState(false);
  const handleCreditsClick = () => {
    setShowCredits((prev) => !prev);
  };  

  return (
    <Router>
      <div className="appContainer">
        <Header />
        <div className="mainContent">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
        <Footer onCreditsClick={handleCreditsClick} />
      </div>
    </Router>
  )
}

export default App

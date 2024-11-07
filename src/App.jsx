import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import MovienightDetail from "./components/Projects/MovieNight/MovienightDetail";
import VaukazimutDetail from "./components/Projects/Vaukazimut/VaukazimutDetail";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import { MantineProvider } from '@mantine/core';
import './i18n/i18n';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MantineProvider 
    theme={{
      fontFamily: 'Ubuntu, sans-serif', 
      headings: { fontFamily: 'Ubuntu, sans-serif' }, 
    }}
    withGlobalStyles withNormalizeCSS>
      <Router>
        {/* <Preloader load={load} /> */}
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          {/* <ScrollToTop /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/project/movienight" element={<MovienightDetail />} />
            <Route path="/project/vaukazimut" element={<VaukazimutDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
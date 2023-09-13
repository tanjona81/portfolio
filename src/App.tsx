import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
      <div className="flex items-center flex-col justify-center bg-slate-900 gap-2 overflow-hidden">
        <Navbar/>
        {/* <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/Home' Component={Home}></Route>
          <Route path='/Skills' Component={Skills}></Route>
        </Routes> */}
        <Home/>
        <About/>
        <Resume/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
  );
}

export default App;

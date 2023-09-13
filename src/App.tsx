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
        <Home/>
        <About/>
        <Resume/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;

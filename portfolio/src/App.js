// import logo from './logo.svg';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Dreams from './components/Dreams';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />  {/* Ensure Navbar is used here */}
      <About />
      <Projects />
      <Dreams />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

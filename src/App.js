import Navigation from "./components/Navigation"
import Home from "./components/Home";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Top from "./components/Scrolltop";
import "./components/about.css";
function App() {
  return (
    <div>
      <Top />
      <Navigation />
      <Home />
      <Services />
      <Skills />
      <Contact />
    </div>

  );
}

export default App;

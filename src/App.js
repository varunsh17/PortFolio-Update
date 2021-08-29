import Navigation from "./components/Navigation"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Top from "./components/Scrolltop";
function App() {
  return (
    <div>
      <Top />
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
    </div>

  );
}

export default App;

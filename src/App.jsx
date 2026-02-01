/* import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Ideas from "./components/Ideas";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
function App() {
    return (
        <>
        <Navbar />
        <About />
        <Contact />
        <Ideas />
        <Projects />
        <Resume />
        <Skills />
        </>
    );
}
export default App   */ 

/* function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>React is working ✅</h1>
      <p>If you see this, the problem is in a component.</p>
    </div>
  );
}

export default App; */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Ideas from "./components/Ideas";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Ideas />
      <Projects />
      <Skills />
      {/* bottom CTA */}
      <section id="contact">
        <div className="contact-resume">
          <Contact />
          <Resume />
        </div>
      </section>
    </>
  );
}

export default App;

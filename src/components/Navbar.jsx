import { useEffect, useState } from "react";
function Navbar() {
  const [active, setActive ] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section )=> observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo">Logo</div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#ideas">Ideas</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
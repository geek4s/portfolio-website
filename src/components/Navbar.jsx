function Navbar() {
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
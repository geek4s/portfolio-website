function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                {/*Left: Text */}
                <div className="hero-text">
                    <h1>
                        Hi, I'm <span className="highlight">Nishitha</span>
                    </h1>
                    <p className="hero-subtext">
                        I explore the intersection of <strong>Computer Science</strong>,
                        <strong> Law</strong>, and how systems shape real lives.
                    </p>
                    <p className="hero-note">
                        Scroll to see what I've been building ↓
                    </p>
                </div>
                {/* Right: Image/ Illustration */}
                <div className="hero-visual">
                    {/* replace later with your image */}
                    <div className ="hero-avatar"></div>
                </div>
            </div>
        </section>
    )
}
export default Hero;
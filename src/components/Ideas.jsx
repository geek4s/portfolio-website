
function Ideas() {
    return (
        <section id="ideas" className="ideas-section">
            <h2>Ideas I'm Exploring</h2>
            <div className="ideas-grid">
                <div className="idea-card">
                    <h3>🖥️ Computer Science</h3>
                    <ul>
                        <li>Data Structures</li>
                        <li>Web development</li>
                        <li>Operating Systems</li>
                        <li>System Design basics</li>
                    </ul>
                </div>
                <div className="idea-card">
                    <h3>⚖️ Law</h3> 
                    <ul> 
                        <li>Contract fundamentals</li>
                        <li>Property & Ownership</li>
                        <li>Legal Reasoning</li>
                    </ul>
                </div>
            </div>
            <div className="idea-card">
                <h3>‼️ Law x CS</h3>
                <ul>
                    <li>AI Ethics & Regulation </li>
                    <li>Data Privacy</li>
                    <li>Legal Tech</li>
                </ul>
            </div>
            <div className="idea-card">
                <h3>🌎 General Topics</h3>
                <ul>
                    <li>Geopolitcs</li>
                    <li>Psychology</li>
                    <li>Study Notes</li>
                </ul>
            </div>
        </section>
    );
}
export default Ideas;
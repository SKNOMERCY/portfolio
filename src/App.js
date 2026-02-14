import "./App.css";

function App() {
  return (
    <div className="container">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Kavin SK</h1>
        <h2>CSE Student | Full Stack Developer</h2>
        <p>Building real-world tools to solve student productivity problems.</p>

        <div className="buttons">
          <a href="https://your-live-app-link.com" target="_blank">Live Project</a>
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="section">
        <h2>CampusPulse — AI Event Discovery Platform</h2>

        <h3>Problem</h3>
        <p>
          Students miss campus opportunities because event information is scattered across multiple platforms.
        </p>

        <h3>Solution</h3>
        <p>
          CampusPulse centralizes and recommends relevant campus events based on student interests.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Smart event filtering</li>
          <li>Domain-based recommendations</li>
          <li>Real-time event listing</li>
          <li>REST API backend</li>
        </ul>

        <h3>Tech Stack</h3>
        <p>React | Flask | REST API | JSON DB | GitHub Pages</p>

        <div className="buttons">
          <a href="https://your-live-app-link.com" target="_blank">View Live App</a>
          <a href="https://github.com/your-repo" target="_blank">View GitHub</a>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="section">
        <h2>Project Screenshots</h2>
        <div className="images">
          <img src="/img1.png" alt="Homepage" />
          <img src="/img2.png" alt="Events" />
          <img src="/img3.png" alt="API" />
        </div>
      </section>

      {/* DEPLOYMENT EXPERIENCE */}
      <section className="section">
        <h2>Deployment Experience</h2>
        <p>
          This project was deployed as a live full-stack application to demonstrate real-world usability.
          Deployment involved configuring frontend hosting, backend API routing, and optimizing load performance.
        </p>
      </section>

      {/* DEMO VIDEO */}
      <section className="section">
        <h2>Demo Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Demo Video"
          allowFullScreen
        ></iframe>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: yourmail@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
        <p>GitHub: github.com/yourusername</p>
      </section>

    </div>
  );
}

export default App;

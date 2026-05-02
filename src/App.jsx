import "./App.css";
import Navbar from "./component/Navbar.jsx";
function App() {
  return (
    <div className="container">
      <img id="bg" src="./bg.jpg" alt="background-image" />
      <Navbar />
      <div className="slides">
        <div id="home">
          <div className="profile">
            <img
              id="profile-pic"
              src="./profile-pic.png"
              alt="profile picture"
            />
          </div>
          <div className="intro">
            <h2>Hey There,</h2>
            <h1>I’m Gaurav Gautam (FallenSid)</h1>
            <h1>
              I build <span>modern websites</span> that help{" "}
              <span>businesses</span> attract more <span>customers</span>.
            </h1>
            <h2>
              Fast, responsive, and designed to turn visitors into real clients.
            </h2>
          </div>
        </div>
        <div className="page" id="about">
          <div className="section about-container">
            <div className="about-text">
              <h1>About Me</h1>
              <div className="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(40, 79, 255)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-icon lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <h2> Who I Am</h2>
              </div>
              <p>
                I’m Gaurav Gautam (FallenSid), a pharmacy student and web
                developer who enjoys building modern, responsive websites that
                actually make a difference.
              </p>
              <br />
              <div className="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(40, 79, 255)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-code-xml-icon lucide-code-xml"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
                <h2>What I Do</h2>
              </div>
              <p>
                I started with HTML, CSS, and JavaScript, and now work with
                React and Node.js to build practical, real-world web
                applications.
              </p>
              <br />
              <div className="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(40, 79, 255)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-goal-icon lucide-goal"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                </svg>
                <h2>My Focus</h2>
              </div>
              <p>
                I focus on creating clean, user-friendly websites that help
                businesses attract and convert customers online.
              </p>
              <br />
              <div className="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(40, 79, 255)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-goal-icon lucide-goal"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                  <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                </svg>
                <h2>My Approach</h2>
              </div>
              <p>
                I believe in keeping things simple — fast delivery, clean
                design, and solutions that actually work.
              </p>
            </div>
            <div className="stats">
              <img id="stat-pic" src="./profile-pic.png" alt="" />
              <h3 id="stat-heading" >Quick Stats</h3>
              <div className="card">
                <div className="icon">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z"
                      fill="rgb(40, 79, 255)"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p>Projects Built</p>
                  <h3>4+</h3>
                </div>
              </div>


              <div className="card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(40, 79, 255)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-code-xml-icon lucide-code-xml"
                  >
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </div>
                <div>
                  <p>Technologies</p>
                <h3>
                  React, Node.js,  JS
                </h3>
                </div>
              </div>


              <div className="card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(40, 79, 255)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-rocket-icon lucide-rocket"
                  >
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
                  </svg>
                </div>
                <div>

                <p>Focus</p>
                <h3>
                Clean UI & Fast Delivery
                </h3>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(40, 79, 255)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-star-icon lucide-star"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                </div>
                <div>
                  
                <p>Approach</p>
                <h3>Practical & Reliable Solutions</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page" id="projects">
          <div className="section projects-container">
            <h1>projects</h1>
          </div>
        </div>
        <div className="page" id="contact">
          <div className="section contact-container">
            <h1>contacts</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

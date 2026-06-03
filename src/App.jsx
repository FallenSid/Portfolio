import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Contact from './component/ContactUs.jsx'
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
              <h1 className="heading-line" >About Me</h1>
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
              <h3 id="stat-heading">Quick Stats</h3>
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
                  <h3>React, Node.js, JS</h3>
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
                  <h3>Clean UI & Fast Delivery</h3>
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
            <h1 className="heading-line">Projects</h1>
            <div id="emp-1" className="empty"></div>
            <div id="epm-2" className="empty"></div>

            <div className="project-card">
              <div className="project-image">
                <img
                  className="pro-img"
                  src="./portfolio.jpg"
                  alt="project-image"
                />
              </div>
              <div className="project-desc">
                <div className="project-icon">
                  <svg
                    id="portfolio"
                    width="28px"
                    height="28px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z"
                      fill="rgb(40, 79, 255)"
                    ></path>
                  </svg>
                  <h3>Modern Developer Portfolio Website</h3>
                </div>
                <p>
                  A clean and responsive portfolio template built to showcase
                  projects, skills, and personal branding in a professional and
                  engaging way.
                </p>
                <hr />
                <div className="tools">
                  <div className="tool port-color">React</div>
                  <div className="tool port-color">CSS</div>
                  <div className="tool port-color">Js</div>
                </div>
              </div>
              <div className="project-button">
                {/* <button className="btn live-btn">Live Demo</button> */}
                <a className="btn live-btn" href="https://fallensidportfolio.vercel.app/">Live Demo</a>
                <a className="btn git-btn" href="https://github.com/FallenSid/Portfolio">Code</a>
                {/* <button className="btn git-btn">Code</button> */}
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  className="pro-img"
                  src="./ashvatha.jpg"
                  alt="project-image"
                />
              </div>
              <div className="project-desc">
                <div className="project-icon">
                  <svg
                    id="ashvatha"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-swords-icon lucide-swords"
                  >
                    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
                    <line x1="13" x2="19" y1="19" y2="13" />
                    <line x1="16" x2="20" y1="16" y2="20" />
                    <line x1="19" x2="21" y1="21" y2="19" />
                    <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
                    <line x1="5" x2="9" y1="14" y2="18" />
                    <line x1="7" x2="4" y1="17" y2="20" />
                    <line x1="3" x2="5" y1="19" y2="21" />
                  </svg>
                  <h3>Ashvathha Web Novel Website</h3>
                </div>
                <p>
                  A modern web platform designed to showcase the Ashvatha web
                  novel with an organized structure for volumes and characters.
                </p>
                <hr />
                <div className="tools">
                  <div className="tool ashva-color">React</div>
                  <div className="tool ashva-color">CSS</div>
                  <div className="tool ashva-color">Js</div>
                </div>
              </div>
              <div className="project-button">
                {/* <button className="btn live-btn">Live Demo</button> */}
                {/* <button className="btn git-btn">Code</button> */}
                <a className="btn live-btn" href="https://the-ashvathha.vercel.app/">Live Demo</a>
                <a className="btn git-btn" href="https://github.com/FallenSid/Ashvatha-NodeJs-">Code</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  className="pro-img"
                  src="./herbodent.jpg"
                  alt="project-image"
                />
              </div>
              <div className="project-desc">
                <div className="project-icon">
                  <svg
                    id="herbodent"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-leaf-icon lucide-leaf"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                  <h3>Website for Herbal Toothpaste recommendation</h3>
                </div>
                <p>
                  Suggests the best herbal toothpaste based on user symptoms for
                  better oral care decisions.
                </p>
                <hr />
                <div className="tools">
                  <div className="tool herbo-color">React</div>
                  <div className="tool herbo-color">CSS</div>
                  <div className="tool herbo-color">Js</div>
                </div>
              </div>
              <div className="project-button">
                {/* <button className="btn live-btn">Live Demo</button> */}
                {/* <button className="btn git-btn">Code</button> */}
                <a className="btn live-btn" href="https://herbo-dent.vercel.app/">Live Demo</a>
                <a className="btn git-btn" href="https://github.com/FallenSid/HerboDent">Code</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  className="pro-img"
                  src="./birthday.jpg"
                  alt="project-image"
                />
              </div>
              <div className="project-desc">
                <div className="project-icon">
                  <svg
                    id="birthday"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-cake-icon lucide-cake"
                  >
                    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                    <path d="M2 21h20" />
                    <path d="M7 8v3" />
                    <path d="M12 8v3" />
                    <path d="M17 8v3" />
                    <path d="M7 4h.01" />
                    <path d="M12 4h.01" />
                    <path d="M17 4h.01" />
                  </svg>
                  <h3>Personalized Birthday Website</h3>
                </div>
                <p>
                  A customizable website designed to create and share memorable
                  birthday experiences with messages, and interactive elements.
                </p>
                <hr />
                <div className="tools">
                  <div className="tool birth-color">React</div>
                  <div className="tool birth-color">CSS</div>
                  <div className="tool birth-color">Js</div>
                </div>
              </div>
              <div className="project-button">
                {/* <button className="btn live-btn">Live Demo</button> */}
                {/* <button className="btn git-btn">Code</button> */}
                <a className="btn live-btn" href="https://birthday-website-for-mehak.vercel.app/">Live Demo</a>
                <a className="btn git-btn" href="https://github.com/FallenSid/Birthday-website-temp">Code</a>
              </div>
            </div>
          </div>
        </div>

        <div className="page" id="contact">
          <h1 id="Contact-heading" className="heading-line" >Contact</h1>
          <div className="section contact-container">
            <div className="main-contact">
              <h4>GET IN TOUCH</h4> <br />
              <h2>Let's Work Together</h2> <br />
              <p>Have a project in mind or just want to say hey?</p>
              <p>Feel free to reach out. I usually reply within a few hours.</p>
              <br />

              <div className="contact-button">
                <div className="whatsapp contact-link">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
</svg>
                <a href="https://wa.me/918081964829?text=Hi%20Gaurav,%20I%20saw%20your%20portfolio%20and%20want%20a%20website">
                  Chat on WhatsApp
                </a>
                </div>
                <div className="email contact-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                <a href="mailto:gauravgautam61259@gmail.com">Send Email</a>
                </div>
              </div>
            </div>
              <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

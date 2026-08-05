import "./App.css";
import { useEffect } from "react";
import Navbar from "./component/Navbar.jsx";
import Contact from './component/ContactUs.jsx'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".scroll-reveal",
        { y: 70, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.utils.toArray(".section-reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 80, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      gsap.fromTo(
        ".skill-category",
        { y: 80, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: "#skills",
            start: "top 72%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        ".project-card",
        { y: 80, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: "#projects",
            start: "top 72%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const projectsData = [
    {
      id: "creatrix-card",
      title: "Landing page for Creatrix",
      desc: "A modern landing page for a start up to display their progress and improve online visiblity.",
      imgSrc: "./creatrix.png",
      tools: ["NextJs", "Tailwind CSS", "Framer motion"],
      colorClass: "creatrix-color",
      liveLink: "https://creatrix106.vercel.app/",
      gitLink: "https://github.com/FallenSid/Creatrix",
      icon: "💻"
    },
    {
      id: "ashvathha-card",
      title: "Ashvathha Web Novel Website",
      desc: "A modern web platform designed to showcase the Ashvatha web novel with an organized structure for volumes and characters.",
      imgSrc: "./ashvatha.png",
      tools: ["NextJs", "Tailwind CSS", "Framer motion"],
      colorClass: "ashva-color",
      liveLink: "https://the-ashvathha.vercel.app/",
      gitLink: "https://github.com/FallenSid/The-Ashvatha",
      icon: "⚔️"
    },
    {
      id: "gym-card",
      title: "Apex Gym & Fitness Website Template",
      desc: "A sleek and high-performance website template, specifically designed to showcase gym facilities, programs, testimonials, plans and contacts.",
      imgSrc: "./gym-temp.jpg",
      tools: ["React", "CSS", "Js"],
      colorClass: "port-color",
      liveLink: "https://fallensidportfolio.vercel.app/",
      gitLink: "https://github.com/FallenSid/Portfolio",
      // To keep the code perfectly clean, consider using a library like lucide-react instead of raw SVGs!
      icon: "🏋️" // Replaced raw SVG with emoji for brevity in this example, but you can pass the SVG component here.
    },
    {
      id: "portfolio-card",
      title: "Modern Developer Portfolio Website",
      desc: "A clean and responsive portfolio template built to showcase projects, skills, and personal branding in a professional and engaging way.",
      imgSrc: "./portfolio.jpg",
      tools: ["React", "CSS", "Js"],
      colorClass: "port-color",
      liveLink: "https://fallensidportfolio.vercel.app/",
      gitLink: "https://github.com/FallenSid/Portfolio",
      icon: "💻"
    },
    
    {
      id: "herbodent-card",
      title: "Website for Herbal Toothpaste recommendation",
      desc: "Suggests the best herbal toothpaste based on user symptoms for better oral care decisions.",
      imgSrc: "./herbodent.jpg",
      tools: ["React", "CSS", "Js"],
      colorClass: "herbo-color",
      liveLink: "https://herbo-dent.vercel.app/",
      gitLink: "https://github.com/FallenSid/HerboDent",
      icon: "🌿"
    }
  ];

  const skills = [
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs"
      ]
    },
    {
      title: "Programming",
      skills: [
        "JavaScript",
        "Python"
      ]
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Render",
        "Firebase"
      ]
    }
  ];
  return (
    <div className="container">
      <img id="bg" src="./bg.jpg" alt="background-image" />
      <Navbar />
      <div className="slides">
        <div id="home">
          <div className="profile scroll-reveal">
            <img
              id="profile-pic"
              src="./profile-pic.png"
              alt="profile picture"
            />
          </div>
          <div className="intro scroll-reveal">
            <h2>Hey There,</h2>
            <h1>I’m Gaurav Gautam (FallenSid)</h1>
            <h1>
              I build <span>modern web applications</span> and
              <span> AI-powered solutions</span>.
            </h1>

            <h2>
              Pharmacy Student • Full Stack Developer • Problem Solver
            </h2>

            <p>
              Passionate about creating clean, responsive websites and healthcare
              solutions that make a real impact.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>

              <a href="/GauravGautam.pdf" className="secondary-btn">
                Download Resume
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/FallenSid" target="_blank"><svg fill="#000000" width="50px" height="50px" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"></path></g></svg></a>
              <a href="#"><svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#0F0F0F"></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#0F0F0F"></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg></a>
              <a href="mailto:gauravgautam61259@gmail.com"><svg fill="#000000" width="50px" height="650x" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>gmail</title> <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path> </g></svg></a>
            </div>
          </div>

        </div>
        <div className="" id="about">
          <div className="section about-container page section-reveal">
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

        <div id="skills">
          <h1 className="heading-line section-reveal">Skills</h1>

          <div className="skills-container page">
            {skills.map((category) => (
              <div className="skill-category" key={category.title}>
                <h2>{category.title}</h2>

                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <div className="skill-tag" key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="projects">
          <h1 className="heading-line section-reveal">Projects</h1>
          <div className="section projects-container page">
            {projectsData.map((project) => (
              <div className="project-card" id={project.id} key={project.id}>

                <div className="project-image">
                  <img className="pro-img" src={project.imgSrc} alt={`${project.title} screenshot`} />
                </div>

                <div className="project-desc">
                  <div className="project-icon">
                    <span style={{ fontSize: '28px' }}>{project.icon}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.desc}</p>
                  <hr />

                  <div className="tools">
                    {project.tools.map((tool, index) => (
                      <div key={index} className={`tool ${project.colorClass}`}>{tool}</div>
                    ))}
                  </div>
                </div>

                <div className="project-button">
                  <a className="btn live-btn" href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a className="btn git-btn" href={project.gitLink} target="_blank" rel="noopener noreferrer">Code</a>
                </div>

              </div>
            ))}
          </div>
        </div>
        <div id="contact">
          <div className="section contact-container page section-reveal">
            <div className="main-contact">
              <h1 id="Contact-heading" className="heading-line" >Contact</h1>
              <h4>GET IN TOUCH</h4>
              <h2>Let's Work Together</h2>
              <p>Have a project in mind or just want to say hey?</p>
              <p>Feel free to reach out. I usually reply within a few hours.</p>

              <div className="contact-details">
                <div className="contact-detail">
                  <Mail size={20} />
                  <span>gauravgautam61259@gmail.com</span>
                </div>
                <div className="contact-detail">
                  <Phone size={20} />
                  <span>Available for freelance work</span>
                </div>
                <div className="contact-detail">
                  <MapPin size={20} />
                  <span>India</span>
                </div>
              </div>

              <div className="contact-button">
                <div className="whatsapp contact-link">
                  <MessageCircle size={22} />
                  <a href="https://wa.me/918081964829?text=Hi%20Gaurav,%20I%20saw%20your%20portfolio%20and%20want%20a%20website">
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="email contact-link">
                  <Mail size={22} />
                  <a href="mailto:gauravgautam61259@gmail.com">Send Email</a>
                </div>
              </div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

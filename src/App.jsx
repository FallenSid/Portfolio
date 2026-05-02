
import './App.css'
import Navbar from './component/Navbar.jsx'
function App() {

  return (
   <div className="container">
    <img id='bg' src="./bg.jpg" alt="background-image" />
    <Navbar/>
    <div id="home">
      <div className="intro">
        <h2>Hey There,</h2>
        <h1>I’m Gaurav Gautam (FallenSid)</h1>
        <h1>I build <span>modern websites</span> that help <span>businesses</span> attract more <span>customers</span>.</h1>
        <h2>Fast, responsive, and designed to turn visitors into real clients.</h2>
      </div>
      <div className="profile">
        <img id='profile-pic' src="./profile-pic.png" alt="profile picture" />
      </div>
    </div>
    <div id="about">
      this is about section
    </div>
   </div>
  )
}

export default App

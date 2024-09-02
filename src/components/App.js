import React from 'react';
import './App.css';
import img1 from '../../src/assets/download.jpeg';
import img2 from '../../src/assets/images.jpeg';
import img3 from '../../src/assets/images (1).jpeg';
import img4 from '../../src/assets/download (1).jpeg';
import img5 from '../../src/assets/download (2).jpeg';
import img6 from '../../src/assets/download (3).jpeg';
import img7 from '../../src/assets/download (4).jpeg';
import img8 from '../../src/assets/images (2).jpeg';

import logo from '../../src/assets/a119229faff3ef405f55a44321fd5535.jpg';
import { FaHome, FaBell,FaVideo, FaRegCompass, FaUserCircle, FaBars } from 'react-icons/fa';

function App() {
  return (
    <div className="cont">
      <aside className="left-nav">
        <ul>
          <li className="menu-icon">
            <FaBars className="icon" />
          </li>
       
          <li>
            <FaHome className="icon" /> <br/>Home
          </li>
          <li>
            <FaVideo className="icon" /><br /> Shorts
          </li>
          <li>
            <FaRegCompass className="icon" /><br /> Subscriptions
          </li>
          <li>
            <FaUserCircle className="icon" /><br /> You
          </li>
         
        </ul>
      </aside>
      <div className="main-content">
        <header className="header">
           <div className="youtube-logo-container">
            <img src={logo} alt="YouTube Logo" className="youtube-logo" />
            <span className="youtube-text">YouTube</span>
          </div>
          <input type="text" className="search-bar" placeholder="Search" />
          <div className="icons">
            <FaBell className="icon" />
            <FaUserCircle className="icon" />
          </div>
        </header>
        <div className="video-grid">
          <div className="video-card">
            <img src={img1} alt="Thumbnail 1" />
            <p>Video Title 1</p>
          </div>
          <div className="video-card">
            <img src={img2} alt="Thumbnail 2" />
            <p>Video Title 2</p>
          </div>
          <div className="video-card">
            <img src={img3} alt="Thumbnail 3" />
            <p>Video Title 3</p>
          </div>
          <div className="video-card">
            <img src={img4} alt="Thumbnail 4" />
            <p>Video Title 4</p>
          </div>
          <div className="video-card">
            <img src={img5} alt="Thumbnail 5" />
            <p>Video Title 5</p>
          </div>
          <div className="video-card">
            <img src={img6} alt="Thumbnail 6" />
            <p>Video Title 6</p>
          </div>
          <div className="video-card">
            <img src={img7} alt="Thumbnail 7" />
            <p>Video Title 7</p>
          </div>
          <div className="video-card">
            <img src={img8} alt="Thumbnail 8" />
            <p>Video Title 8</p>
          </div>
          <div className="video-card">
            <img src={img2} alt="Thumbnail 2" />
            <p>Video Title 2</p>
          </div>
          <div className="video-card">
            <img src={img3} alt="Thumbnail 3" />
            <p>Video Title 3</p>
          </div>
          <div className="video-card">
            <img src={img8} alt="Thumbnail 8" />
            <p>Video Title 8</p>
          </div>
          <div className="video-card">
            <img src={img4} alt="Thumbnail 4" />
            <p>Video Title 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react"
import {
  FaBars,
  FaLinkedin,
  FaDev,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const Header = () => {
  return (
    <header>
      <div className="half" id="social-icons">
        <a href="/" target="_blank" rel="noreferrer" title="LinkeIn">
          <FaLinkedin />
        </a>
        <a href="/" target="_blank" rel="noreferrer" title="DEV">
          <FaDev />
        </a>
        <a href="/" target="_blank" rel="noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="/" target="_blank" rel="noreferrer" title="Twitter">
          <FaTwitter />
        </a>
        <a href="/" target="_blank" rel="noreferrer" title="Instagram">
          <FaInstagram />
        </a>
      </div>
      <div className="half right menu">
        <a href="" target="_blank" rel="noreferrer" title="Menu">
          <FaBars />
        </a>
      </div>
    </header>
  )
}

export default Header

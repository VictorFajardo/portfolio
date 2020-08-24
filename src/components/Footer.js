import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="half">
        &copy;{new Date().getFullYear()} <a href="/">Victor Fajardo</a>
      </div>
      <div className="half right">
        Built with{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noreferrer"
          title="Gatsby"
        >
          Gatsby
        </a>
        . Hosted on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer"
          title="Netifly"
        >
          Netifly
        </a>
        .
      </div>
    </footer>
  )
}

export default Footer

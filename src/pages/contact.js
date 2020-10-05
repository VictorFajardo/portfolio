import React from "react"
import Link from "gatsby-plugin-transition-link"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap from "gsap"

export default function Contact() {
  return (
    <section className="contact">
      <TransitionLink
        to="/"
        exit={{
          trigger: ({ exit, node }) => {
            var main = node.getElementsByClassName("contact")
            console.log(node)
            gsap.to(main, { duration: 2, y: "100vh" })
          },
          length: 2,
        }}
        entry={{
          trigger: ({ exit, node }) => {
            var home = node.getElementsByClassName("home")
            gsap.set(home, { y: "-100vh" })
            gsap.to(home, { duration: 2, y: 0 })
          },
          delay: 0,
        }}
      >
        Go to Home
      </TransitionLink>
      {/* <Link to="/">Home</Link>
      <AniLink paintDrip to="/">
        Go to Home
      </AniLink> */}
      <p>Contact me!</p>
    </section>
  )
}

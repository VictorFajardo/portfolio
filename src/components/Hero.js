import React from "react"
// import Link from "gatsby-plugin-transition-link"
// import TransitionLink from "gatsby-plugin-transition-link"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  var { rocket, ovni } = useStaticQuery(query)
  // console.log(contentfulAsset)
  // console.log(rocket)
  return (
    <section className="home">
      <div
        id="rocket"
        className="svg"
        dangerouslySetInnerHTML={{ __html: rocket.svg.content }}
      />
      <div
        id="ovni"
        className="svg"
        dangerouslySetInnerHTML={{ __html: ovni.svg.content }}
      />
      <p>Hello, my name is</p>
      <h1>
        <a href="/">Victor Fajardo.</a>
        <br />
        I'm a lead software engineer.
        <br />I create <a href="/">beautiful</a>, <a href="/">interactive</a>,
        and <a href="/">fun</a> websites and games!
      </h1>
    </section>
  )
}

export const query = graphql`
  {
    rocket: contentfulAsset(file: { fileName: { eq: "rocket.svg" } }) {
      svg {
        content
      }
    }
    ovni: contentfulAsset(file: { fileName: { eq: "flying-saucer.svg" } }) {
      svg {
        content
      }
    }
  }
`

export default Hero

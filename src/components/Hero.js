import React from "react"
import Rollover from "./Rollover"
// import Link from "gatsby-plugin-transition-link"
// import TransitionLink from "gatsby-plugin-transition-link"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  var {
    rocket,
    ovni,
    heart,
    balloon,
    sparkles,
    fireworks,
    // partyPopper,
    // sparklingHeart,
    // confettiBall,
  } = useStaticQuery(query)
  // console.log(
  //   rocket,
  //   fireworks
  //   // rocket,
  //   // ovni,
  //   // heart,
  //   // balloon,
  //   sparkles,
  //   partyPopper,
  //   sparklingHeart,
  //   confettiBall
  // )
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
        <br />I create{" "}
        <Rollover
          title="beautiful"
          query={[heart, sparkles]}
          speed="250"
        />, <Rollover title="interactive" query={[rocket, ovni]} speed="250" />,
        and <Rollover title="fun" query={[balloon, fireworks]} speed="350" />{" "}
        websites and games!
      </h1>
    </section>
  )
}

export const query = graphql`
  {
    fireworks: contentfulAsset(file: { fileName: { eq: "fireworks.svg" } }) {
      svg {
        content
      }
    }
    # sparklingHeart: contentfulAsset(
    #   file: { fileName: { eq: "sparkling-heart.svg" } }
    # ) {
    #   svg {
    #     content
    #   }
    # }
    # confettiBall: contentfulAsset(
    #   file: { fileName: { eq: "confetti-ball.svg" } }
    # ) {
    #   svg {
    #     content
    #   }
    # }
    sparkles: contentfulAsset(file: { fileName: { eq: "sparkles.svg" } }) {
      svg {
        content
      }
    }
    # partyPopper: contentfulAsset(
    #   file: { fileName: { eq: "party-popper.svg" } }
    # ) {
    #   svg {
    #     content
    #   }
    # }
    balloon: contentfulAsset(file: { fileName: { eq: "balloon.svg" } }) {
      svg {
        content
      }
    }
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
    heart: contentfulAsset(file: { fileName: { eq: "heart.svg" } }) {
      svg {
        content
      }
    }
  }
`

export default Hero

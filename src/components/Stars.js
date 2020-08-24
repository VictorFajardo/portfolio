import React from "react"
// import Link from "gatsby-plugin-transition-link"
// import TransitionLink from "gatsby-plugin-transition-link"
import Star from "../images/stars.svg"
import { useStaticQuery, graphql } from "gatsby"

import gsap from "gsap"

const Stars = () => {
  // var { stars } = useStaticQuery(query)
  // console.log(contentfulAsset)
  // console.log(rocket)
  var w = window.innerWidth
  var h = window.innerHeight
  var viewBox = [0, 0, w, h].join(" ")
  var frecuency = 100
  var top = w / frecuency
  var a = (Math.atan(w / h) * 180) / Math.PI
  console.log(h, w, a)
  var l = 2
  function createStar(x, y) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", "line")
    // el.setAttribute("id", id)
    el.setAttribute("x1", w)
    el.setAttribute("y1", "0")
    el.setAttribute("x2", w)
    el.setAttribute("y2", l)
    el.setAttribute("stroke", "#dfd4f6")
    el.setAttribute("strokeWidth", 1.5)
    return el
  }

  console.log(a)
  setTimeout(() => {
    var cosmos = document.getElementById("cosmos")
    // var star = createStar("star")
    // console.log(star)
    // cosmos.appendChild(star)
    // gsap.set(star, { rotate: a, opacity: 0.5 })
    // gsap.to(star, 7, {
    //   x: -w,
    //   y: h,
    //   attr: { y2: "10" },
    //   ease: "none",
    // })
    for (let index = 0; index < top; index++) {
      var star = createStar()
      gsap.set(star, {
        rotate: a,
        opacity: 0.5,
      })
      gsap.to(star, 7, {
        x: -w,
        y: h,
        attr: { y2: "10" },
        ease: "none",
      })
      cosmos.appendChild(star)
    }
    // gsap.set(star, { x: "0%", opacity: 1.2, scale: 1.2 })
    // gsap.to(star, 10, { x: -1000, y: 1000 })
  }, 0)

  return (
    <aside
      className="stars"

      // dangerouslySetInnerHTML={{ __html: stars.svg.content }}
    >
      {/* <Star /> */}
      <svg viewBox={viewBox} id="cosmos"></svg>
    </aside>
  )
}

// export const query = graphql`
//   {
//     stars: contentfulAsset(file: { fileName: { eq: "stars.svg" } }) {
//       svg {
//         content
//       }
//     }
//   }
// `

export default Stars

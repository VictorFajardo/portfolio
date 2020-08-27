import React from "react"
// import Link from "gatsby-plugin-transition-link"
// import TransitionLink from "gatsby-plugin-transition-link"
// import Star from "../images/stars.svg"
// import { useStaticQuery, graphql } from "gatsby"

// import gsap from "gsap"
// import { render } from "react-dom"

class Background extends React.Component {
  //Variables

  constructor(props) {
    super(props)
    this.state = {
      w: null,
      h: null,
    }
  }
  componentDidMount() {
    this.handleWindowSizeChange()
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentDidUpdate() {
    if (this.ani) cancelAnimationFrame(this.ani)
    this.stars()
  }

  handleWindowSizeChange = () => {
    this.setState({ w: window.innerWidth, h: window.innerHeight })
  }
  stars() {
    console.log('stars')
    this.canvas = document.getElementById("cosmos")
    this.ctx = this.canvas.getContext("2d")
    this.ctx.strokeStyle = "#dfd4f6"
    this.elements = []
    this.a = Math.atan(this.state.h / this.state.w)
    this.l = [2, 4, 12]
    this.lx = this.l.map((_, i) => this.l[i] * Math.cos(this.a))
    this.ly = this.l.map((_, i) => this.l[i] * Math.sin(this.a))
    this.sx = Math.cos(this.a)
    this.sy = Math.sin(this.a)
    this.s = [3, 6, 24]
    this.n = [100, 50, 25]
    for (var i = 0; i < this.n.length; i++) {
      for (var j = 0; j < this.n[i]; j++) {
        this.elements.push({
          x: Math.random() * this.state.w,
          y: Math.random() * this.state.h,
          l: i,
        })
      }
    }
    this.performance = 0;
    this.draw()
  }

  draw() {
    this.delta = (performance.now() - this.performance) / 100;
    console.log(this.delta)
    this.performance = performance.now()
    this.clearCanvas()
    this.updateStars()
    this.drawStars()
    this.ani = requestAnimationFrame(() => this.draw())
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.state.w, this.state.h)
  }
  updateStars() {
    this.elements = this.elements.map(el => {
      el.x -= (this.sx * this.s[el.l]) * this.delta
      el.y += (this.sy * this.s[el.l]) * this.delta
      if (el.x <= 0) {
        el.x = Math.random() * this.state.w
        el.y = 0
      } else if (el.y >= this.state.h) {
        el.x = this.state.w
        el.y = Math.random() * this.state.h
      }
      return el
    })
  }
  drawStars() {
    this.ctx.beginPath()
    this.elements.map(el => {
      this.ctx.moveTo(el.x, el.y)
      this.ctx.lineTo(el.x - this.lx[el.l], el.y + this.ly[el.l])
    })
    this.ctx.stroke()
  }

  render() {
    // console.log(this.state)
    var { w, h } = this.state
    return (
      <aside className="stars">
        <canvas width={w || 300} height={h || 150} id="cosmos"></canvas>
      </aside>
    )
  }
}

export default Background

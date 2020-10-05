import React from "react"

class Background extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      w: null,
      h: null,
    }
  }
  componentDidMount() {
    this.handleWindowSizeChange()
    window.addEventListener("resize", this.handleWindowSizeChange)
  }

  componentDidUpdate() {
    console.log("component update...", this.handler)
    if (this.handler) {
      if (this.ani) cancelAnimationFrame(this.ani)
      this.stars()
      this.handler = false
    }
  }

  handleWindowSizeChange = () => {
    console.log("handler...")
    this.handler = true
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
    })
  }
  stars() {
    console.log("stars...")
    this.canvas = document.getElementById("cosmos")
    this.ctx = this.canvas.getContext("2d")
    this.ctx.strokeStyle = "#dfd4f6"
    this.elements = []
    this.a = Math.atan(this.state.h / this.state.w)
    this.r = [1, 1.5, 2]
    this.sx = Math.cos(this.a)
    this.sy = Math.sin(this.a)
    this.s = [3, 6, 12]
    this.n = [240, 60, 15]
    this.cr = [0, 60, 240]
    for (var i = 0; i < this.n.length; i++) {
      for (var j = 0; j < this.n[i]; j++) {
        this.elements.push({
          x: Math.random() * this.state.w,
          y: Math.random() * this.state.h,
          l: i,
          r: this.r[i],
          c: this.getColor(),
          s: this.getSpeed(this.s[i]),
        })
      }
    }
    console.log(this.elements)
    this.performance = null
    this.draw()
  }
  draw() {
    this.lapse = (performance.now() - this.performance) / 1000
    this.delta = this.lapse > 1 ? 0 : 10 * this.lapse
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
      el.x -= this.sx * el.s * this.delta
      el.y += this.sy * el.s * this.delta
      if (el.x <= 0) {
        this.resetStar(el, Math.random() * this.state.w, 0)
      } else if (el.y >= this.state.h) {
        this.resetStar(el, this.state.w, Math.random() * this.state.h)
      }
      return el
    })
  }
  resetStar(el, x, y) {
    el.x = x
    el.y = y
    el.c = this.getColor()
    el.s = this.getSpeed(this.s[el.l])
  }
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  getColor() {
    return `hsl(${
      this.cr[this.getRandom(0, this.cr.length - 1)]
    }, ${this.getRandom(50, 100)}%, 88%)`
  }
  getSpeed(s) {
    return this.getRandom(s * 0.8, s * 1.2)
  }
  drawStars() {
    this.ctx.save()
    this.elements.forEach(el => {
      this.ctx.beginPath()
      var points = el.l == 2 ? 6 : 4
      var outer = el.r
      var inner = outer / 2
      for (var i = 0; i < 2 * points + 1; i++) {
        var r = i % 2 == 0 ? outer : inner
        if ((i == 0 || i == 2 * points) && el.l == 2) r *= 6
        var a = Math.PI * (i / points + 0.5) + this.a
        this.ctx.lineTo(el.x + r * Math.sin(a), el.y + r * Math.cos(a))
      }
      this.ctx.fillStyle = el.c
      this.ctx.fill()
    })
    this.ctx.closePath()
  }

  drawStar(centerX, centerY, points, outer, inner, fill, stroke, line) {
    // define the star
    this.ctx.beginPath()
    this.ctx.moveTo(centerX, centerY + outer)
    for (var i = 0; i < 2 * points + 1; i++) {
      var r = i % 2 == 0 ? outer : inner
      var a = (Math.PI * i) / points
      this.ctx.lineTo(centerX + r * Math.sin(a), centerY + r * Math.cos(a))
    }
    this.ctx.closePath()
    // draw
    this.ctx.fillStyle = fill
    this.ctx.fill()
    this.ctx.strokeStyle = stroke
    this.ctx.lineWidth = line
    this.ctx.stroke()
  }

  render() {
    var { w, h } = this.state
    return (
      <aside className="stars">
        <canvas width={w || 300} height={h || 150} id="cosmos"></canvas>
      </aside>
    )
  }
}

export default Background

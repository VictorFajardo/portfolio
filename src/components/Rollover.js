import React from "react"
import Emoji from "./Emoji"
import gsap from "gsap"

class Rollover extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
  }
  componentDidMount() {
    this.animationWidth = this.animations[0].current.offsetWidth
    this.containerWidth = this.container.current.offsetWidth
  }
  onMouseEnterHandler = () => {
    //Starting the loop
    console.log("start")
    this.lastPos = 0
    this.animationLoop()
  }
  onMouseLeaveHandler = () => {
    //Clearing the loop
    console.log("end")
    clearTimeout(this.loop)
  }
  onClickHandler = e => {
    e.preventDefault()
  }
  animationLoop() {
    //Animation cicle
    var element = this.createElement()
    this.animateElement(element)
    this.loop = setTimeout(() => this.animationLoop(), this.props.speed)
  }

  createElement() {
    var t = Math.floor(this.animations.length * Math.random())
    var el = this.animations[t].current.cloneNode(true)
    el.style.left = this.randomPosition() + "px"
    el.dataset.type = t
    this.container.current.appendChild(el)
    return el
  }

  animateElement(element) {
    // console.log(this.props.title)
    switch (this.props.title) {
      case "beautiful":
        this.animateElementGoingUp(element)
        break
      case "interactive":
        this.animateElementTakeOff(element)
        break
      case "fun":
        if (element.dataset.type === "0") this.animateElementGoingUp(element)
        else this.animateElementFireworks(element)
        break
      default:
        break
    }
  }

  animateElementGoingUp(element) {
    var r = Math.random()
    //Left/Right Animation 2 sec
    gsap.to(element, {
      duration: 2,
      y: -80 - 40 * r,
      x: 40 * Math.random() * (Math.random() < 0.5 ? -1 : 1),
      ease: "none",
      onComplete: this.removeElement,
      onCompleteParams: [element],
    })
    //Scale Animation 2 sec
    gsap.to(element, {
      duration: 1,
      scale: 0.8,
    })
    gsap.to(element, {
      duration: 1,
      scale: 0.8 + 0.2 * r,
      delay: 1,
    })
    //FadeOff Animation 1 sec
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      delay: 1,
    })
  }

  animateElementTakeOff(element) {
    const r = Math.random()
    const s = Math.random() < 0.5 ? -1 : 1
    const a = 180 * (1 - element.offsetLeft / this.containerWidth)
    const deg = (a * Math.PI) / 180
    const sin = s * Math.sin(deg)
    const cos = Math.cos(deg)
    //Modifying the original Y position
    gsap.set(element, {
      y: "-=" + (s > 0 ? 5 : -15),
    })
    //Rotating the rocket/ufo
    console.log(element.dataset.type)
    if (element.dataset.type === "0") {
      gsap.set(element, {
        rotate: -a * s + 45,
      })
    } else {
      gsap.set(element, {
        rotate: -30,
      })
      gsap.to(element, {
        duration: 0.5,
        rotate: 0,
        repeat: 2,
        repeatDelay: 0.5,
        ease: "none",
      })
      gsap.to(element, {
        duration: 0.5,
        rotate: -30,
        repeat: 2,
        repeatDelay: 0.5,
        delay: 0.5,
        ease: "none",
      })
    }
    //Movement Animation 2 sec
    gsap.to(element, {
      duration: 2,
      y: "-=" + (200 + 40 * r) * sin,
      x: "+=" + (200 + 40 * r) * cos,
      onComplete: this.removeElement,
      onCompleteParams: [element],
      ease: "power1.in",
      delay: 0,
    })
    //Scale Animation .5 sec
    gsap.to(element, {
      duration: 0.5,
      scale: 0.8 + 0.2 * r,
      ease: "power1.in",
    })
    //FadeOff Animation .5 sec
    gsap.to(element, {
      duration: 0.5,
      opacity: 0,
      ease: "power1.out",
      delay: 1.5,
    })
  }

  animateElementFireworks(element) {
    const r = Math.random()
    gsap.to(element, {
      duration: 1,
      scale: 0.2,
      y: -60 - 40 * r,
      x: 60 * Math.random() * (Math.random() < 0.5 ? -1 : 1),
      ease: "power3.out",
    })
    //Scale Animation .5 sec
    gsap.to(element, {
      duration: 1,
      scale: 1 + 0.25 * r,
      // opacity: 0,
      ease: "power1.out",
      onComplete: this.removeElement,
      onCompleteParams: [element],
      delay: 0.5,
    })
    //FadeOff Animation .5 sec
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: "+=5",
      ease: "power1.in",
      delay: 0.5,
    })
  }

  randomPosition() {
    var pos =
      Math.random() * (this.containerWidth - this.animationWidth + 1) +
      this.animationWidth / 2
    if (
      this.lastPos === 0 ||
      Math.abs(this.lastPos - pos) > this.animationWidth / 2
    ) {
      this.lastPos = pos
      return pos
    } else {
      return this.randomPosition()
    }
  }
  removeElement(element) {
    element.parentNode.removeChild(element)
  }
  render() {
    this.animations = []
    return (
      <a
        href="/"
        className="animated"
        ref={this.container}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.onClickHandler}
      >
        {this.props.title}
        {this.props.query.map((emoji, i) => {
          var ref = React.createRef()
          this.animations.push(ref)
          return <Emoji key={i} childRef={ref} query={emoji} />
        })}
      </a>
    )
  }
}

export default Rollover

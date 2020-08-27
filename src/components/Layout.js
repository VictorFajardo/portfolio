import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Background from "../components/Background"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Background />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

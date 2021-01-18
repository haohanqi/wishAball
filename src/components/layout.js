import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "./basicStyle"
import Header from "./commonComponents/Header"
import Footer from "./commonComponents/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
        <Footer>©</Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

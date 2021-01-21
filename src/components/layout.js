import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "./basicStyle"
import Header from "./commonComponents/Header"
import Footer from "./commonComponents/Footer"
import contactInfo from '../pageContent/ContactInfo.json'
import footerInfo from '../pageContent/Footer.json'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
        <Footer contactInfo={contactInfo} footerInfo={footerInfo}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

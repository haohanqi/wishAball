import React,{useEffect} from "react"
import gsap from "gsap"
import Layout from "../components/layout"
import ContactSection from "../components/contactPage/ContactSection"

const ContactPage = () => {
  useEffect(() => {
    gsap.set("body", { overflowY: "auto" })
  }, [])
  
  return (
    <Layout>
      <ContactSection />
    </Layout>
  )
}

export default ContactPage

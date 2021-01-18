import React, { useEffect } from "react"
import gsap from "gsap"
import Layout from "../components/layout"
import SearchEntrySection from "../components/searchPage/SearchEntrySection"
import SearchSection from "../components/searchPage/SearchSection"
import Advertisement from "../components/commonComponents/Advertiesment"


const IndexPage = () => {
  useEffect(() => {
    gsap.set("body", { overflowY: "auto" })
  })
  return (
    <Layout>
      <SearchEntrySection />
      <SearchSection />
      <Advertisement />
    </Layout>
  )
}

export default IndexPage

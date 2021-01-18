import React,{useState,useEffect} from "react"
import { NavWrapper, Nav, NavItem, Logo, LogoText, Hum, MobileHeaderWrapper, MobileNavItem} from './style'
import LogoImage from '../../images/Logo.png'
import gsap from 'gsap'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const MobileHeader = ({open,setClose}) => {

  useEffect(() => {
    //open animation
    const show = gsap.timeline()
    show.set("body",{overflowY:"hidden"})
        .from(".mobile-header-wrapper", 0.3,{padding:0,width:0,opacity:0})
        .from(".close-button",0.2,{x:100,opacity:0})
        .to(".mobile-nav-item",0.3,{y:0,opacity:1,stagger:0.2})
  },[])

  const closeAnimation = () => {
    const fade = gsap.timeline({
      onComplete:()=>{setClose(!open)}
    })

    fade.set("body", { overflowY: "auto" })
        .to(".close-button", 0.2, { x: 100, opacity: 0 })
        .to(".mobile-nav-item", 0.3, { y: -30, opacity: 0, stagger: 0.2})
        .to(".mobile-nav-item", {display:"none"})
        .to(".mobile-header-wrapper",0.3,{padding:0,width:0})
  }

  return (
    <MobileHeaderWrapper className="mobile-header-wrapper">
      <div className="close-button" onClick={() => { closeAnimation() }}>Close</div>
      
      <MobileNavItem className="mobile-nav-item">
        <AniLink paintDrip hex="#fafafa" to="/">Home</AniLink>
      </MobileNavItem>

      <MobileNavItem className="mobile-nav-item">
        <AniLink paintDrip hex="#fafafa" to="/newsPage">News</AniLink>
      </MobileNavItem>
      <MobileNavItem className="mobile-nav-item">
        <AniLink paintDrip hex="#fafafa" to="/aboutPage">Search</AniLink>
      </MobileNavItem>
      <MobileNavItem className="mobile-nav-item">
        <AniLink paintDrip hex="#fafafa" to="/contactPage">Contact</AniLink>
      </MobileNavItem>
    </MobileHeaderWrapper>
  )
}

 const Header = () => {
   const [open, setOpen] = useState(false)
  
  return (
    <>
      {
        open ? <MobileHeader open={open} setClose={setOpen}/> : null
      }
      <NavWrapper>
        <Nav>
          <NavItem>
            <AniLink paintDrip hex="#fafafa" to="/">Home</AniLink>
          </NavItem>

          <NavItem>
            <AniLink paintDrip hex="#fafafa" to="/newsPage">News</AniLink>
          </NavItem>

          <Logo>
            <img src={LogoImage} alt="OSE"/>
          </Logo>

          <LogoText>Wish A Ball</LogoText>

          <NavItem>
            <AniLink paintDrip hex="#fafafa" to="/aboutPage">About</AniLink>
          </NavItem>

          <NavItem>
            <AniLink paintDrip hex="#fafafa"to="/contactPage">Contact</AniLink>
          </NavItem>

          <Hum onClick={()=>{setOpen(true)}}>
            <div className="humBar"></div>
            <div className="humBar"></div>
            <div className="humBar"></div>
          </Hum>
        </Nav>
      </NavWrapper>
    </>
  )
}
  
export default Header



import styled, { createGlobalStyle } from "styled-components"

export const basicColor = {
  primaryColor: "#ffffff",
  secondaryColor: "#000000",
  sideColor: "#fafafa",
  highlightColor: "#fc5c5c",
}

export const GlobalStyle = createGlobalStyle`
	body {
		margin:0;
		font-family: Lato, sans-serif;
		h1,h2,h3,h4,h5,h6,p{
			margin:0;
		}
	}
`
export const SectionTitle = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: ${basicColor.highlightColor};
  @media only screen and (max-width: 480px) {
    font-size: 3rem;
  }
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${basicColor.primaryColor};

  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`
export const NavTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${basicColor.secondaryColor};
`

export const BlogTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${basicColor.secondaryColor};

  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`

export const Des = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;

  @media only screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`

export const LargeDes = styled.p`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${basicColor.secondaryColor};

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`

export const BasicSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 5%;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor};
  overflow: hidden;

  .button-row {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 1600px) {
    padding: 15%;
    height: 100%;
  }
`

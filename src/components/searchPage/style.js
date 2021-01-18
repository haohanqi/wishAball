import styled from "styled-components"
import { BasicSection, basicColor, Title } from "../basicStyle"
import { IntroPanel, BasicTitleStyle } from "../homePage/style"

//-- SearchEntrySection
export const SearchEntrySectionWrapper = styled(BasicSection)`
  margin-top: 30px;
`

export const SearchPanel = styled(IntroPanel)`
  max-width: 380px;
  min-height: 380px;
  .panelTitle {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: ${basicColor.highlightColor};
  }
  .panelDes {
    width: 100%;
    color: ${basicColor.primaryColor};
    font-size: 1.35rem;
    font-weight: 400;
    opacity: 1;
  }

  .button-row {
    opacity: 0;
    transition: all 0.3s linear;
  }

  &:hover {
    .button-row {
      opacity: 1;
    }

    .panelTitle {
      color: ${basicColor.secondaryColor};
    }

    .panelDes {
      color: ${basicColor.secondaryColor};
    }

    &:after {
      opacity: 0.5;
    }
  }

  @media only screen and (max-width: 480px) and (min-width: 320px) {
    margin-top: 60px;
    &:hover {
      transform: scale(1);
    }
  }

  @media only screen and (max-width: 320px) {
    max-width: 290px;
    height: 290px;
  }
`

//-- SearchSection
export const SearchSectionWrapper = styled(BasicSection)``

export const SearchFilterWrapper = styled.div`
  width: 100%;
  min-height: 350px;
  padding: 5%;
  background-color: ${basicColor.sideColor};
`

export const Cate = styled(BasicTitleStyle)`
  font-size: 1.2rem;
  margin-bottom: 0;
  @media only screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
`

export const DisableCate = styled(Cate)`
  background-color: ${basicColor.primaryColor};
  color: ${basicColor.secondaryColor};
  margin-right: 0;
`

export const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`

export const TagStyle = styled.div`
  min-width: 100px;
  text-align: center;
  margin: 10px;
  padding: 10px;
  color: ${basicColor.secondaryColor};
  background-color: ${basicColor.primaryColor};
  border-radius: 10px;
  cursor: default;
  box-shadow: 0px 3px 6px 0px #000000;
`
export const TagActiveStyle = styled(TagStyle)`
  color: ${basicColor.primaryColor};
  background-color: ${basicColor.highlightColor};
`

//--MapSection

export const MapSectionWrapper = styled(BasicSection)`
  min-height: 600px;
  padding: 0 5%;
  margin-top: 30px;
`

export const IconWrapper = styled.div`
	box-sizing:border-box;
	width:200px;
	height:50px;
	display:flex;
	flex-direction:column;
	justify-content:start;
	align-items:start;

	.content{
		font-size:1rem;
		font-weight:bold;
		color:black;
	}

	.icon{
		margin-top:5px;
		font-size:30px;
		color:red;
	}

}
`

export const MapWrapper = styled.div`
  width: 100%;
  height: 80vh;
`

//--ResultSection

export const ResultSectionWrapper = styled(BasicSection)`
  padding: 5%;
  min-height: 100%;
`
export const ResultItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 90%;
  height: 280px;
  background-color: ${basicColor.sideColor};
  margin-left: 10%;
  padding: 10px;

  .sportTag {
    position: absolute;
    left: -40px;
    top: -15px;
    width: 120px;
    height: 30px;
    font-size: 1.1rem;
    color: ${basicColor.primaryColor};
    background-color: ${basicColor.highlightColor};
    line-height: 30px;
    text-align: center;
    font-weight: 900;
  }

  .resultTitle {
    font-size: 1.1rem;
    font-weight: 900;
    color: ${basicColor.secondaryColor};
  }

  .info-row {
    display: flex;
    flex-firection: row;
    justify-content: start;
    align-items: center;
    width: 100%;

    .icon {
      font-size: 1.2rem;
      margin-right: 20px;
    }
  }

  .see-more-button {
    width: 100%;
    display: flex;
    flex-firection: row;
    justify-content: center;
    align-items: center;

    a {
      font-size: 1.2rem;
      font-weight: 900;
      color: ${basicColor.highlightColor};
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 40px;
  }
`

export const KeyWord = styled(Title)`
  color: ${basicColor.secondaryColor};
  margin: 0 10px;
`

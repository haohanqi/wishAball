import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { MapSectionWrapper, MapWrapper, IconWrapper } from "./style"
import GoogleMapReact from "google-map-react"
import { ImLocation2 } from "react-icons/im"
import "./infowindow.css"

const MapSection = ({ markers, showResult }) => {
  const key = "AIzaSyDWRCl9yT93nyj9CbNdXK9BhPnlYCuFubU"

  const [zoom, setzoom] = useState(11)

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setzoom(9)
    }
  }, [])

  const mapConfig = {
    center: {
      lat: 43.7593189,
      lng: -79.4043329,
    },
    zoom: zoom,
  }

  // const renderMarkers = (map, maps) => {
  //   if (markers.length > 0) {
  //     //console.log(markers.length)
  //     markers.map(item => {
  //       let marker = new maps.Marker({
  //         position: { lat: item.coAddress.lat, lng: item.coAddress.lng },
  //         map,
  //         title: item.title,
  //       })

  //       let infowindow = new maps.InfoWindow({
  //         content:
  //           `<div class="infowindow-title">${item.title}</div>` +
  //           `<div class="infowindow-address">${item.address}</div>` +
  //           `<a href=${item.website} class="infowindow-link">${item.website}</a>`,
  //       })

  //       marker.addListener("click", () => {
  //         infowindow.open(map, marker)
  //       })
  //       return marker
  //     })
  //   } else {
  //     console.log("no result")
  //   }
  // }

  return (
    <>
      {showResult && markers.length > 0 ? (
        <MapSectionWrapper>
          <MapWrapper className="map-wrapper">
            <GoogleMapReact
              bootstrapURLKeys={{ key: key }}
              defaultCenter={mapConfig.center}
              defaultZoom={mapConfig.zoom}
              yesIWantToUseGoogleMapApiInternals
              //onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
              {markers.map(marker => (
                <IconWrapper
                  lat={marker.coAddress.lat}
                  lng={marker.coAddress.lng}
                >
                  <div className="content">{marker.title}</div>
                  <ImLocation2 className="icon" />
                </IconWrapper>
              ))}
            </GoogleMapReact>
          </MapWrapper>
        </MapSectionWrapper>
      ) : null}
    </>
  )
}
const mapStateToProps = state => {
  return {
    markers: state.searchReducer.markers,
    showResult: state.searchReducer.showResult,
  }
}
export default connect(mapStateToProps)(MapSection)

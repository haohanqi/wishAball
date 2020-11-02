import React from 'react'
import { MapSectionWrapper } from './style'
import GoogleMapReact from 'google-map-react';


const MapSection = () => {
	const key ="AIzaSyDWRCl9yT93nyj9CbNdXK9BhPnlYCuFubU"
	const mapConfig = {
		center: {
			lat: 43.7593189,
			lng: -79.4043329,
		},
		zoom: 12,
	};

	const markers = [{
		lat: 43.7593189,
		lng: -79.4043329,
		title:"home"
		}
		,
		{
			lat: 43.7655965,
			lng: -79.3868125,
			title:"ymca"
		}
	]

	const renderMarkers = (map,maps)=>{
		markers.map((item)=>{
			let marker = new maps.Marker({
				position: { lat:item.lat, lng: item.lng },
				map,
				title: item.title
			});

			let infowindow = new maps.InfoWindow({
				content: item.title
			})

			marker.addListener("click",()=>{
				infowindow.open(map,marker)
			})
			return marker
		})
	
	}

	return (
		<MapSectionWrapper>
			<div id="google-map-section" style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: key }}
					defaultCenter={mapConfig.center}
					defaultZoom={mapConfig.zoom}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
				>
					{
						//<div style={{width:"10px",height:"10px",background:"red"}}
						//	lat="43.7593189"
						//	lng="-79.4043329"></div>
				   }
					
					
				</GoogleMapReact>
			</div>
		</MapSectionWrapper>
	)
}

export default MapSection

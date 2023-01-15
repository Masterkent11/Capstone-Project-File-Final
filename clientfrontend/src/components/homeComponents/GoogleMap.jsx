import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {Stack, Typography} from "@mui/material"
 
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 14.554729,
  lng:121.02444519999995  
};

function CalltoActionSection() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBhHahv4l7Wf5PSUc_rIb2P-5yvsBXbVzs "
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return ( isLoaded ?
    
    (
        <Stack 
            display={"flex"}
            justifyContent={"center"}

            flexDirection={{md:'column', lg:'column'}}
            gap={2}
            >

                <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
      
            <></>
            </GoogleMap>
 
    
      </Stack>
      )
 : <></>  
 
 )
}

export default React.memo(CalltoActionSection)
import type { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'
import { Viewport } from '../../types/dataTypes'

const Geo: NextPage = (): JSX.Element => {
  const [viewport, setViewport] = useState<Viewport>({
    width: '100%',
    height: '60vh',
    latitude: 41.8662,
    longitude: -87.61694,
    zoom: 4,
  })

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(nextViewport: Viewport): void =>
          setViewport(nextViewport)
        }
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
      >
        <Source
          id="oregonjson"
          type="geojson"
          data={process.env.NEXT_PUBLIC_GEOJSON_API}
        />
        <Layer
          id="lineLayer"
          type="line"
          source="oregonjson"
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
          paint={{
            'line-color': 'rgba(250, 173, 20, 0.8)',
            'line-width': 3,
          }}
        />
      </ReactMapGL>
    </>
  )
}

export default Geo

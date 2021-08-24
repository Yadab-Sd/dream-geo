import type { NextPage } from 'next'
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Viewport } from '../../types/dataTypes';

const Geo: NextPage = (): JSX.Element => {
    const [viewport, setViewport] = useState<Viewport>({
        width: '100%',
        height: '400px',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      });
    
      return (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          onViewportChange={(nextViewport: Viewport): void => setViewport(nextViewport)}
        />
      );
}

export default Geo

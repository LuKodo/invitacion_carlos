import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

export const MapParty = () => {
  return <div id="map" ref={mapContainerRef} style={{ width: '100%', height: '500px' }}/>;
};

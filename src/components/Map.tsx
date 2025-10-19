"use client";

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMemo } from 'react';
import L from 'leaflet';

// Fix for default marker icon in production
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  variant?: 'default' | 'grayscale' | 'nolabels' | 'sepia' | 'dark';
  label?: string;
}

export default function Map({ variant = 'dark', label }: MapProps) {
  // Barcelona coordinates
  const position: [number, number] = [41.3874, 2.1686];

  // Simple dot marker
  const customIcon = useMemo(() => new L.DivIcon({
    className: 'custom-dot-marker',
    html: '<div style="width: 12px; height: 12px; background-color: #d4af37; border: 2px solid #fafaf9; border-radius: 50%; box-shadow: 0 0 4px rgba(0,0,0,0.3);"></div>',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  }), []);

  const tileConfig = {
    default: {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: 'opacity-70',
    },
    grayscale: {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: 'grayscale opacity-60',
    },
    nolabels: {
      url: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: 'opacity-70',
    },
    sepia: {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: 'sepia-[0.3] opacity-70',
    },
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: 'opacity-80',
    },
  };

  const config = tileConfig[variant];

  return (
    <div className="w-full space-y-2">
      {label && (
        <p className="text-xs text-muted font-light">{label}</p>
      )}
      <div className="w-full h-[300px] rounded-sm overflow-hidden border border-steel/20 map-container">
        <MapContainer
          center={position}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
          doubleClickZoom={false}
          dragging={false}
        >
          <TileLayer
            attribution={config.attribution}
            url={config.url}
            className={config.className}
          />
          <Marker position={position} icon={customIcon} />
        </MapContainer>
      </div>
      <style jsx global>{`
        .map-container .leaflet-control-zoom a {
          background-color: #78716c !important;
          color: #fafaf9 !important;
          border: 1px solid #525252 !important;
        }
        .map-container .leaflet-control-zoom a:hover {
          background-color: #525252 !important;
        }
        .map-container .leaflet-control-attribution {
          background-color: rgba(120, 113, 108, 0.8) !important;
          color: #fafaf9 !important;
          font-size: 10px !important;
        }
        .map-container .leaflet-control-attribution a {
          color: #fafaf9 !important;
        }
      `}</style>
    </div>
  );
}


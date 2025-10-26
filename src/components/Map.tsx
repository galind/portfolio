"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";
import L from "leaflet";

// Fix for default marker icon in production
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapProps {
  variant?: "default" | "grayscale" | "nolabels" | "sepia" | "dark";
  label?: string;
}

export default function Map({ variant = "dark", label }: MapProps) {
  // Barcelona coordinates
  const position: [number, number] = [41.3874, 2.1686];

  // Small, minimal pin - refined and properly positioned
  const customIcon = useMemo(
    () =>
      new L.DivIcon({
        className: "custom-pin-marker",
        html: `
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0C2.239 0 0 2.239 0 5C0 7.761 5 14 5 14C5 14 10 7.761 10 5C10 2.239 7.761 0 5 0Z" fill="#c9b8a8" fill-opacity="0.85"/>
            <circle cx="5" cy="5" r="1.5" fill="#f5f5f6" fill-opacity="0.3"/>
          </svg>
        `,
        iconSize: [10, 14],
        iconAnchor: [5, 14], // Anchor at the bottom tip
      }),
    []
  );

  const tileConfig = {
    default: {
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: "opacity-70",
    },
    grayscale: {
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: "grayscale opacity-60",
    },
    nolabels: {
      url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: "opacity-70",
    },
    sepia: {
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: "sepia-[0.3] opacity-70",
    },
    dark: {
      url: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      className: "opacity-80",
    },
  };

  const config = tileConfig[variant];

  return (
    <div className="w-full space-y-2">
      {label && <p className="text-xs text-muted font-light">{label}</p>}
      <div className="w-full h-[300px] rounded-sm overflow-hidden border border-steel/20 map-container">
        <MapContainer
          center={position}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
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
          background-color: #9ca3af !important;
          color: #f5f5f6 !important;
          border: 1px solid #6b7280 !important;
        }
        .map-container .leaflet-control-zoom a:hover {
          background-color: #c9b8a8 !important;
        }
        .map-container .leaflet-control-attribution {
          background-color: rgba(156, 163, 175, 0.75) !important;
          color: #f5f5f6 !important;
          font-size: 10px !important;
        }
        .map-container .leaflet-control-attribution a {
          color: #f5f5f6 !important;
        }
      `}</style>
    </div>
  );
}

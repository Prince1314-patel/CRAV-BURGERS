"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { siteInfo } from "@/content/site";

const COORDINATES: [number, number] = [52.586, -2.1298];

const markerIcon = L.divIcon({
  className: "",
  html: `
    <div style="position:relative;display:flex;align-items:center;justify-content:center;width:40px;height:40px;">
      <div style="position:absolute;inset:0;border-radius:9999px;background:var(--maroon);box-shadow:0 4px 12px rgba(36,16,9,0.4);"></div>
      <svg viewBox="0 0 24 24" width="20" height="20" style="position:relative;" fill="none">
        <path d="M4 9h16l-2 8H6L4 9Z" fill="var(--gold)" stroke="var(--cream)" stroke-width="1.2" stroke-linejoin="round" />
        <path d="M8 9V6a4 4 0 0 1 8 0v3" stroke="var(--cream)" stroke-width="1.2" fill="none" />
      </svg>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 36],
});

export default function RestaurantMap() {
  return (
    <div
      id="map-destination"
      className="relative h-80 w-full overflow-hidden rounded-md border-2 border-maroon/15 lg:h-full lg:min-h-[360px] [&_.leaflet-control-attribution]:bg-cream/90 [&_.leaflet-control-attribution]:text-[10px]"
    >
      <MapContainer
        center={COORDINATES}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
        aria-label={`Map showing Street Bites location at ${siteInfo.address.full}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={COORDINATES} icon={markerIcon} />
      </MapContainer>
    </div>
  );
}

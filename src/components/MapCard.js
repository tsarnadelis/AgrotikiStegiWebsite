import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const position = [40.90780, 24.71056]

class MapCard extends React.Component {
    render() {
        return (
            <MapContainer center={position} zoom={14} style={{height:"400px", width: "100%"}} attributionControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                <Popup>
                <h2>Αγροτική Στέγη<br />Νέα Καρυά Καβάλας <br />Τ.Κ. 64200 <br /></h2>
                <a href={`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`} target="_blank" rel="noopener noreferrer">Open in Maps</a>
                </Popup>
                
            </Marker>
            </MapContainer>
        );
    }
}

export default MapCard;


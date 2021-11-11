import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
	...L.Icon.Default.prototype.options,
	iconUrl: icon,
	iconRetinaUrl: iconRetina,
	shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ position, street, city, country }) => {
	return (
		<MapContainer
			style={{ width: '500px', height: '500px', borderRadius: 6 }}
			center={position}
			zoom={5}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={position}>
				<Popup>
					<p>
						<strong>Address:</strong>
						<br />
						{street}
						<br />
						{city}
						<br />
						{country}
					</p>
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;

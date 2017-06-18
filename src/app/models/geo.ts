export class Geo {

	private lat: string;
	private lng: string;

	constructor(lat: string, lng: string) {
		this.setLat(lat);
		this.setLng(lng);
	}

	getLat() { return this.lat; }
	getLng() { return this.lng; }
	setLat(value) { this.lat = value; }
	setLng(value) { this.lng = value; }
}
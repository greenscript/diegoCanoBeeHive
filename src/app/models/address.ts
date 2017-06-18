import { Geo } from './geo';

export class Address {

	private street: string;
	private suite: string;
	private city: string;
	private zipcode: string;
	private geo: Geo;

	constructor(street: string, suite: string, city: string, zipcode: string, geo: Geo) {
		this.setStreet(street);
		this.setSuite(suite);
		this.setCity(city);
		this.setZipcode(zipcode);
		this.setGeo(geo);
	}

	getStreet() { return this.street; }
	getSuite() { return this.suite; }
	getCity() { return this.city; }
	getZipcode() { return this.zipcode; }
	getGeo() { return this.geo; }

	setStreet(value) { this.street = value; }
	setSuite(value) { this.suite = value; }
	setCity(value) { this.city = value; }
	setZipcode(value) { this.zipcode = value; }
	setGeo(value) { this.geo = value; }
}
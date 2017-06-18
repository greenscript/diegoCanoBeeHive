import { Photo } from './photo';
export class Album {

	private id: number;
	private userId: number;
	private title: string;
	private photos: Photo[] = [];

	constructor(id: number, userId: number, title: string) {
		this.setId(id);
		this.setUserid(userId);
		this.setTitle(title);
	}

	getId() { return this.id; }
	getUserid() { return this.userId; }
	getTitle() { return this.title; }
	getPhotos() { return this.photos; };

	setId(value) { this.id = value; }
	setUserid(value) { this.userId = value; }
	setTitle(value) { this.title = value; }
	setPhotos(value) { this.photos = value; }

	//Class methods
	public addPhoto(photo: Photo) { this.photos.push(photo) };
}
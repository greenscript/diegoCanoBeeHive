export class Photo {

	private id: number;
	private albumId: number;
	private title: string;
	private url: string;
	private thumbnailUrl: string;

	constructor(id: number, albumId: number, title: string, url: string, thumbnailUrl: string) {
		this.setId(id);
		this.setAlbumId(albumId);
		this.setTitle(title);
		this.setUrl(url);
		this.setThumbnailUrl(thumbnailUrl);
	}

	getId() { return this.id; }
	getAlbumId() { return this.albumId; }
	getTitle() { return this.title; }
	getUrl() { return this.url; }
	getThumbnailUrl() { return this.thumbnailUrl; }

	setId(value) { this.id = value; }
	setAlbumId(value) { this.albumId = value; }
	setTitle(value) { this.title = value; }
	setUrl(value) { this.url = value; }
	setThumbnailUrl(value) { this.thumbnailUrl = value; }
}
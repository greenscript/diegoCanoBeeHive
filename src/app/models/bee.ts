import { Address } from './address';
import { Company } from './company';
import { Post } from './post';
import { Album } from './album';
import { Photo } from './photo';
import { Todo } from './todo';

export class Bee {

	private id: number;
	private name: string;
	private username: string;
	private email: string;
	private phone: string;
	private website: string;
	private address: Address;
	private company: Company;
	private posts: Post[] = [];
	private album: Album = null;
	private todos: Todo[] = [];
	private avatarUrl: String;

	constructor(id: number, name: string, username: string, email: string, phone: string, website: string, address: Address, company: Company, avatarUrl: string) {
		this.setId(id);
		this.setName(name);
		this.setUserName(username);
		this.setEmail(email);
		this.setPhone(phone);
		this.setWebsite(website);
		this.setAddress(address);
		this.setCompany(company);
		this.setAvatarUrl(avatarUrl);
	}

	getId() { return this.id; }
	getName() { return this.name; }
	getUserName() { return this.username; }
	getEmail() { return this.email; }
	getPhone() { return this.phone; }
	getWebsite() { return this.website; }
	getAddress() { return this.address; }
	getCompany() { return this.company; }
	getPosts() { return this.posts; }
	getAlbum() { return this.album; }
	getTodos() { return this.todos; }
	getAvatarUrl() { return this.avatarUrl; }

	setId(value) { this.id = value; }
	setName(value) { this.name = value; }
	setUserName(value) { this.username = value; }
	setEmail(value) { this.email = value; }
	setPhone(value) { this.phone = value; }
	setWebsite(value) { this.website = value; }
	setAddress(value) { this.address = value; }
	setCompany(value) { this.company = value; }
	setPosts(value) { this.posts = value; }
	setAlbum(value) {
		//Hack: Only add one album to user since on the service the user has many albums.
		if (this.album == null) {
			this.album = value;
		}
	}
	setTodos(value) { this.todos = value; }
	setAvatarUrl(value) { this.avatarUrl = value; }

	//Class methods
	public addPost(post: Post) { this.posts.push(post) };
	public addPhotoToAlbum(photo: Photo) { this.album.addPhoto(photo); }
	public addTodo(todo: Todo) { this.todos.push(todo); }

} 
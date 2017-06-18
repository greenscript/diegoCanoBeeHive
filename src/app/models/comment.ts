export class Comment {

	private id: number;
	private postId: number;
	private name: string;
	private body: string;
	private email: string;

	constructor(id: number, postId: number, name: string, body: string, email: string) {
		this.setId(id);
		this.setPostId(postId);
		this.setName(name);
		this.setBody(body);
		this.setEmail(email);
	}

	getId() { return this.id }
	getPostId() { return this.postId; }
	getName() { return this.name; }
	getBody() { return this.body }
	getEmail() { return this.email; }

	setId(value) { this.id = value; }
	setPostId(value) { this.postId = value; }
	setName(value) { this.name = value; }
	setBody(value) { this.body = value; }
	setEmail(value) { this.email = value; }
}
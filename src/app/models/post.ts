import { Comment } from './comment';
export class Post {

	private id: number;
	private userId: number;
	private title: string;
	private body: string;
	private comments: Comment[] = [];

	constructor(id: number, userId: number, title: string, body: string) {
		this.setId(id);
		this.setUserid(userId);
		this.setTitle(title);
		this.setBody(body);
	}

	getId() { return this.id }
	getUserid() { return this.userId }
	getTitle() { return this.title }
	getBody() { return this.body }
	getComments() { return this.comments; }

	setId(value) { this.id = value; }
	setUserid(value) { this.userId = value; }
	setTitle(value) { this.title = value; }
	setBody(value) { this.body = value; }
	setComments(value) { this.comments = value; }

	//Class methods
	addComment(comment: Comment) {
		this.comments.push(comment);
	}
}
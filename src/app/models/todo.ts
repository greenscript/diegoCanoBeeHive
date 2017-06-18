export class Todo {

	private id: number;
	private userId: number;
	private title: string;
	private completed: boolean;

	constructor(id: number, userId: number, title: string, completed: boolean) {
		this.setId(id);
		this.setUserid(userId);
		this.setTitle(title);
		this.setCompleted(completed);
	}

	getId() { return this.id }
	getUserid() { return this.userId }
	getTitle() { return this.title }
	getCompleted() { return this.completed }

	setId(value) { this.id = value; }
	setUserid(value) { this.userId = value; }
	setTitle(value) { this.title = value; }
	setCompleted(value) { this.completed = value; }
}

export class Company {

	private name: string;
	private catchPhrase: string;
	private bs: string;

	constructor(name: string, catchPhrase: string, bs: string) {
		this.setName(name);
		this.setCatchPhrase(catchPhrase);
		this.setBs(bs);
	}

	getName() { return this.name; }
	getCatchPhrase() { return this.catchPhrase; }
	getBs() { return this.bs; }

	setName(value) { this.name = value; }
	setCatchPhrase(value) { this.catchPhrase = value; }
	setBs(value) { this.bs = value; }
}
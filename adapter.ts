
class Target {
	/**
	 * request
	 */
	public request(): void {
		console.log('request');		
	}
}

class Test {	
	public strangeRequest() {
		console.log('Test');
	}
}

class Adapter extends Target {
	constructor(private readonly adaptee: Test) {
		super();
	}

	public request(): void {
		this.adaptee.strangeRequest();
	}
}

let client = new Target();
client.request();

client = new Adapter(new Test());
client.request();
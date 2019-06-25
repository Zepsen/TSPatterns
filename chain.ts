
interface Handler {
	setNext(handler: Handler): Handler;

	handle(request: Company): Company;
}

type Answer = {
	msg: string[],
	res: boolean
}

abstract class AbstractHandler implements Handler{
	private next: Handler | null = null;
	
	setNext(handler: Handler): Handler {
		this.next = handler;
		return handler;
	}

	handle(request: Company): Company {			
		if(this.next) {					
			return this.next.handle(request);
		}

		return request;
	}
}

class ValidateName extends AbstractHandler {
	public handle(request: Company): Company {
		if(!request.name) {
			request.validate.msg.push('Name is bad \n');
			request.validate.res = false;
		}

		return super.handle(request);
	}
}

class ValidateAge extends AbstractHandler {
	public handle(request: Company): Company {
		if(request.age < 18) {
			request.validate.msg.push('Age is bad \n');
			request.validate.res = false;
		}

		return super.handle(request);
	}
}

class ValidateTest extends AbstractHandler {
	public handle(request: Company): Company {
		if(!request.test) {
			request.validate.msg.push('Test is bad \n');
			request.validate.res = false;
		}

		return super.handle(request);
	}
}

let valA = new ValidateAge();
let valB = new ValidateName();
let valC = new ValidateTest();

class Company {
	name: string = '';
	age: number = 11;
	test: boolean = false;

	validate: Answer = {
		msg: [],
		res: false
	};
}

const company = new Company();
valA.setNext(valB).setNext(valC);
console.log( valA.handle(company));

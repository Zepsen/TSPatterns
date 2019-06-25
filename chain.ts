
interface Handler<T> {
	setNext(handler: Handler<T>): Handler<T>;

	handle(request: T): T;
}

type Answer = {
	msg: string[],
	res: boolean
}

abstract class AbstractHandler<T> implements Handler<T>{
	private next: Handler<T> | null = null;
	
	setNext(handler: Handler<T>): Handler<T> {
		this.next = handler;
		return handler;
	}

	handle(request: T): T {			
		if(this.next) {					
			return this.next.handle(request);
		}

		return request;
	}
}

interface IName {
	name: string;
	validate: Answer;
}

class ValidateName<T extends IName> extends AbstractHandler<T> {
	public handle(request: T): T {
		if(!request.name) {
			request.validate.msg.push('Name is bad \n');
			request.validate.res = false;
		}

		return super.handle(request);
	}
}

class ValidateAge extends AbstractHandler<Company> {
	public handle(request: Company): Company {
		if(request.age < 18) {
			request.validate.msg.push('Age is bad \n');
			request.validate.res = false;
		}

		return super.handle(request);
	}
}

class ValidateTest extends AbstractHandler<Company> {
	public handle(request: Company): Company {
		if(!request.test) {
			request.validate.msg.push('Test is bad \n');
			request.validate.res = false;
		}

		return super.handle(request);
	}
}

let valA = new ValidateAge();
let valB = new ValidateName<Company>();
let valC = new ValidateTest();

class Company {
	name: string = '';
	age: number = 21;
	test: boolean = false;

	validate: Answer = {
		msg: [],
		res: false
	};
}


const company = new Company();
valA.setNext(valB).setNext(valC);
console.log( valA.handle(company));



interface IBase {
	show(): void;
}

class Base implements IBase{
	show(): void {
		console.log('base');
	}

}

class Decorator{
	private base: IBase;
	constructor(base: IBase) {
		this.base = base;
	}

	show(): void {
		console.log('decorator');		
		this.base.show();
	}
}


class NewDecorator {
	private base: IBase;
	constructor(base: IBase) {
		this.base = base;
	}

	show(): void {
		console.log('newdecorator');		
		this.base.show();
	}
}

let dec = new Decorator(new NewDecorator(new Decorator(new Base())));

dec.show();
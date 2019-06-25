
type TInfo = {
	firstName: string;
}

class User {
	info: TInfo = {
		firstName: "Test"
	};
}

interface IGen<T> {
	gen: T
}

class Gen<T> implements IGen<T> {
	gen: T;
	constructor(g: T) {
		this.gen = g;
	}
}


var defUser = new User();
console.log(defUser.info.firstName);

var genStr = new Gen<string>("string");
var genNum = new Gen<number>(1);

console.log(genStr.gen);
console.log(genNum.gen);



abstract class Abs {
	public abstract show(param:TInfo): void;

	public template() {
		console.log("Abs");		
		let res = this.do();
		this.log(res);
		res = 'this.do()';
		this.log(res);
	}

	protected abstract do(): string;
	private log(val: string) {
		console.log(val);
	}
}

class Der extends Abs {
	protected do(): string {
		return 'Der';		
	}

	public show(param: TInfo): void {
		console.log(param.firstName);
	}

	
	public over(t: number): number;
	public over(t: string): string;
	public over(t: User): string;
	public over(t: any): any {		
		switch(typeof t) {
			case 'number':
				console.log(typeof t);
				break;
			case 'string':
				console.log(typeof t);
				break;
			case 'object':
				switch(t.constructor.name) {
					case 'User':
						console.log(t.constructor.name);
						console.log(t instanceof User);						
						break;
				}
				
				break;
		}
	}
}

var der1 = new Der();
der1.show({firstName: 'Test'});

der1.template();

der1.over(1);
der1.over('test');
der1.over(defUser);

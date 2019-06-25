
abstract class BaseUserTemplate {
	
	public template() {
		if(this.validate()) {
			this.save();
		} else {		
			this.error();
		}
	}

	private error(): void {
		console.log('Error');		
	}
	
	protected abstract validate(): boolean;
	protected abstract save(): void;
}

class UserA extends BaseUserTemplate {
	protected validate(): boolean {
		return true;
	}	
		
	protected save(): void {
		console.log('Save');		
	}
}


class UserB extends BaseUserTemplate {
	protected validate(): boolean {
		return false;
	}	
		
	protected save(): void {
		console.log('Save');		
	}
}

let a = new UserA();
a.template();

let b = new UserB();
b.template();
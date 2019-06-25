
interface IUser {
	role: string;
}

class SimpleUser implements IUser {
	role: string = 'Simple';

}

class SupportUser implements IUser {
	role: string = 'Support';
}


abstract class Creator {
	protected abstract create(): IUser;

	public build(): void {
		const user = this.create();
		console.log(user.role);		
	}
}

class UserFactory extends Creator{
	protected create(): IUser {
		return new SimpleUser();
	}
}

class SupportFactory extends Creator {
	protected create(): IUser {
		return new SupportUser();
	}
}

class Factory {
	private creator: Creator;
	constructor() {
		this.creator = new SupportFactory();
	}
	
	public create() {
		this.creator.build();		
	}

	public changer(creator: Creator): void {
		this.creator = creator;
	}
}
const creator = new Factory();
creator.create();
creator.create();
creator.changer(new UserFactory);
creator.create();
creator.changer(new SupportFactory);
creator.create();
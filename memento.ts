
class Origin {

	private state: NState  = {
		name: 'def',
		age: 1
	};
	
	constructor(state: NState) {
		this.state = state;
	}

	public change(str: string): void {
		this.state.name = str;
		this.state.age++;
	}

	public show(): void {
		console.log(this.state);
	}
	
	public save(): Memento {
		return new OriginMemento({name: this.state.name, age: this.state.age});
	}

	public restore(memento: Memento): void {
		this.state = memento.getState();
	}
	
}

type NState = {
	name: string;
	age: number;
}

interface Memento {
	getState(): NState;
}

class OriginMemento implements Memento {	
	private state: NState;

	constructor(state: NState) {
		this.state = state;
	}

	getState(): NState {
		return this.state;
	}
}

class Caretaker {
	private mementos: Memento[] = [];

	constructor(private readonly original: Origin) {
		this.original = original;
	}

	public backup(): void {
		this.mementos.push(this.original.save());
	}

	public undo(): void {
		if (!this.mementos.length) {
            return;
		}
		
		const memento = this.mementos.pop();
		
		this.original.restore(memento!);
	}

	public show(): void {		
		this.mementos.forEach(i => console.log(i.getState()));		
	}
}

const originator = new Origin({name: 'Origin', age: 11});
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.show();

originator.change('new value');
caretaker.backup();
originator.show();

originator.change('test');
caretaker.backup();
originator.show();

caretaker.show();

originator.change('test1231231');
originator.show();

caretaker.undo();
originator.show();

caretaker.undo();
originator.show();

caretaker.undo();
originator.show();




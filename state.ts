
class Context {
	private state: State | undefined;
	
	constructor(state: State) {
		this.change(state);
	}

	change(state: State) {
		this.state = state;
		this.state.setContext(this);
	}

	redirect(): void {
		this.state!.redirect();
	}
}

abstract class State {
	private context: Context | undefined;;

	abstract redirect(): void;

	public setContext(context: Context) {
        this.context = context;
    }
}

class Video extends State {
	type: string = 'Video';
	redirect() {
		console.log('/RedirectToVideo');
	}
}

class Course extends State {
	type: string = 'Course';
	redirect() {
		console.log('/RedirectToCourse');
	}
}

const context = new Context(new Video());
context.redirect();

context.change(new Course());
context.redirect();
class App {
	constructor() {
		this.todoItems = document.querySelectorAll('.todo__list li');
		console.log(this.todoItems);
	}
}

export default new App();
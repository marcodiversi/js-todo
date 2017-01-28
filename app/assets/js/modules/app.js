class App {
	constructor() {
		this.todoInput = document.querySelector('.todo__input');
		this.todoList  = document.querySelector('.todo__list');
		this.addEvents();
	}
	
	addEvents() {
		document.addEventListener('click', (e) => {
			if (e.target.localName === 'li') {
				//do stuff when todo item is clicked
			}
		});
		
		this.todoInput.addEventListener('keydown', (e) => {
			if (e.keyCode === 13) {
				this.addTodo();
			}
		});
	}
	
	addTodo() {
		var li = document.createElement('li');
		var text = this.todoInput.value;
		this.todoList.append("<li>" + text + "</li>");
	}
}

export default new App();
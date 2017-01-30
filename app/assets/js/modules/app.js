class App { 
	constructor() {
		this.todoInput = document.querySelector('.todo__input');
		this.todoList  = document.querySelector('.todo__list');
		this.addEvents();
	}
	
	addEvents() {
		document.addEventListener('click', (e) => {
			if (e.target.localName === 'li') {
				e.target.classList.toggle('todo--completed');
			}
			
			if (e.target.localName === 'span') {
				const todo = e.target;
				this.deleteTodo(todo);
			}
		});
		
		this.todoInput.addEventListener('keydown', (e) => {
			// if the key is Return key
			if (e.keyCode === 13) { 
				this.addTodo();
			}
		});
	}
	
	addTodo() {
		const li = document.createElement('li');
		const span = document.createElement('span');
		
		li.append(this.todoInput.value);
		this.todoInput.value = "";
		
		span.append('x');
		li.append(span);
		
		this.todoList.append(li);
	}
	
	deleteTodo(todo) {
		todo.parentElement.remove();
	}
	
}

export default new App();
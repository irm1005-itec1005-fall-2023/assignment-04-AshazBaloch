let todos = [];

function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const newTodo = {
      id: todos.length + 1,
      text: todoText,
      completed: false,
    };

    todos.push(newTodo);
    todoInput.value = '';
    renderTodos();
  }
}

function toggleTodoStatus(id) {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  todos[todoIndex].completed = !todos[todoIndex].completed;
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById('todoList');
  const emptyState = document.getElementById('emptyState');

  todoList.innerHTML = '';

  
  if (todos.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
        <div>
          <button onclick="deleteTodo(${todo.id})" class="Done-button">Done</button>
          <button onclick="deleteTodo(${todo.id})" class="Delete-button">Delete</button>

        </div>
      `;
      todoList.appendChild(listItem);
    });
  }
}

// Initial rendering
renderTodos();

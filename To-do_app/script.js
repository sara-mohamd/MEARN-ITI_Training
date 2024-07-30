document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Add a new to-do item
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText) {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-button">Delete</button>
            `;
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });

    // Delete a to-do item
    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            const todoItem = e.target.parentElement;
            todoList.removeChild(todoItem);
        }
    });
});

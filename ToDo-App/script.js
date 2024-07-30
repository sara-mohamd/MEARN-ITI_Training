document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const finishedList = document.getElementById('finished-list');

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
      addTask(todoList, todoText, false);
      todoInput.value = '';
    }
  });

  const addTask = (list, text, isFinished) => {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
            <span contenteditable="false">${text}</span>
            <div class="task-buttons">
                ${!isFinished ? '<button class="complete-button">Complete</button>' : ''}
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        `;
    list.appendChild(todoItem);

    const completeButton = todoItem.querySelector('.complete-button');
    const editButton = todoItem.querySelector('.edit-button');
    const deleteButton = todoItem.querySelector('.delete-button');
    const taskText = todoItem.querySelector('span');

    if (completeButton) {
      completeButton.addEventListener('click', () => {
        list.removeChild(todoItem);
        addTask(finishedList, text, true);
      });
    }

    editButton.addEventListener('click', () => {
      const isEditable = taskText.isContentEditable;
      taskText.contentEditable = !isEditable;
      taskText.focus();
      editButton.textContent = isEditable ? 'Edit' : 'Save';
    });

    deleteButton.addEventListener('click', () => {
      list.removeChild(todoItem);
    });
  };
});

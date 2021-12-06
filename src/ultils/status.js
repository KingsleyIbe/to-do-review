import displayListItems from './template.js';
import Todo from './Todo.js';

const inputList = displayListItems();

function userActions() {
  inputList.forEach((item) => {
    item.addEventListener('change', () => {
      item.listItem.completed = !item.listItem.completed;
      localStorage.setItem('todoList', JSON.stringify(Todo.data));
    });
  });
}

export default userActions;
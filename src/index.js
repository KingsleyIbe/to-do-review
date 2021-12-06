import './css/style.css';
import displayListItems from './ultils/template.js';
import { addItem, init } from './ultils/component.js';
import toggleTheme from './ultils/toggle-theme.js';

displayListItems();
toggleTheme();

const inputField = document.querySelector('#text-input');
document.addEventListener('keypress', (e) => {
  const list = init(localStorage.getItem('todoList'));
  if (e.key === 'Enter' && inputField.value) {
    addItem(list, inputField.value);
    inputField.value = '';
    displayListItems();
  }
});

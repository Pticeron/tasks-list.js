import { nanoid } from 'nanoid';
import localStorage from "../services/storage";

class TodoList {
  #STORAGE_KEY = `TODO-LIST-ITEMS`;
  #ENTER_KEY_CODE = 'Enter';

    #appMarkup = `
    <div class="todo-list">
    <header class="header">
        <input class="header__input" type="text" placeholder="Enter an activity..">
        <button type="button" class="header__button"><i class="fa fa-plus"></i></button>
      </header>
      <main class="list-container">
        <ul class="list current-list"></ul>
        <hr>
        <ul class="list done-list"></ul>
      </main>
      </script>
    </div>
    `;

    #refs = {};

    #items = localStorage.load(this.#STORAGE_KEY) || [];

    init(targetNode) {
      const targetElement = targetNode || document.body;
      targetElement.innerHTML = this.#appMarkup;

      this.#defineRefs();
      this.#initListeners();
      this.#render();
  }


  #defineRefs() {
    this.#refs.app = document.querySelector('.todo-list');
    if (this.#refs.app) {
      this.#refs.addItemBtn = this.#refs.app.querySelector('.header__button');
      this.#refs.itemInput = this.#refs.app.querySelector('.header__input');
      this.#refs.currentList = this.#refs.app.querySelector('.current-list');
      this.#refs.doneList = this.#refs.app.querySelector('.done-list');
      this.#refs.listContainer = document.querySelector('.list-container');
    }
  }


#initListeners() {
  this.#refs.addItemBtn.addEventListener(`click`, this.#addTask.bind(this));
  this.#refs.listContainer.addEventListener(`click`, this.#taskContainerOnClick.bind(this));
  this.#refs.itemInput.addEventListener('keypress', this.#addTaskByEnterKey.bind(this));
}

// Оновлення стейту

#updateItems(items) {
  this.#items = items;
  this.#render();

  localStorage.save(this.#STORAGE_KEY, items);
  
}


#addTask() {
  const { value } = this.#refs.itemInput;

  if (value) {
    const items = [...this.#items];
    items.push({ id: nanoid(), value, done: false });

    this.#updateItems(items);
  }

  this.#refs.itemInput.value = null;
}

#addTaskByEnterKey(e) {
  if (e.code === this.#ENTER_KEY_CODE) {
    this.#addTask();
  }
}


#taskContainerOnClick(e) {
  const taskRef = e.target.closest('.list__item[data-id]');

  if (taskRef) {
    if (e.target.dataset.action === 'remove') {
      this.#removeTask(taskRef.dataset.id);
    }

      if(e.target.dataset.action === `toggle`) {
        this.#toggleTask(taskRef.dataset.id);
      }
    }
}

#removeTask(id) {
  const items = this.#items.filter((item) => item.id !== id);
    
  this.#updateItems(items);
}


#toggleTask(id) {
  const items = this.#items.map((item) => {
    if (id === item.id) {
      return {
        ...item,
        done: !item.done,
      };
    }

    return item;
  });
  
  this.#updateItems(items);
}

#render() {
  const getItem = ({id, value, done}) =>
  `
  <li class="list__item" data-id="${id}" data-done="${done}">
    <span class="list__item-name">${value}</span>
    <div class="list__buttons">
      <i class="list__button remove fa fa-trash-o" data-action="remove"></i>
      <span class="list__bar">|</span>
      <i 
        class="${`list__button fa ${done ? 'uncomplete fa-check-circle' : 'complete fa-check-circle-o'}`}"
        data-action="toggle"
      ></i>
    </div>
  </li>
`;

const todoTasks = this.#items.filter(({ done }) => !done);
const doneTasks = this.#items.filter(({ done }) => done);

this.#refs.currentList.innerHTML = todoTasks.map(getItem).join(``);
this.#refs.doneList.innerHTML = doneTasks.map(getItem).join(``);
}
}
  



const todoList = new TodoList ();
todoList.init();
// console.log(todoList);

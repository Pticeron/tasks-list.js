import { nanoid } from 'nanoid'


class TodoList {
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

    #items = [];

    init(targetNode) {
      const targetElement = targetNode || document.body;
      targetElement.innerHTML = this.#appMarkup;

      this.#defineRefs();
      this.#initListeners();
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
}
}
  



const todoList = new TodoList ();
todoList.init();
// console.log(todoList);

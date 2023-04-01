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
  this.#refs.app = document.querySelector(`.todo-list`);
  if (this.#refs.app) {
    this.#refs.addItemBtn = this.#refs.app.querySelector(`.header__button`);
    this.#refs.itemInput = this.#refs.app.querySelector(`.header__input`);
}
}

#initListeners() {
  this.#refs.addItemBtn.addEventListener(`click`, this.#addTask.bind(this));
}


#addTask() {
  const { value } = this.#refs.itemInput;

    if (value) {
      this.#items.push({ id: nanoid(), value, done: false });
      console.log(this.#items);
  }
}
}
  



const todoList = new TodoList ();
todoList.init();
// console.log(todoList);

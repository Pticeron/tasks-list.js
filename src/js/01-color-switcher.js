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

    init(targetNode) {
      const targetElement = targetNode || document.body;
      targetElement.innerHTML = this.#appMarkup;

      this.#refs.app = document.querySelector(`.todo-list`);
      if (this.#refs.app) {
        this.#refs.addItemBtn = this.#refs.app.querySelector(`.header__button`);
        this.#refs.itemInput = this.#refs.app.querySelector(`.header__input`);

        this.#refs.addItemBtn.addEventListener(`click`, this.#addTask.bind(this));
  }
}
#addTask() {
  const { value } = this.#refs.itemInput;
  console.log(value);
}
  
}


const todoList = new TodoList ();
todoList.init();
// console.log(todoList);

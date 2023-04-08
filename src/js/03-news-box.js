const markup = `
    <section class="news-app">
    <section class="header">
        <div class='header__wrapper'>
            <a class='header__logo'>
                <i class="fa-regular fa-newspaper"></i>
            </a>
            <div class='header__brand'>News Box</div>
        </div>
    </section>
    <form class="search">
        <div class="search__wrapper">
            <input class="search__field" type="text" placeholder="What are you looking for?" name="search">
            <button class="search__btn" type="submit">
            <span class="search__icon">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-circle-notch"></i>
            </span>
            </button>
        </div>
    </form>
    <div class="articles"></article> 
    </div>
    <section class="load-more">
    <button class="load-more__btn" hidden>More</button>
    </section>
    </section>
    `;

    // add to DOM

document.body.innerHTML = markup;

// add eventListeners

const ref = {
    search: document.querySelector(`.news-app .search`),
    articles: document.querySelector(`.news-app .articles`),
};

ref.search.addEventListener(`submit`, (e) => {
    e.preventDefault();
    console.log(e.currentTarget.elements.search.value);

    fetch(
        'https://newsapi.org/v2?364fa8ee9d7346e7bae6dc97f478dce1'
    ).then((data) => console.log(data));
});


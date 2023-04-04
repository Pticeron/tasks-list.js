class Countdown {
    start(year) {
    
    setInterval(() => {
    const delta = new Date(year, 0) - Date.now();

    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.round((delta % (1000 * 60)) / 1000);
    
    console.log({ days, hours, minutes, seconds });
    
    }, 1000)
    }

    stop() {
        console.log(`stop`);
    }
}


const markup = `
<section class="countdown">
      <article id="js-countdown" class="countdown__timer">
          <section class="countdown__value countdown__days">00</section>
          <section class="countdown__value">:</section>
          <section class="countdown__value countdown__hours">00</section>
          <section class="countdown__value">:</section>
          <section class="countdown__value countdown__minutes">00</section>
          <section class="countdown__value">:</section>
          <section class="countdown__value countdown__seconds">00</section>
      </article>
      <form class="countdown__actions" data-action="start">
        <input class="countdown__datepicker" type="number" min="2024" max="2099" name="year" step="1" value="2024" />
        <button type='submit' class="countdown__toggle">start</button>
      </form>
  </section>
`;
// add to DOM

document.body.innerHTML = markup;
const countdown = new Countdown();

// add refs

const ref = {
    actionform: document.querySelector(`form.countdown__actions`),
    days: document.querySelector(`.countdown__days`),
    hours: document.querySelector(`.countdown__hours`),
    minutes: document.querySelector(`.countdown__minutes`),
    seconds: document.querySelector(`.countdown__seconds`),
};

ref.actionform.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const submitBtn = e.currentTarget.querySelector(`button[type="submit"]`);
    const { year, dataset} = e.currentTarget;

    if(e.currentTarget.dataset.action === `start`) {
        submitBtn.textContent = `stop`;
        dataset.action = `stop`;
        year.disabled = true;

        countdown.start(year.value);
    } else {
        submitBtn.textContent = `start`;
        dataset.action = `start`;
        year.disabled = false;

        countdown.stop();
    }
});

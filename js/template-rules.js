import {getElementFromTemplate, changeGameScreen} from '../js/utils.js';
import {gameScreenFirstTemplate} from '../js/template-game-1.js';
import {greetingTemplate} from '../js/template-greeting.js';

const template = `<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;

const rulesTemplate = getElementFromTemplate(template);

const startGame = rulesTemplate.querySelector(`.rules__button`);

const userNameInput = rulesTemplate.querySelector(`.rules__input`);

userNameInput.addEventListener(`keyup`, (evt) => {
  const name = evt.target.value.trim();
  if (name.length) {
    startGame.removeAttribute(`disabled`);
  } else {
    startGame.setAttribute(`disabled`, `disabled`);
  }
});

startGame.addEventListener(`click`, () => {
  changeGameScreen(gameScreenFirstTemplate);
});

const backButton = rulesTemplate.querySelector(`.back`);
if (backButton) {
  backButton.addEventListener(`click`, () => {
    changeGameScreen(greetingTemplate);
  });
}

export {rulesTemplate};

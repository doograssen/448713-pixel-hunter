import {getElementFromTemplate, changeGameScreen} from '../js/utils.js';
import {greetingTemplate} from '../js/template-greeting.js';

const template = `<section class="intro">
     <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
     <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
     </section>`;

export const introTemplete = getElementFromTemplate(template);

const startButton = introTemplete.querySelector(`.intro__asterisk`);

startButton.addEventListener(`click`, () => {
  changeGameScreen(greetingTemplate);
});

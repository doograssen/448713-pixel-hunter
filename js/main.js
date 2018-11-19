'use strict';

const STARTSCREEN = 0;
const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const CONTROLS = `
   <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>`;

const mainElement = document.querySelector(`#main`);
const bodyElement = document.querySelector(`body`);

/**
 *
 * @param {Object} element
 */
const toggleControls = (element) => {
  const controlElement = bodyElement.querySelector(`.arrows__wrap`);
  const gameScreen = element.querySelector(`.game`);
  if (gameScreen) {
    if (!controlElement) {
      addControlsElement();
    }
  } else {
    if (controlElement) {
      removeControlsElement();
    }
  }
};

/**
 *
 */
const removeControlsElement = () => {
  const controlElement = bodyElement.querySelector(`.arrows__wrap`);
  controlElement.removeEventListener(`click`, onClickControlsHandler);
  controlElement.removeEventListener(`click`, onMouseDownControlsHandler);
  controlElement.removeEventListener(`click`, onMouseUpControlsHandler);
  bodyElement.removeChild(controlElement);
};

/**
 *
 */
const addControlsElement = () => {
  const newElement = document.createElement(`div`);
  newElement.classList.add(`arrows__wrap`);
  newElement.innerHTML = CONTROLS;
  newElement.addEventListener(`click`, onClickControlsHandler);
  newElement.addEventListener(`mousedown`, onMouseDownControlsHandler);
  newElement.addEventListener(`mouseup`, onMouseUpControlsHandler);
  bodyElement.appendChild(newElement);
};

/**
 *
 * @param {Object} evt
 */
const onClickControlsHandler = (evt) => {
  const index = (Array.from(evt.target.parentElement.children).indexOf(evt.target));
  switch (index) {
    case 2:
      select(current + 1);
      break;
    case 1:
      select(current - 1);
      break;
  }
};

/**
 *
 * @param {Object} evt
 */
const onMouseDownControlsHandler = (evt) => {
  evt.target.style.borderColor = `#df4e4e`;
  evt.target.style.color = `#df4e4e`;
};

/**
 *
 * @param {Object} evt
 */
const onMouseUpControlsHandler = (evt) => {
  evt.target.removeAttribute(`style`);
};

/**
 *
 * @type {(string | DocumentFragment)[]}
 */
const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

/**
 *
 * @param {Object} element
 */
const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
  toggleControls(element);
};

/**
 *
 * @type {number}
 */
let current = STARTSCREEN;

/**
 *
 * @param {number} index
 */
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

/**
 *
 */
document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

select(STARTSCREEN);

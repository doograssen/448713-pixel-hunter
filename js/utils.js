/**
 *
 * @param {string} htmlString
 * @return {HTMLElement}
 */
export const getElementFromTemplate = (htmlString) => {
  const container = document.createElement(`div`);
  container.innerHTML = htmlString.trim();
  return container;
};

const mainElement = document.querySelector(`#main`);

/**
 *
 * @param {Object} element
 */
export const changeGameScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

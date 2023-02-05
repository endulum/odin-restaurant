export function $(selector) {return document.querySelector(selector)};
export const content = ((main) => {main.id = 'content'; return main;})(document.createElement('main'));
export function empty() {content.innerHTML = ''; console.warn('All existing content emptied!');};
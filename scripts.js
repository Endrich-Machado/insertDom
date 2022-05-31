
const insertElement = document.createElement('div')

insertElement.className = 'testeClass';

insertElement.innerHTML = `<button>teste</button>`;

const pai = document.querySelector('.email');

pai.appendChild(insertElement);
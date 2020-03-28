import createSwitcher from '../common/createSwither.js';

function init() {
    this.target = document.getElementById('burger-menu');
    this.headerRow = document.getElementById('header-row');
    this.target.addEventListener('click', this);

    this.toggleBurger = createSwitcher('burger-menu', 'burger-menu-active', true);
}

export default init;
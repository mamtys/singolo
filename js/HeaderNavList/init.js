import createSwither from '../common/createSwither.js';

function init() {
    this.target = document.getElementById('header-nav');
    this.target.addEventListener('click', this);
    this.swithActive = createSwither('nav-link', 'nav-active');
}

export default init;
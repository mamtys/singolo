import createSwither from '../common/createSwither.js';

function init() {
    this.target = document.getElementById('portfolio-example-group');
    this.target.addEventListener('click', this);
    this.swithActive = createSwither('portfolio-example-item', 'portfolio-example-active', true);
}

export default init;
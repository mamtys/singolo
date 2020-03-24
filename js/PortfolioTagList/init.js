import createSwither from '../common/createSwither.js';

function init() {
    this.target = document.getElementById('portfolio-tag-group');
    this.target.addEventListener('click', this);
    this.switchActive = createSwither('portfolio-tag-item', 'portfolio-tag-active');
}

export default init;
import createToggler from './createToggler.js';

function init() {
    this.target = document.getElementById('slider');
    this.sliders = this.target.getElementsByClassName('slider-item');
    this.target.addEventListener('click', this);
    this.target.addEventListener('transitionend', this);

    this.phoneToggle = createToggler('phone', 'phone-screen', 'phone-screen-active');

    this.index = this.sliders.length - 1;
    this.transitionEnded = true;
    this.current = null;
    this.previous = null;
    this.direction = null;
}

export default init;
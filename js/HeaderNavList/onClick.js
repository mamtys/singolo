import BurgerMenu from '../BurgerMenu/index.js';

function onClick(event) {
    const wasSwitched = this.swithActive(event);
    if (wasSwitched && document.body.clientWidth < 768) {
        BurgerMenu.show();
    }
}

export default onClick;
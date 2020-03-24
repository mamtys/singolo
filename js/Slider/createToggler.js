function createClosestToggler(parentClass, targetClass, toggleClass) {
    return function toggle(event) {
        if (!event.target.closest('.' + parentClass)) {
            return;
        }

        if (event.target.matches('.' + targetClass)) {
            event.target.classList.toggle(toggleClass);
        } else {
            event.target.querySelector('.' + targetClass).classList.toggle(toggleClass);
        }
    }
}

export default createClosestToggler;

function createSwither(targetClass, activeClass, toggleSelf = false) { 
    let active = null;
    return function switchActiveElement(event) {
        if (!event.target.matches('.' + targetClass)) {
            return false;
        }

        if (toggleSelf && event.target.classList.contains(activeClass)) {
            active = null;
            event.target.classList.remove(activeClass);
            return true;
        } 

        if (!toggleSelf && event.target.classList.contains(activeClass)) {
            return false;
        }

        if (!active) {
            active = event.currentTarget.querySelector('.' + activeClass)
        } 

        if (active) {
            active.classList.remove(activeClass);
        } 

        event.target.classList.add(activeClass);
        active = event.target;


        return true;
    }
}

export default createSwither;
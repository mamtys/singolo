
function onTransitionEnd(event) {
    this.transitionEnded = true;
    this.previous.style = {};
    this.previous.style.zIndex = 0;
}

export default onTransitionEnd;
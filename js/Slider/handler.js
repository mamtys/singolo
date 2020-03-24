
function handler(event) {
    switch(event.type) {
        case 'click': return this.onClick(event);
        case 'transitionend': return this.onTransitionEnd(event);
    }
}

export default handler;
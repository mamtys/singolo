
function handler(event) {
    switch(event.type) {
        case 'click': return this.onClick(event);
    }
}

export default handler;
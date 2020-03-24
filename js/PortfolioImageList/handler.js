
function handler(event) {
    switch(event.type) {
        case 'click': this.onClick(event); break;
    }
}

export default handler;
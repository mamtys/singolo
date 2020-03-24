
function handler(event) {
    switch(event.type) {
        case 'submit': return this.onSubmit(event); 
    }
}

export default handler;
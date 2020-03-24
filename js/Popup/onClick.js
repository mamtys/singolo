
function onClick(event) {
    event.currentTarget.remove();
    document.body.classList.remove('darken');
    event.currentTarget.removeEventListener('click', this);
}

export default onClick;
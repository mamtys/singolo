
import create from './create.js';

function spawn(subject, description) {
    const popup = create(subject, description);

    document.body.classList.add('darken');

    popup.addEventListener('click', this, true);

    document.body.appendChild(popup);
}

export default spawn;
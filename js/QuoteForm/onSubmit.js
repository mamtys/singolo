import Popup from '../Popup/index.js';

function onSubmit(event) {
    event.preventDefault();

    const subject = event.target['quote-subject'].value;
    const description = event.target['quote-description'].value;

    Popup.spawn(subject, description);

    event.target.reset();
}

export default onSubmit;
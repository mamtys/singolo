(function () {
    let quoteForm = document.getElementById('quote-form');
    quoteForm.addEventListener('submit', () => {
        event.preventDefault();

        const subject = event.target['quote-subject'].value;
        const description = event.target['quote-description'].value;

        document.body.appendChild(createPopUp(subject, description, 'form', () => {
            document.body.classList.remove('darken');
        }));

        document.body.classList.add('darken');
        event.target.reset();
    })
})();

function createPopUp(subject = 'No Subject', description = 'No Description', name, cb) {
    const popup = document.createElement('template');
    const html = `
        <div class="popup">
            <div class="popup-item">
            <span class="popup-title">The letter was sent</span>
            </div>
            <div class="popup-item">
            <span>Subject: </span>
            <span>${subject}</span>
            </div>
            <div class="popup-item">
            <span>Description: </span>
            <span>${description}</span>
            </div>
            <button class="popup-button" id="${name}-popup-button">Ok</button>
        </div>
    `;
    popup.innerHTML = html;

    popup.content.firstElementChild.addEventListener('click', () => {
        if (!event.target.matches('.popup-button')) {
            return;
        }
        if (cb) cb();
        event.currentTarget.remove();
    })

    return popup.content.firstElementChild;
}
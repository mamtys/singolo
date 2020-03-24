function create(subject, description) {
    if (subject.length === 0) {
        subject = 'No Subject';
    }

    if (description.length === 0) {
        description = 'No Description';
    }

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
            <button class="popup-button">Ok</button>
        </div>
    `;
    popup.innerHTML = html;

    return popup.content.firstElementChild;
}

export default create;
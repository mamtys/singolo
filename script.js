(function () {
    let headerNav = document.getElementById('header-nav');
    let active = headerNav.getElementsByClassName('nav-active')[0];
    headerNav.addEventListener('click', (event) => {
        if (!event.target.matches('.nav-item')) {
            return;
        }

        if (active) {
            active.classList.remove('nav-active');
        }

        event.target.classList.add('nav-active');

        active = event.target;
    })
})();

(function () {
    let portfolioTags = document.getElementById('portfolio-tag-group');
    let active = portfolioTags.getElementsByClassName('portfolio-tag-active')[0];
    let portfolioImages = document.getElementById('portfolio-example-group');

    portfolioTags.addEventListener('click', (event) => {

        if (!event.target.matches('.portfolio-tag-item')) {
            return;
        }

        if (event.target.isEqualNode(active)) {
            return;
        }

        if (active) {
            active.classList.remove('portfolio-tag-active');
        }

        event.target.classList.add('portfolio-tag-active');

        active = event.target;
    })
})();

(function () {
    let portfolioImages = document.getElementById('portfolio-example-group');
    let active = null;
    portfolioImages.addEventListener('click', () => {
        if (!event.target.matches('.portfolio-example-item')) {
            return;
        }

        if (event.target.isEqualNode(active)) {
            active = null;
            event.target.classList.remove('portfolio-example-active');
            return;
        }

        if (active) {
            active.classList.remove('portfolio-example-active');
        }

        event.target.classList.add('portfolio-example-active');

        active = event.target;
    })
})();


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
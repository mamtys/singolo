(function () {
    let headerNav = document.getElementById('header-nav');
    let active = headerNav.getElementsByClassName('nav-active')[0];
    headerNav.addEventListener('click', (event) => {
        if (!event.target.matches('.nav-link')) {
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

        classes = shuffle(PORTFOLIO_IMG_ClASSES);
        [...portfolioImages.children].forEach((element, ind) => {
            element
                .querySelector('.portfolio-example-item')
                .className = `portfolio-example-item ${classes[ind]}`;
        });
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


(function () {
    let slider = document.getElementById('slider');
    let sliders = slider.getElementsByClassName('slider-item');
    let counter = sliders.length - 1;
    let transitionEnded = true;
    let prev;
    let direction;

    slider.addEventListener('click', (event) => {
        toggleChildClass('.phone', '.phone-screen', 'phone-screen-active', event);

        if (!transitionEnded) {
            return;
        }

        if (event.target.matches('.slider-arrow')) {
            direction = Number(event.target.dataset['direction']);
            prev = sliders[counter];

            prev.style.transitionDuration = '1.5s';
            prev.style.transform += `translateX(${direction*100}%)`;
            prev.style.zIndex = 5;

            counter = direction + counter;
            if (counter < 0) {
                counter = sliders.length - 1;
            }
            if (counter > sliders.length - 1) {
                counter = 0;
            }

            sliders[counter].style.left = `${-direction*100}%`;
            sliders[counter].style.transitionDuration = '1.5s';
            sliders[counter].style.transform += `translateX(${direction*100}%)`;
            sliders[counter].style.zIndex = 5;

            transitionEnded = false;
        }
    })

    slider.addEventListener('transitionend', (event) => {
        transitionEnded = true;
        prev.style = {};
        prev.style.zIndex = 0;
    })

})();

function toggleClass(targetSelector, toggleClass, event) {

    if (!event.target.matches(targetSelector)) {
        return false;
    }
    event.target.classList.toggle(toggleClass);
    return true;
}

function toggleChildClass(parentSelector, targetSelector, toggleClass, event) {
    if (!event.target.closest(parentSelector)) {
        return;
    }

    if (event.target.matches(targetSelector)) {
        event.target.classList.toggle(toggleClass);
    } else {
        event.target.querySelector(targetSelector).classList.toggle(toggleClass);
    }
}

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


function shuffle(array) {
    return [...array].sort(() => (Math.random() - 0.5));
}


const PORTFOLIO_IMG_ClASSES = [...Array(12)].map((el, ind) => `portfolio-img${ind + 1}`);
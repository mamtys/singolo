function animate() {
    let {
        sliders
    } = this;

    if (!this.transitionEnded) {
        return;
    }

    if (event.target.matches('.slider-arrow')) {
        this.direction = Number(event.target.dataset['direction']);
        this.previous = sliders[this.index];

        this.previous.style.transitionDuration = '0.4s';
        this.previous.style.transform += `translateX(${this.direction*100}%)`;
        this.previous.style.zIndex = 5;

        this.index = this.direction + this.index;
        if (this.index < 0) {
            this.index = sliders.length - 1;
        }
        if (this.index > sliders.length - 1) {
            this.index = 0;
        }

        this.current = sliders[this.index];
        this.current.style.left = `${-this.direction*99}%`;
        this.current.style.transitionDuration = '0.4s';
        this.current.style.transform += `translateX(${this.direction*99}%)`;
        this.current.style.zIndex = 5;

        this.transitionEnded = false;
    } 
}

export default animate;
function shufle() {
    const classes = [...Array(12)]
        .map((el, ind) => `portfolio-img${ind + 1}`)
        .sort(() => Math.random() - 0.5);

    [...this.target.children].forEach((element, ind) => {
        element
            .querySelector('.portfolio-example-item')
            .className = `portfolio-example-item ${classes[ind]}`;
    });
}

export default shufle;
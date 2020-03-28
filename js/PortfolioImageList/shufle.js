function shufle() {
    const classes = [...Array(12)]
        .map((el, ind) => `portfolio-img${ind + 1}`)
        .sort(() => Math.random() - 0.5);

    [...this.target.children].forEach((element, ind) => {
        element
            .className = `portfolio-example-item responsive-box ${classes[ind]}`;
    });
}

export default shufle;
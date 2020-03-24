import PortfolioImageList from '../PortfolioImageList/index.js';

function onClick(event) {
    const activeValue = this.switchActive(event);
    if (activeValue) {
        PortfolioImageList.shufle();
    }
    
}

export default onClick;
import HeaderNavList from '../HeaderNavList/index.js';

function show() {
    this.target.classList.toggle('burger-menu-active');
    this.headerRow.classList.toggle('header-row-compact');
    HeaderNavList.toggleClass('nav-list-active');
}

export default show;
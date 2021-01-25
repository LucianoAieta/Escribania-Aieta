class Search {
    constructor (search, input, minimize) {
        this.search = search;
        this.input = input;
        this.minimize = minimize;
    };
    showInput() {
        let header = document.querySelector('.organism-header-main .atom-title-large');
        const show = item => {
            if (window.screen.availWidth <= 768) header.style.display = 'none';
            item.style.display = 'inline';
            setTimeout(() => item.style.opacity = 1, 100);
        };
        show(this.minimize);
        show(this.input);
    };
    hideInput() {
        let header = document.querySelector('.organism-header-main .atom-title-large');
        const hide = item => {
            if (window.screen.availWidth <= 768) header.style.display = 'block';
            item.style.opacity = 0;
            setTimeout(() => item.style.display = 'none', 300);
        }
        hide(this.minimize);
        hide(this.input);
    }
};

export {Search};
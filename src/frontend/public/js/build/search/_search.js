var Search = /** @class */ (function () {
    function Search(search, input, minimize) {
        this.search = search;
        this.input = input;
        this.minimize = minimize;
    }
    Search.prototype.showInput = function () {
        var header = (document.querySelector('.organism-header-main .atom-title-large'));
        var show = function (item) {
            if (window.screen.availWidth <= 768)
                header.style.display = 'none';
            item.style.display = 'inline';
            setTimeout(function () { return (item.style.opacity = '1'); }, 100);
        };
        show(this.minimize);
        show(this.input);
    };
    Search.prototype.hideInput = function () {
        var header = (document.querySelector('.organism-header-main .atom-title-large'));
        var hide = function (item) {
            if (window.screen.availWidth <= 768)
                header.style.display = 'block';
            item.style.opacity = 0;
            setTimeout(function () { return (item.style.display = 'none'); }, 300);
        };
        hide(this.minimize);
        hide(this.input);
    };
    Search.run = function () {
        var search_button = document.querySelector('#search');
        var search_input = document.querySelector('#search-input');
        var minimize_button = document.querySelector('#minimize');
        var search = new Search(search_button, search_input, minimize_button);
        search_button.addEventListener('click', function () { return search.showInput(); });
        minimize_button.addEventListener('click', function () { return search.hideInput(); });
    };
    return Search;
}());
export default Search;

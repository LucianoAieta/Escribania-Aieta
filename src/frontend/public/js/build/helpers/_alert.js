var Alert = /** @class */ (function () {
    function Alert() {
    }
    Alert.run = function (icon, title, content) {
        var alert = document.querySelector('.organism-alert');
        alert === null ? this.showAlert(icon, title, content) : alert;
    };
    Alert.showAlert = function (icon, title, content) {
        var _this = this;
        var alert = document.createElement('div');
        alert.innerHTML = "\n            <img id='card_menu' class='atom-icon-extra-large' src='../assets/icons/svg/" + icon + ".svg'/>\n            <div class='molecule-alert'>\n                <div class='molecule-alert-header'>\n                    <p class='atom-title-medium'>" + title + "</p>\n                    <img id='close-alert' src='../assets/icons/svg/cross-black.svg' class='atom-icon-large'/>\n                </div>\n                <p class='molecule-alert-body atom-text-small'>" + content + "</p>\n            </div>\n        ";
        alert.classList.add('organism-alert');
        var body = document.querySelector('body');
        body.appendChild(alert);
        setTimeout(function () { return (alert.style.transform = 'translateX(-5%)'); }, 100);
        var close = document.querySelector('.molecule-alert #close-alert');
        close.addEventListener('click', function () { return _this.hideAlert(); });
        setTimeout(function () {
            var alert2 = document.querySelector('.organism-alert');
            alert2 !== null ? _this.hideAlert() : alert2;
        }, 2500);
    };
    Alert.hideAlert = function () {
        var alert = document.querySelector('.organism-alert');
        alert.style.transform = 'translateX(100%)';
        setTimeout(function () { return alert.remove(); }, 400);
    };
    return Alert;
}());
export default Alert;

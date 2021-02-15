export var cardExitAnimation = function (overlay, card, exit) {
    card.style.opacity = '0';
    card.style.transform = 'scale(.4)';
    if (exit)
        exit.style.opacity = '0';
    setTimeout(function () {
        card.remove();
        if (exit)
            exit.remove();
        overlay.style.visibility = 'hidden';
    }, 200);
};
export var cardEntranceAnimation = function (overlay, card, exit) {
    overlay.style.visibility = 'visible';
    overlay.appendChild(card);
    if (exit)
        overlay.appendChild(exit);
    setTimeout(function () {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    }, 10);
};

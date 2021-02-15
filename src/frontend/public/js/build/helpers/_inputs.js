export var addInputsListeners = function (inputs) {
    var inputsLenght = inputs.length;
    var _loop_1 = function (i) {
        inputs[i].addEventListener('keypress', function (key) {
            if (key.code === 'Enter') {
                inputs[i + 1] != null ? inputs[i + 1].focus() : inputs[0].focus();
            }
        });
    };
    for (var i = 0; i < inputsLenght; i++) {
        _loop_1(i);
    }
};

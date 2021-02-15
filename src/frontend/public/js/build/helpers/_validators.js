export var verifyIfIsEmpty = function (data) {
    return new Promise(function (res, rej) {
        var verifyValues = function (data) { return data.some(function (item) { return item === ''; }); };
        verifyValues(Object.values(data))
            ? rej('empty fields')
            : res('correct fields');
    });
};

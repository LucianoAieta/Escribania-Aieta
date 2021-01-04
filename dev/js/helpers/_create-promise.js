const createPromise = (funcion) => {
    return new Promise((res, rej) => {
        funcion;
        res();
    });
};

export {createPromise};
const addClass = (e) => {
    e.classList.add("active");
    e.readOnly = false;
};
const removeClass = (e) => {
    e.classList.remove("active");
    e.readOnly = true;
};

export {addClass, removeClass};

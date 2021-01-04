let inputs = document.querySelectorAll('input[class]');
let title = inputs[0];
let number = inputs[1];
let submit = inputs[2];
let textarea = document.querySelector("textarea");

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const body = document.querySelector(".body");
    const overlay = document.querySelector(".overlay--petitions");
    const carga = document.querySelector(".charge");
    let escritura = `{"title" : ${title.value},"amount" : ${number.value},"content" : ${textarea.value}}`;

    let verificarEscritura = () => {
        try {
            if (title.value.length == 0 || number.value.length == 0 || textarea.value.length == 0 ) throw("completar");
        } finally {};
    };

    const completeCampos = () => {
        const mensaje = document.createElement("DIV");
        mensaje.innerHTML = `
            <p class="card__title--petition-incomplete">Complete los campos requeridos</p>
            <i class="card__icon--petition-incomplete fas fa-exclamation"></i>
        `;
        body.appendChild(mensaje);
        mensaje.classList.add("card--petition-incomplete");
        mensaje.classList.add("active");
        setTimeout(() => mensaje.remove(), 5000);
    };

    const generarCarga = () => {
        overlay.style.opacity = 1;
        overlay.style.visibility = "visible";
        carga.style.opacity = 1;
    };

    const quitarCarga = () => {
        carga.style.opacity = 0;
    };

    const peticionExitosa = () => {
        const tarjeta = document.createElement("DIV");

        tarjeta.innerHTML = `
            <i class="card__icon--petition-success far fa-check-circle"></i>
            <p class="card__title--petition-success">¡Escritura creada correctamente!</p>
        `;
        overlay.appendChild(tarjeta);
        tarjeta.classList.add("card--petition-success")
        tarjeta.style.opacity = 1;
        

        setTimeout(() => {
            tarjeta.remove();
            overlay.style.opacity = 0;
            overlay.style.visibility = "hidden";
        }, 2000);
    };
    
    const peticionErronea = () => {
        const tarjeta = document.createElement("DIV");
        tarjeta.innerHTML = `
            <i class="card__icon--petition-failed far fa-times-circle"></i>
            <p class="card__title--petition-failed">Ha ocurrido un error al crear la escritura, inténtalo de nuevo.</p>
        `;
        overlay.appendChild(tarjeta);
        tarjeta.classList.add("card--petition-failed")
        tarjeta.style.opacity = 1;

        setTimeout(() => {
            tarjeta.remove();
            overlay.style.opacity = 0;
            overlay.style.visibility = "hidden";
        }, 2000);
    };

    const limpiarInputs = () => {
        for(input in inputs) {
            inputs[input].value = null;
        }
        textarea.value = null;
        submit.value = "Crear";
    };

    let enviarEscritura = (obj) => {
        fetch("https://reqres.in/api/users", {
            method : "POST",
            body : obj,
            header : {"Content-type" : "application/json"}
        })
            .then(() => document.addEventListener("loadend", quitarCarga()))
            .then(() => document.removeEventListener("loadend", quitarCarga()))
            .then(() => peticionExitosa())
            .then(() => limpiarInputs())
            .catch(() => peticionErronea());
    };

    // FUNCION MAESTRA
    (() => {
        try {
            const verificar = verificarEscritura();
            const enviar = enviarEscritura(escritura);
            const carga = generarCarga();
        } 
        catch (e) {
            if(e == "completar") completeCampos();
            else peticionErronea();
        };
    })();
});
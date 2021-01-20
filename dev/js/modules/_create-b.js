class Clean {
    static cleanInputs (inputs, textarea, submit) {
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = null;
        };
        textarea.value = null;
        submit.value = 'Crear';
    };
};

class Confirm {
    static ask (overlay) {
        const card = document.createElement('DIV');
        card.innerHTML = `
            <p class='card__title--ask'>¿Está usted seguro de crear la siguiente escritura?</p>
            <div class='card__button-container--ask'>
                <button class='card__button--ask'>Sí</button>
                <button class='card__button--ask'>No</button>
            </div>
        `;
        overlay.appendChild(card)
        card.classList.add('card--ask');
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;

        let yes = document.querySelector('.card__button--ask:first-child');
        let no = document.querySelector('.card__button--ask:last-child');
        return [yes, no, card];
    };
    static endAsk ([overlay, card], type) {
        card.style.opacity = 0;
        card.style.visibility = 'hidden';
        card.remove();
        if (type === 'no') {overlay.style.visibility = 'hidden'; overlay.style.opacity = 0;};
    };
};

class Error {
    static incomplete (body) {
        const card = document.createElement('DIV');
        card.innerHTML = `
            <p class='card__title--request-incomplete'>Complete los campos requeridos</p>
            <i class='card__icon--request-incomplete fas fa-exclamation'></i>
        `;
        body.appendChild(card);
        card.classList.add('card--request-incomplete');
        card.classList.add('active');
        setTimeout(() => card.remove(), 5000);
    };

    static requestError (overlay) {
        const card = document.createElement('DIV');
        card.innerHTML = `
            <i class='card__icon--request-failed far fa-times-circle'></i>
            <p class='card__title--request-failed'>Ha ocurrido un error al crear la escritura, inténtalo de nuevo.</p>
        `;
        overlay.appendChild(card);
        card.classList.add('card--request-failed');
        card.style.opacity = 1;

        setTimeout(() => {
            card.remove();
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
        }, 2000);
    };
};

class Loading {
    static generateLoading (overlay, load) {
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
        load.style.opacity = 1;
    };
    
    static removeLoading (load) {
        load.style.opacity = 0;
    };
};

class Request {
    static requestPost (escritura) {
        return fetch('https://reqres.in/api/users', {
        method : 'POST',
        body : escritura,
        header : {'Content-type' : 'application/json'}
        });
    };
};

class Success {
    static requestSuccess (overlay) {
        const card = document.createElement('DIV');
    
        card.innerHTML = `
            <i class='card__icon--request-success far fa-check-circle'></i>
            <p class='card__title--request-success'>¡Escritura creada correctamente!</p>
        `;
        overlay.appendChild(card);
        card.classList.add('card--request-success');
        card.style.opacity = 1;
        
        setTimeout(() => {
            card.remove();
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
        }, 2000);
    };
};

class Verify {
    static verifyInputs (title, number, textarea) {
        return new Promise((res, rej) => {
            if (title.value.length == 0 || number.value.length == 0 || textarea.value.length == 0 ) rej('incomplete');
            else res();
        });
    };
};

export {Clean, Confirm, Error, Loading, Request, Success, Verify};

import {Confirm, Clean, Error, Loading, Request, Success, Verify } from '../modules/_create-b';

let [title, number, submit] = document.querySelectorAll('input[class]');
let textarea = document.querySelector('textarea');

submit.addEventListener('click', async () => {
    const overlay = document.querySelector('.overlay--requests');

    // Verificación de formulario vacío
    let incomplete;
    try {
        await Verify.verifyInputs(title, number, textarea);
    } catch (e) {
        const body = document.querySelector('body');
        Error.incomplete(body);
        incomplete = true;
    };

    let ask;
    if (incomplete) ask = null;
    else ask = Confirm.ask(overlay);
    const [yes, no, card] = ask;

    let escritura = `{'title' : ${title.value},'amount' : ${number.value},'content' : ${textarea.value}}`;
    
    // Petición post
    const post = async () => {
        const load = document.querySelector('.load');
        try {
            Loading.generateLoading(overlay, load);

            await Request.requestPost(escritura);

            document.addEventListener('loadend', () => Loading.removeLoading(load));
            Success.requestSuccess(overlay);
            Clean.cleanInputs([title, number, submit], textarea, submit);
        }
        catch (e) {
            Error.requestError(overlay);
        };
    };

    yes.addEventListener('click', () => {Confirm.endAsk([overlay, card], 'yes'); post();});
    no.addEventListener('click', () => Confirm.endAsk([overlay, card], 'no'));
});
let entry = document.getElementsByClassName("grid-item");

let overlay = document.getElementById("overlay");



for (let position = 0; position < entry.length; position++) {
    const element = entry[position];
    element.addEventListener('click', function (clicked) {


        // LLAMADO AL BACKEND
        let idClickeado = clicked.target.id;
        

        // CREACION POPUP
        overlay.classList.add("active");
        const data = document.createElement("div");
        data.innerHTML = `
            <div class="popup" id="popup">
                <div class="popup-header">
                        <form class="body-input">
                            <input type="text" class="input-title header-input" readOnly="true" id="title" value="COMPRA COMUNITARIA">
                        </form>
                    
                            <a href="#" class="edit popup-icon" id="modif"><i class="fas fa-edit" ></i></a>
                            <a href="#" class="edit popup-icon deact-check" id="check"><i class="fas fa-check"></i></a>
                            <a href="#" class="delete popup-icon" id="delete"><i class="fas fa-trash"></i></a>
                    
                </div>
                <div class="popup-body">
                <form>
                    <textarea class="textarea-form" readOnly="true" id="textarea"></textarea>
                </form>
                </div>
                
            </div>
            <div class="value-write" id="value-write">
                <i class="fas fa-dollar-sign"></i>
                <form class="form-div">
                    <input type="number" value="250.000" class="input-price" id="input-price" readOnly="true">
                </form>
            </div>
            <a href="#" class="exit" id="exit"><i class="fas fa-times-circle"></i></a>
            
            <div id="delete-overlay" class="delete-overlay">

            </div>
        `;
        overlay.appendChild(data);
        
        let popup = document.getElementById("popup");
        let value_write = document.getElementById("value-write");


        // ANIMACION DE SALIDA
        let exit = document.getElementById("exit");
        
        
        exit.addEventListener('click', function (ex) {

            overlay.classList.remove("active");
            popup.classList.remove("active");
            
            value_write.classList.remove("act")
            setTimeout(function (ex) {
                
                data.remove();
            }, 0300);


        });


        // MODIFICAR

        let escritura = document.getElementById("textarea");
        let title = document.getElementById("title");
        let modif = document.getElementById("modif");
        let input_price = document.getElementById("input-price");

        function addClass(element_tomodify) {
            element_tomodify.classList.add("active");
            element_tomodify.readOnly = false;
        };

        function removeClass(element_tomodify) {
            element_tomodify.classList.remove("active");
            element_tomodify.readOnly = true;
        };

        modif.addEventListener('click', function () {
            addClass(title);
            addClass(escritura);
            addClass(value_write);
            addClass(input_price);

            let check = document.getElementById("check");
            modif.classList.add("deact-modif");
            check.classList.remove("deact-check");

            check.addEventListener('click', function() {
                removeClass(title);
                removeClass(escritura);
                removeClass(value_write);
                removeClass(input_price);

                check.classList.add("deact-check");
                modif.classList.remove("deact-modif");
            });
        });
        


        // BORRAR CLIENTE
        let delete_overlay = document.getElementById("delete-overlay");
        let delete_icon = document.getElementById("delete");

        delete_icon.addEventListener('click', function() {
        let delete_popup = document.createElement("delete-popup");
        delete_popup.innerHTML = `
        <div class="delete-container" id="delete-container">
        <p class="delete-msg">¿Está seguro de querer borrar la cobranza seleccionada?</p>
        <div class="btn-div-delete">
        <div class="btn-delete yes" id="delete-yes">Si</div>
        <div class="btn-delete no" id="delete-no">No</div>
        </div>
        </div>
        `;

        delete_overlay.appendChild(delete_popup);

        delete_overlay.classList.add("active");

        let delete_container = document.getElementById("delete-container");

        setTimeout(function(){
            delete_container.classList.add("active");
        }, 0100);
        

        // NO BORRAR

        let delete_no = document.getElementById("delete-no");

        delete_no.addEventListener('click', function() {
            delete_container.classList.remove("active");
            setTimeout(function() {
                delete_popup.remove();
                delete_overlay.classList.remove("active");
            },0100);
        });


        // SI BORRAR 

        let delete_yes = document.getElementById("delete-yes");
        

        delete_yes.addEventListener('click', function () {

            // POPUP DELETE
            delete_container.classList.remove("active");
            setTimeout(function() {
                delete_popup.remove();
            },0200);

            // POPUP CLIENTE
            setTimeout(function(){
                delete_overlay.classList.remove("active");
            }, 0220);

            setTimeout(function() {
                popup.classList.remove("active")
                value_write.classList.remove("act")
            }, 0500);

            setTimeout(function(){
                overlay.classList.remove("active");
            }, 0750);

            setTimeout(function(){
                data.remove();
            }, 0800);

            setTimeout(function() {
                element.classList.add("delete");
            }, 1200);

            setTimeout(function() {
                element.remove()
            }, 2000)
        })
    });
    });




    // ANIMACION DE ENTRADA
    
    element.addEventListener('click', function (en) {
        setTimeout(function (en) {

            popup.classList.add("active");
            
            
        }, 0100);
        setTimeout(function(){
            let value_write = document.getElementById("value-write");
            value_write.classList.add("act");
        }, 0400)
    });


    
    
};
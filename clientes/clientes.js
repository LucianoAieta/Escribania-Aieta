var entry = document.getElementsByClassName("grid-item");

var overlay = document.getElementById("overlay");



for (let position = 0; position < entry.length; position++) {
    const element = entry[position];
    element.addEventListener('click', function (clicked) {


        // LLAMADO AL BACKEND
        var idClickeado = clicked.target.id;
        

        // CREACION POPUP
        overlay.classList.add("active");
        const data = document.createElement("div");
        data.innerHTML = `
            <div class="popup" id="popup">
                <div class="popup-header">
                    <p>Natalia Araujo 754123</p>
                    <div>
                            <a href="#" class="edit popup-icon" id="modif-container"><i class="fas fa-edit" id="modif"></i></a>
                            <a href="#" class="edit popup-icon deact-check" id="check"><i class="fas fa-check"></i></a>
                            <a href="#" class="delete popup-icon" id="delete"><i class="fas fa-trash"></i></a>
                    </div>
                </div>
                <div class="popup-body">
                <form>
                    <p class="body-title">Numero de Cliente:</p>
                    <input type="text" value="#124124" readonly="true" class="body-data body-data-inac" id="p"></input>
                    <p class="body-title">Nombre:</p>
                    <input type="text" value="Luciano" readonly="true" class="body-data body-data-inac"></input>
                    <p class="body-title">Apellido:</p>
                    <input type="text" value="Aieta" readonly="true" class="body-data body-data-inac"></input>
                    <p class="body-title">Número de cédula:</p>
                    <input type="text" value="4532 243435 224" readonly="true" class="body-data body-data-inac"></input>
                    <p class="body-title">Fecha de nacimiento:</p>
                    <input type="text" value="25/4/1989" readonly="true" class="body-data body-data-inac"></input>
                </form>
                </div>
            </div>
            <a href="#" class="exit" id="exit"><i class="fas fa-times-circle"></i></a>
            <div id="delete-overlay" class="delete-overlay">

            </div>
        `;
        overlay.appendChild(data);
        
        var popup = document.getElementById("popup");


        // ANIMACION DE SALIDA
        var exit = document.getElementById("exit");
        exit.addEventListener('click', function (ex) {

            overlay.classList.remove("active");
            popup.classList.remove("active");
            setTimeout(function (ex) {

                data.remove();
            }, 0300);


        });


        // MODIFICAR


        var modif = document.getElementById("modif");
        
        modif.addEventListener('click', function () {
            console.log("true");
            var datas = Array.from(document.getElementsByClassName("body-data"));

            for (let inputs of datas) {
                
                inputs.classList.add("body-data-act");
                inputs.classList.remove("body-data-inac");
                inputs.readOnly = false;
            };

            var check = document.getElementById("check");


            modif.classList.add("deact-modif");
            check.classList.remove("deact-check");

            check.addEventListener('click', function() {
                for(let inputs of datas) {
                inputs.classList.add("body-data-inac");
                
                inputs.classList.remove("body-data-act");
                inputs.readOnly = true;

                
            };
                check.classList.add("deact-check");
                modif.classList.remove("deact-modif");
            });
            
        });
        


        // BORRAR CLIENTE
        var delete_overlay = document.getElementById("delete-overlay");
        var delete_icon = document.getElementById("delete");

        delete_icon.addEventListener('click', function() {
        var delete_popup = document.createElement("delete-popup");
        delete_popup.innerHTML = `
        <div class="delete-container" id="delete-container">
        <p class="delete-msg">¿Está seguro de querer borrar el cliente seleccionado?</p>
        <div class="btn-div-delete">
        <div class="btn-delete yes" id="delete-yes">Si</div>
        <div class="btn-delete no" id="delete-no">No</div>
        </div>
        </div>
        `;

        delete_overlay.appendChild(delete_popup);

        delete_overlay.classList.add("active");

        var delete_container = document.getElementById("delete-container");

        setTimeout(function(){
            delete_container.classList.add("active");
        }, 0100);
        

        // NO BORRAR

        var delete_no = document.getElementById("delete-no");

        delete_no.addEventListener('click', function() {
            delete_container.classList.remove("active");
            setTimeout(function() {
                delete_popup.remove();
                delete_overlay.classList.remove("active");
            },0100);
        });


        // SI BORRAR 

        var delete_yes = document.getElementById("delete-yes");
        

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
    });


    
    
};








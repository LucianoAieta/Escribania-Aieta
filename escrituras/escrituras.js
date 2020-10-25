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
                        <form class="body-input">
                            <input type="text" class="input-title header-input inac" readOnly="true" id="title" value="COMPRA COMUNITARIA">
                        </form>
                    
                            <a href="#" class="edit popup-icon" id="modif"><i class="fas fa-edit" ></i></a>
                            <a href="#" class="edit popup-icon deact-check" id="check"><i class="fas fa-check"></i></a>
                            <a href="#" class="delete popup-icon" id="delete"><i class="fas fa-trash"></i></a>
                    
                </div>
                <div class="popup-body">
                <form>
                    <textarea class="textarea-form inac" readOnly="true" id="textarea"></textarea>
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
        
        var popup = document.getElementById("popup");
        var value_write = document.getElementById("value-write");


        // ANIMACION DE SALIDA
        var exit = document.getElementById("exit");
        
        
        exit.addEventListener('click', function (ex) {

            overlay.classList.remove("active");
            popup.classList.remove("active");
            
            value_write.classList.remove("act")
            setTimeout(function (ex) {
                
                data.remove();
            }, 0300);


        });


        // MODIFICAR

        var escritura = document.getElementById("textarea");
        var title = document.getElementById("title");
        var modif = document.getElementById("modif");
        var input_price = document.getElementById("input-price");
        
        modif.addEventListener('click', function () {

            
            title.readOnly = false;
            title.classList.add("active");
            title.classList.remove("inac");

            escritura.readOnly = false;
            escritura.classList.add("active");
            escritura.classList.remove("inac")

            
            value_write.classList.add("active");
            input_price.classList.add("active")
            input_price.readOnly = false;
            

            var check = document.getElementById("check");


            modif.classList.add("deact-modif");
            check.classList.remove("deact-check");

            check.addEventListener('click', function() {
                title.readOnly = true;
                title.classList.remove("active");
                title.classList.add("inac");

                escritura.readOnly = true;
                escritura.classList.remove("active");
                escritura.classList.add("inac")

                
                input_price.readOnly = true;
                value_write.classList.remove("active");
                input_price.classList.remove("active")

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
        <p class="delete-msg">¿Está seguro de querer borrar la cobranza seleccionada?</p>
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
            var value_write = document.getElementById("value-write");
            value_write.classList.add("act");
        }, 0400)
    });


    
    
};
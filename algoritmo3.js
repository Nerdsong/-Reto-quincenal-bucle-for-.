let seleccionarCada = "numero de saltos para seleccionar una opcion";
let valorIncremento = "valor para incrementar en 1 la iteración ";

function generarSelecciones(){
   //para blanquear el mensaje de error
    document.querySelector("#mensaje_error").innerHTML= ``;
    // igualar la variable 
    seleccionarCada = Number(document.querySelector("#numero_saltos").value);

    //--bloque que actualiza el estado de los input en blanco
    
    for( i = 1 ; i < 21 ; i += 1){
        document.querySelector(`#box_${i}`).innerHTML = `

            <input type = "checkbox" value="1" >seleccion ${i}
        `;

    }
    
    //-- bloque que genera los box seleccionados.
    if (seleccionarCada > 0 & seleccionarCada < 21){
            for( i = seleccionarCada; i < 21 ; i += seleccionarCada){
                
                
                if (i >= 1 || i < 20 ){
                    document.querySelector(`#box_1`).innerHTML = `

                    <input type = "checkbox" value="1" checked >seleccion 1
                `;
                i ++
                document.querySelector(`#box_${i}`).innerHTML = `

                <input type = "checkbox" value="1" checked >seleccion ${i}
                `;
                
                i --;
                }
            
            ;    
            }
    }
    else{
        document.querySelector("#mensaje_error").innerHTML= `Ingresá un número del 1 al 20`;
        alert("Ingresá un número del 1 al 20");
        
    }
    };

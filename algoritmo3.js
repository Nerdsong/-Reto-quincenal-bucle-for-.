let seleccionarCadaTanto = "numero de saltos para seleccionar una opcion";

// Para generar la tabla de checkbox
for( i = 1 ; i < 21 ; i += 1){
    document.querySelector("#boxes").innerHTML += `

        <div id="box_${i}"><input type = "checkbox" value="${i}" >seleccion ${i}</div><br>
        
        ` ;
};

function generarSelecciones(){
//para blanquear el mensaje de error
    document.querySelector("#mensaje_error").innerHTML= ``;
// igualar la variable al numero ingresado por el usuario
    seleccionarCadaTanto = Number(document.querySelector("#numero_saltos").value);

//--bloque que actualiza el estado de los checkbox en blanco
    
    for( i = 1 ; i < 21 ; i += 1){
        document.querySelector(`#box_${i}`).innerHTML = `
             
            <input type = "checkbox" value="1" >seleccion ${i}
        `;

    }
    
//-- bloque que genera los box seleccionados.
    if (seleccionarCadaTanto > 0 && seleccionarCadaTanto < 21){
            for( i = seleccionarCadaTanto; i < 21 ; i += seleccionarCadaTanto){
                
                
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

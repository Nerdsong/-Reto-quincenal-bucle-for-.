let opcionInicial = "numero de opcion inicial";
let opcionFinal = "numero de opcion final";

function generarOpcion(){
    opcionInicial = Number(document.querySelector("#numero_opcion_inicial").value);
    opcionFinal = Number(document.querySelector("#numero_opcion_final").value);
    
    if (opcionInicial == 0 || opcionFinal == 0 ){
        document.querySelector("#mensaje_error").innerHTML=` Ingresá un número mayor que cero en cada opción`
    }
    else{
        document.querySelector("#lista_opciones").innerHTML=``
        document.querySelector("#mensaje_error").innerHTML=` ¡Lista la lista!`    
        for (i = opcionInicial; i <= opcionFinal; i ++){
            document.querySelector("#lista_opciones").innerHTML += `
                <option id="opcion_${i}" value="${i}"> Opción ${i}</option>
            `
        };
    }
}
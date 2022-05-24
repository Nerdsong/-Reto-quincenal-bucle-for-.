const VIP_OPCION_1 = 1;
const VIP_OPCION_2 = 2;
const VIP_OPCION_3 = 3;
const VIP_OPCION_4 = 4;
const VIP_OPCION_5 = 5;
const VIP_OPCION_6 = 6;
const VIP_OPCION_7 = 7;

let numeroModificarVip = "numero de opción que se cambiará a vip";


function generarVip(){
    for(i = 1; i < 8 ; i++){
        document.querySelector(`#opcion_${i}`).innerHTML=`
        Opción ${i}
        `
    }

    numeroModificarVip = document.querySelector("#numero_usuario_vip").value
    switch (Number(numeroModificarVip)){
        case VIP_OPCION_1:
            document.querySelector("#opcion_1").innerHTML=`
                Opción 1 VIP
            `
            break
        case VIP_OPCION_2:
            document.querySelector("#opcion_2").innerHTML=`
                Opción 2 VIP
            `
            break  
        case VIP_OPCION_3:
            document.querySelector("#opcion_3").innerHTML=`
                Opción 3 VIP
            `
            break
        case VIP_OPCION_4:
            document.querySelector("#opcion_4").innerHTML=`
                Opción 4 VIP
            `
            break   
        case VIP_OPCION_5:
            document.querySelector("#opcion_5").innerHTML=`
                Opción 5 VIP
            `
            break
        case VIP_OPCION_6:
            document.querySelector("#opcion_6").innerHTML=`
                Opción 6 VIP
            `
            break
        case VIP_OPCION_7:
            document.querySelector("#opcion_7").innerHTML=`
                Opción 7 VIP
            `
            break
        default:
            console.log("hola");            
    };

};
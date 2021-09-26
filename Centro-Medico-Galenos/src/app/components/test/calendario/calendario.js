alert("Hello! I am an alert box!!");

const meses = [
    ["ENERO","01"], 
    ["FEBRERO",02],
    ["MARZO",03],
    ["ABRIL",04],
    ["MAYO",05],
    ["JUNIO",06],
    ["JULIO",07],
    ["AGOSTO",08],
    ["SEPTIEMBRE",09],
    ["OCTUBRE",10],
    ["NOVIEMBRE",11],
    ["DICIEMBRE",12]
];

var mes = document.getElementById('mes');
mes.innerHTML = "<b>" + meses[0][0] + "</b>";

function avanzarMes(){
    for (i=0;i<=11;i++){
        if (mes.textContent == meses[i][0]){
            if (mes.textContent == meses[11][0]){
                mes.innerHTML = "<b>" + meses[0][0] + "</b>";
            }
            else{
                mes.innerHTML = "<b>" + meses[i+1][0] + "</b>";
                break;
            }
        }
    }
}

function retrocederMes(){
    for (i=11;i>=0;i--){
        if (mes.textContent == meses[i][0]){
            if (mes.textContent == meses[0][0]){
                mes.innerHTML = "<b>" + meses[11][0] + "</b>";
            }
            else{
                mes.innerHTML = "<b>" + meses[i-1][0] + "</b>";
                break;
            }
        }
    }
}

function traerDia(dia){
    alert('el dia es ' + dia + " de " + mes.textContent);
};
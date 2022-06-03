

var data = new Date();
var semana = data.getDay();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

var hora = data.getHours();
var min = data.getMinutes();

var meses = new Array (
    "Janeiro",
    "Feveriro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outobro",
    "Novembro",
    "Dezembro"
);

var semanas = new Array(
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado"
);
    
var pulaLinha = "<br>"

    
document.write(semanas[semana] + " - " + dia + " de " + meses[mes] + " de " + ano + pulaLinha) ;
   
document.write("Horas: " + hora + ":" + min);

    
    
    


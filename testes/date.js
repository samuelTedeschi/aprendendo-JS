
var data = new Date();

var sema = data.getDay()
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

var meses = new Array (
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
)

var semanas = new Array(
    "domingo",
    "Segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sabado"
)

var horas = data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();



document.write(semanas[sema] + ", " + dia + " de " + meses[mes] + " de " + ano + "<br>");

document.write(horas + ":" + min + ":" + seg) 
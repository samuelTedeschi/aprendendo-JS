
var pos, msg, pontos;

pontos = 906;

if(pontos >= 1000){
    pos = 1;
}else if(pontos >= 800){
    pos = 2;
}else if(pontos >= 600){
    pos = 3;
}else{
    pos = 0
}
 
switch(pos){
    case 1:
        msg = "Medalha de ouro "
    break;

    case 2:
        msg = "medalha de prata"
    break;

    case 3: 
        msg = "medalha de bonze"
    break;

    default:
        msg = "nao obteve medalha";
}

switch(pos){
    case 1:
    case 2:
    case 3:
        msg += "<br> Subil ao podio <br> Parabems!"
    break;
    default:
        msg += "<br> nao subil ao podio";
}

document.write(msg);
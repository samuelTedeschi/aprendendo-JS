function mudarCor(objeto,cor){
    objeto.style.backgroundColor=cor;
}

function mudaPos(obj){
    obj.style.position="absolute";
    obj.style.left=Math.random()*500+"px";
    obj.style.top=Math.random()*500+"px"
}

function ola (){
    var data= new Date();
    var horas=data.getHours();
    var txt="";
    if(horas < 12){
        txt="Bom dia!"
    }else if(horas < 18){
        txt="Boa tarde!"
    }else{
        txt="Boa noite!"
    }

    alert("Olá, "+txt)
}
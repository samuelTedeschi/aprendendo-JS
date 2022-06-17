var tempo,tempo1,tempo2,tempo3,tempo4,tempo5,tempo6,tempo7;

function mudarCor(){
    var obj= document.getElementById("dv1");
    var r = Math.floor(Math.random()*225);
    var g = Math.floor(Math.random()*225);
    var b = Math.floor(Math.random()*225);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}

function mudarCor1(){
    var obj= document.getElementById("dv2");
    var r = Math.floor(Math.random()*225);
    var g = Math.floor(Math.random()*225);
    var b = Math.floor(Math.random()*225);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
function mudarCor2(){
    var obj= document.getElementById("dv3");
    var r = Math.floor(Math.random()*225);
    var g = Math.floor(Math.random()*225);
    var b = Math.floor(Math.random()*225);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
function mudarCor3(){
    var obj= document.getElementById("dv4");
    var r = Math.floor(Math.random()*225);
    var g = Math.floor(Math.random()*225);
    var b = Math.floor(Math.random()*225);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
function mudarCor4(){
    var obj= document.getElementById("dv5");
    var r = Math.floor(Math.random()*225);
    var g = Math.floor(Math.random()*225);
    var b = Math.floor(Math.random()*225);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
function mudarCor5(){
    var obj= document.getElementById("dv6");
    var r = Math.floor(Math.random()*225);
    var g = Math.floor(Math.random()*225);
    var b = Math.floor(Math.random()*225);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
function mudarCor6(){
    var obj= document.getElementById("dv7");
    var r = Math.floor(Math.random()*225);
    var g = Math.floor(Math.random()*225);
    var b = Math.floor(Math.random()*225);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
function mudarCor7(){
    var obj= document.getElementById("dv8");
    var r = Math.floor(Math.random()*225);
    var g = Math.floor(Math.random()*225);
    var b = Math.floor(Math.random()*225);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}

function iniciar(){
    tempo = setInterval(mudarCor, 1000)
    tempo1 = setInterval(mudarCor1,1000)
    tempo2 = setInterval(mudarCor2,1000)
    tempo3 = setInterval(mudarCor3,1000)
    tempo4 = setInterval(mudarCor4,1000)
    tempo5 = setInterval(mudarCor5,1000)
    tempo6 = setInterval(mudarCor6,1000)
    tempo7 = setInterval(mudarCor7,1000)
}

function parar(){
    clearInterval(tempo)
    clearInterval(tempo1)
    clearInterval(tempo2)
    clearInterval(tempo3)
    clearInterval(tempo4)
    clearInterval(tempo5)
    clearInterval(tempo6)
    clearInterval(tempo7)
}

function eventosBtn(){
    document.getElementById("btc").addEventListener("click",iniciar)
    document.getElementById("btp").addEventListener("click",parar)

}

window.addEventListener("load", eventosBtn)




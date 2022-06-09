
var tmp;

function mudarCor(){
    var obj = document.getElementById("dvs");
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}

//var tmp = setTimeout(mudarCor,1000)

function iniciar(){
    tmp=setInterval(mudarCor,1000)
}

function parar(){
    clearInterval(tmp)
}

function addEvento(){
    document.getElementById("bt1").addEventListener("click",iniciar);
    document.getElementById("bt2").addEventListener("click",parar);
}

window.addEventListener("load",addEvento)
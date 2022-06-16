
var jog;
var velo;
var dx;
var dy;
var px;
var py;
var anima;

var btc;
var btp;

function iniciar(){
    velo=5;
    dx=1;
    dy=0;
    px=0;
    py=0;
    jog=document.getElementById("jogador");
    jog.addEventListener("click",function(){
        cancelAnimationFrame(anima)
    })

    btc = document.getElementById("btc");
    btc.addEventListener("click",function(){
        requestAnimationFrame(game)
    })

    btp = document.getElementById("btp");
    btp.addEventListener("click", function(){
        cancelAnimationFrame(anima)
    })

    game()
}

function game (){
    px+=(dx*velo);
    jog.style.left=px+"px";

    if(px > 800){
        dx=-1
    }else if(px < 0 ){
        dx=1
    }

    anima=requestAnimationFrame(game);
}

window.addEventListener("load", iniciar)
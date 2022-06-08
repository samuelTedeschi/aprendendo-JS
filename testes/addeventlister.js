var px = 0;
var py = 0;

document.addEventListener("keydown", function(event){
    var obj = document.getElementById("dvs");
    var tecla = event.keyCode;
    // 37=esquerda 38=cima 39=direita 40=baixo
    if(tecla==37){
        px-=10;
        obj.style.left=px+"px";
    }else if(tecla==38){
        py-=10;
        obj.style.top=py+"px";
    }else if(tecla==39){
        px+=10;
        obj.style.right=px+"px";
    }else if(tecla==40){
        py+=10;
        obj.style.bottom=py+"px";
    };

});
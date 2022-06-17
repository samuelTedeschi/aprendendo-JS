var valor = 100 ;

for (var i = 0 ; i < 5 ; i++){
    document.write(Math.round(Math.random()*valor)+"<br>")
}

var btn;

btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    location.reload()

})
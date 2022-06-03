
/*function escrever(){
    document.write("aprendendo javascript")
};

escrever();

function soma(n1,n2){
    var res =n1+n2;
    document.write(res)
}
soma(50,30);

function soma(n1,n2){
    return n1 + n2 ;
}
var res = soma(20,40)
document.write(res)*/

var numeros = new Array(2,3,5,6,21,50,10);

function media(nums){
    var tam = nums.length;
    var soma=0;
    for(var i=0; i < tam ; i++){
        soma+=nums[i]
    }
    return Math.round(soma/tam);
}

document.write(media(numeros))
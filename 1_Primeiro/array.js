
//var cor =[]

//cor.push("preto") ou cor[2]="preto"
/*
cor[0]="azul"
cor[1]="preto"
cor[2]="vemelho"
cor[3]="branco"
cor[4]="amarelo"

document.write(cor[2])
*/

/*var itens =["faca","corda","esqueiro","barraca"];
var mochila =[];

mochila.push(0);
mochila.push(2);
mochila.push(3);
mochila.push(1);

document.write(itens[mochila[0]] + "<br>")
document.write(itens[mochila[1]] + "<br>")
document.write(itens[mochila[2]] + "<br>")
document.write(itens[mochila[3]])
*/


var  mochila=[], mochila1=[], mochila2=[],pos;

mochila1.push("faca");
mochila1.push("corda");
mochila1.push("esquiro");
mochila1.push("barraca");

mochila2.push("casaco");
mochila2.push("martelo");
mochila2.push("comida");
mochila2.push("sacola");

mochila=mochila1.concat(mochila2)

document.write(mochila[0]+ "<br>")
document.write(mochila[1]+ "<br>")
document.write(mochila[2]+ "<br>")
document.write(mochila[3]+ "<br>")
document.write(mochila[4]+ "<br>")
document.write(mochila[5]+ "<br>")
document.write(mochila[6]+ "<br>")
document.write(mochila[7]+ "<br>")

document.write("tamanho da mochila 1 :" + mochila1.length + "<br>")



//pos=mochila1.indexOf("faca")

/*if(pos < 0){
    document.write("inten nao esta na mochila <br>");
}else{
    document.write("iten esta na mochila <br> Posiçao:" +pos)
}*/




//mochila.unshift("barraca"); //ushift deixa  elemento em primenro

//mochila.pop() // pop remove o ultimo elemento 

//mochila.shift() // shifit remove o primeiro elemento 

//mochila.splice(1,2) // spice remove um ou mais elemento, primiro clacifica o elemento depois a quantidade

//document.write(mochila[0] + "<br>")


/*var num=[3,2,4,5,7,9,8,1,6,0];
var numero;

num.sort();   //ordena os numeros 
num.reverse(); // reverte a orde dos numeros 

numero=num.join()
document.write(numero+"<br>");

document.write(num[0]+"</br>");
document.write(num[1]+"</br>");
document.write(num[2]+"</br>");
document.write(num[3]+"</br>");
document.write(num[4]+"</br>");
document.write(num[5]+"</br>");
document.write(num[6]+"</br>");
document.write(num[7]+"</br>");
document.write(num[8]+"</br>");
document.write(num[9]+"</br>");
*/
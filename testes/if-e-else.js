// if = se 
// else = no caso 

// true = 1     verdadeiro
// flase = 0    flaso

/* operadores 

10 > 5 = true       maior que
10 < 5 = flase      menor que 
10 >= 10 = true     maior ou igual
10 <= 10 = flase    menor ou igual
10 == 10 = true     igualdade
10 != 10 = false    diferente 
*/

/* var x, y ;

x=1;
y=2;

if(x > y){
    document.write("confirmado")
}else{
    document.write("revisando")
}
*/

// if aninhado 

var nota = 70 
var res;

if(nota >= 60){
    res = "aprovado";
    if( nota >= 90){
            if(nota >= 100){
                res += " com ecelencia"
            }else{
                res += " com louvor"
            }
    }else{
        res+= " nota normal"
    }
}else if (nota >= 40){
    res =" recuperçao";
}else{
    res = "reprovado";
        if(nota >= 20){
            res += "nota baixa"
        }else{
            res+= "com louvor"
        }
}

document.write(res)
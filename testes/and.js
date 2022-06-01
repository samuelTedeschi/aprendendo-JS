// AND = && = E
/* && - AND
v   f   f
f   v   f
v   v   v
f   f   f
*/

// OR = || = OU
/* ||- OR
v   f   v
f   v   v
v   v   v
f   f   f
*/

var pontos = 56

if(
    ((pontos >= 30) && (pontos <= 40)) || ((pontos >= 70) && (pontos <= 80))
){
    document.write("ganhou")
}else{
    document.write("perdeu")
}
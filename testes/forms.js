
//var fm = document.forms.item(0).id;
//var fm =document.forms.namedItem("curso").innerHTML;
var fm = document.forms[0];

var el = fm.elements;

for(var i = 0; i < el.length; i++){

    el[i].style.backgroundColor="gray"
    el[i].style.color="white"
    el[i].value="Usuario"
}


console.log(fm)

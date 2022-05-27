var num;
try{
    num=prompt("digite um valor");
    if(num>10){
        throw new Error("valor invalido <br>");
    }
    document.write("valor :" + num);
}catch(e){
    document.write("erro : " + e.message)
   // console.log("erro" + e.menssagen)
}finally{
    document.write("<br> fim")
}
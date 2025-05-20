function calculo() 
{
    var subtotal=parseFloat(document.getElementById("total_pagar").value);
    var porcentaje=parseFloat(document.getElementById("porcentaje").value);
    var propina=subtotal * (porcentaje / 100);
    var total=subtotal + propina;
    document.getElementById("resultado").innerHTML= "Propina: $" + propina.toFixed(2) + "<br>" + "Total a pagar: $" + total.toFixed(2);
}

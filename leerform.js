function leerdatos() /*Función para leer los datos del formulario mediante padre e hijos*/
{
    //Referencia por psudoclase
    var nom=document.forms["formulario"].elements[0].value;
    //Refrefencia por ID
    var clave=document.getElementById("contra").value;
    //Referencia por TagName
    var car=document.getElementsByTagName("select")[0].value;
    //Referencia por name
    var gen=document.getElementsByName("genero");
    for(i=0;i<gen.length;i++) //Recorrer la cantidad de radios con un ciclo for
    {
        if (gen[i].checked) //Condición para verificar si está seleccionado el checkbox
        {
            var g=gen[i].value;
        }

    }

    //Referencia por ID del checkbox
    var ok=document.getElementById("check").checked;

    document.getElementById("resultado").innerHTML= "\<br>Tu nombre:" + nom + "\<br>Tu contraseña:" + clave + "\<br>Tu carrera:" + car + "\b<br>Tu género: " + g + "\<br> Aceptado:" +ok;
}
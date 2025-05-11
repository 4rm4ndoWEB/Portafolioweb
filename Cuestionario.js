function leerdatos() {
    if (!document.getElementById("check").checked) {
        alert("Por favor confirma tu pedido antes de enviarlo.");
        return;
    }

    const datos = {
        nombre: document.getElementById("nombre").value,
        platillo: document.getElementById("PlatillosLigeros").value,
        panaderia: document.getElementById("Panaderia").value,
        dulce: document.getElementById("Dulces").value,
        postre: document.getElementById("Postres").value,
        bebidaCaliente: document.getElementById("BebidasC").value,
        bebidaFria: document.getElementById("Bebidas").value,
        agua: document.getElementById("Aguas").value,
        pago: (() => {
            const metodoPago = document.querySelector('input[name="Pago"]:checked');
            return metodoPago ? metodoPago.value : "No especificado";
        })()
    };

    generar(datos);
}

function generar(datos) {
    const doc = new jsPDF();
    const fechaHora = new Date().toLocaleString();

    doc.setFontSize(14);
    doc.text("Recibo de compra", 20, 20);
    doc.setFontSize(11);
    doc.text("Universidad Politécnica de San Luis Potosí", 20, 28);
    doc.text("C. Urbano Villalón 500, La Ladrillera, 78369 San Luis Potosí, S.L.P", 20, 34);
    doc.text("Fecha y hora: " + fechaHora, 20, 40);

    let y = 50;
    doc.setFontSize(12);
    doc.text("Nombre: " + datos.nombre, 20, y); y += 10;
    doc.text("Platillo Ligero: " + datos.platillo, 20, y); y += 10;
    doc.text("Panadería: " + datos.panaderia, 20, y); y += 10;
    doc.text("Dulce/Snack: " + datos.dulce, 20, y); y += 10;
    doc.text("Postre: " + datos.postre, 20, y); y += 10;
    doc.text("Bebida Caliente: " + datos.bebidaCaliente, 20, y); y += 10;
    doc.text("Bebida Fría: " + datos.bebidaFria, 20, y); y += 10;
    doc.text("Agua Fresca: " + datos.agua, 20, y); y += 10;
    doc.text("Método de pago: " + datos.pago, 20, y); y += 10;

    // Mostrar el PDF en el iframe
    const string = doc.output('datauristring');
    document.querySelector('iframe').src = string;



    document.forms["formulario"].reset();
}

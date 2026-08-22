function enviarAlerta() {

    let mensaje = document.getElementById("mensajeAlerta").value;


    if (mensaje === "") {

        alert("Escribe una alerta primero");

    } else {

        alert("Alerta enviada correctamente 🎭");

        document.getElementById("mensajeAlerta").value = "";

    }

}
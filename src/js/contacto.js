document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const modal = document.getElementById("modalConfirmacion");
    const mensajeExito = document.getElementById("mensajeExito");
    const btnConfirmar = document.getElementById("confirmarEnvio");
    const btnCancelar = document.getElementById("cancelarEnvio");
    const btnEnviar = form.querySelector("button[type='submit']");

    let formularioEnviado = false;

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático
        if (!formularioEnviado) {
            modal.style.display = "flex"; // Muestra el modal
        }
    });

    btnConfirmar.addEventListener("click", function () {
        if (!formularioEnviado) {
            formularioEnviado = true; // Marcar como enviado
            btnEnviar.disabled = true; // Bloquea el botón para evitar más envíos

            modal.style.display = "none"; // Oculta el modal

            // Mostrar mensaje de éxito
            mensajeExito.style.display = "block";

            // Limpiar el formulario después de 2 segundos
            setTimeout(() => {
                mensajeExito.style.display = "none"; // Ocultar mensaje
                form.reset(); // Limpiar formulario
                formularioEnviado = false; // Permitir nuevo envío
                btnEnviar.disabled = false; // Habilitar el botón nuevamente
            }, 2000);
        }
    });

    btnCancelar.addEventListener("click", function () {
        modal.style.display = "none"; // Cierra el modal sin enviar
    });
});
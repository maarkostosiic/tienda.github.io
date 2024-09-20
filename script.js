document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("reservaForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");

    
    function validarNombre() {
        const nombre = nombreInput.value.trim();
        if (nombre === "") {
            mostrarError(nombreInput, "El nombre es obligatorio");
            return false;
        } else {
            limpiarError(nombreInput);
            return true;
        }
    }

    
    function validarEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            mostrarError(emailInput, "El correo electrónico es obligatorio");
            return false;
        } else if (!emailRegex.test(email)) {
            mostrarError(emailInput, "Introduce un correo válido");
            return false;
        } else {
            limpiarError(emailInput);
            return true;
        }
    }

    
    function mostrarError(input, mensaje) {
        const campo = input.parentElement;
        let error = campo.querySelector("small");
        if (!error) {
            error = document.createElement("small");
            campo.appendChild(error);
        }
        error.innerText = mensaje;
        input.style.borderColor = "#ff6f61";
    }

    
    function limpiarError(input) {
        const campo = input.parentElement;
        const error = campo.querySelector("small");
        if (error) {
            campo.removeChild(error);
        }
        input.style.borderColor = "#ccc";
    }

    
    nombreInput.addEventListener("input", validarNombre);
    emailInput.addEventListener("input", validarEmail);

    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const esNombreValido = validarNombre();
        const esEmailValido = validarEmail();

        if (esNombreValido && esEmailValido) {
            alert("¡Reserva realizada con éxito! Te enviaremos un correo de confirmación.");
            form.reset();  // Limpiar el formulario
        } else {
            alert("Por favor, completa correctamente el formulario.");
        }
    });
});

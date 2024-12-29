<script>
    // Cargar Bootstrap
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    bootstrapScript.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapScript);

    // Esperar a que la ventana se cargue completamente
    window.addEventListener('load', function() {
        // Manejo del mensaje de error
        var errorMessageElement = document.querySelector('.msj-error');
    if (errorMessageElement) {
            var tiempoVisible = 7000; // 7 segundos
    setTimeout(function() {
        errorMessageElement.style.display = 'none';
            }, tiempoVisible);
        };
    };

    document.getElementById("userLogin").addEventListener("submit", function (event) {
        // Evitar la acción predeterminada del formulario
        event.preventDefault();

    // Capturar los datos del formulario
    const email = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Enviar los datos al Apps Script
    fetch('https://script.google.com/macros/s/AKfycbxMkknPacLUo_s3G-ssbj447EhMgvmJpO96hPQ2tPhU8yIrOH6EjBcIVzFlu1GeUUv-/exec', {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({email: email, contrasena: contrasena })
            })
            .then(response => response.json())
            .then(data => {
                // Manejar la respuesta
                if (data.success) {
        // Redirigir si las credenciales son válidas
        window.location.href = "pages/main.html";
                } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        alert(data.message);
                }
            })
            .catch(error => {
        console.error('Error:', error);
    alert("Hubo un error al comunicarse con el servidor.");
            });
        });

</script>



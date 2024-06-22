document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function(){
    mainNav.classList.toggle('active');
    });
    });

    function sendEmail(formData) {
        // Configuración del correo
        const destinatario = 'martinmayo2014@gmail.com'; // Reemplaza con tu correo electrónico
        const asunto = 'Mensaje desde formulario de contacto';
        const cuerpoMensaje = `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje:\n${formData.mensaje}`;
      
        // Envío del correo
        GmailApp.sendEmail(destinatario, asunto, cuerpoMensaje);
      }
      // Función para cambiar el tema
      function setTheme(theme) {
        // Selecciona el body del documento
        var body = document.body;

        // Elimina cualquier clase de tema que ya esté presente
        body.classList.remove('light-theme', 'dark-theme');

        // Agrega la clase correspondiente al tema seleccionado
        if (theme === 'light') {
            body.classList.add('light-theme');
        } else if (theme === 'dark') {
            body.classList.add('dark-theme');
        }
    }
      function llamar() {
        // Número de teléfono al que se quiere llamar
        var numeroTelefono = '+3121534499';
        
        // Generar la URL con el esquema 'tel:' para iniciar la llamada
        var url = 'tel:' + encodeURIComponent(numeroTelefono);
        
        // Abrir una nueva ventana o iniciará la llamada, dependiendo del dispositivo y navegador
        window.open(url, '_self');
    }
     
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const sectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(sectionId);
            
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.main-nav').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
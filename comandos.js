// Código JavaScript para funcionalidad adicional...
// Obtener referencia al formulario de contacto
const formContacto = document.querySelector('form');

// Agregar evento de envío del formulario
formContacto.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos de formulario
  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const mensaje = document.querySelector('#mensaje').value;

  // Validar los datos ingresados
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return;
  }

  // Enviar los datos del formulario al servidor usando AJAX o Fetch API
  // Aquí puedes realizar una solicitud al archivo PHP de contacto.php para procesar el formulario y enviar el correo electrónico

  // Limpiar los campos del formulario después del envío
  formContacto.reset();
});

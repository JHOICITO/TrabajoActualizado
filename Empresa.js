// Registrar evento click al presionar el botón de envío
function iniciar() {
    var btnRegistrar = document.getElementById("btnRegistrar");
    // Al producirse un click sobre el botón de envío
    // invocar los métodos del objeto empresa que mostrarán
    // los valores ingresados en el formulario
    if (btnRegistrar.addEventListener) {
        btnRegistrar.addEventListener("click", function () {
            var nuevaEmpresa;
            nuevaEmpresa = new EmpresaTransportes(
                document.frmEmpresa.txtnombre.value,
                document.frmEmpresa.txtdireccion.value,
                document.frmEmpresa.txttelefono.value,
                document.frmEmpresa.txtemail.value
            );
            nuevaEmpresa.registrar();
            nuevaEmpresa.mostrar();
        }, false);
    } else {
        btnRegistrar.attachEvent("onclik", function () {
            var nuevaEmpresa;
            nuevaEmpresa = new EmpresaTransportes(
                document.frmEmpresa.txtnombre.value,
                document.frmEmpresa.txtdireccion.value,
                document.frmEmpresa.txttelefono.value,
                document.frmEmpresa.txtemail.value
            );
            nuevaEmpresa.registrar();
            nuevaEmpresa.mostrar();
            console.log("El evento de carga se ha disparado");
        });
    }
}

// Definiendo la clase EmpresaTransportes
document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.getElementById("myButton");
  
    myButton.addEventListener("click", function() {
      alert("¡Has hecho clic en el botón!");
    });
  });

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

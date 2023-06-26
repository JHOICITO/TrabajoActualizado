<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  // Validar los datos ingresados
  if (empty($nombre) || empty($email) || empty($mensaje)) {
    echo '<p>Todos los campos son obligatorios. Por favor, complete el formulario nuevamente.</p>';
  } else {
    // Enviar el correo electrónico con los detalles del contacto
    $to = 'info@transportesflores.com';
    $subject = 'Nuevo mensaje de contacto';
    $message = "Nombre: $nombre\n";
    $message .= "Email: $email\n";
    $message .= "Mensaje:\n$mensaje\n";

    if (mail($to, $subject, $message)) {
      echo '<p>Gracias por contactarnos. Pronto nos pondremos en contacto con usted.</p>';
    } else {
      echo '<p>Hubo un error al enviar el mensaje. Por favor, intente nuevamente más tarde.</p>';
    }
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacto - Transportes Flores</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Transportes Flores</h1>
    <nav>
      <ul>
        <li><a href="index.php">Inicio</a></li>
        <li><a href="servicios.php">Servicios</a></li>
        <li><a href="contacto.php">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <section>
    <h2>Contacto</h2>
    <form method="POST" action="contacto.php">
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" id="nombre" required>

      <label for="email">Email:</label>
      <input type="email" name="email" id="email" required>

      <label for="mensaje">Mensaje:</label>
      <textarea name="mensaje" id="mensaje" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  </section>

  <footer>
    <p>Todos los derechos reservados &copy; 2023 Transportes Flores</p>
  </footer>

  <script src="script.js"></script>

<?php

$con=mysqli_connect('localhost','root','','dbtransportes') or die ('Error en la conexion servidor ');
$sql = "INSERT INTO tcliente

VALUES(NULL,' ".$_POST["NombrePasajero"]."','".$_POT["Apellidos"]."','".$_POT["Correo"]."','".$_POT["Dni"]."','".$_POT["Contraseña"]."','".$_POT["Sexo"]."')";
$resultado = mysqli_query($con,$sql) or die ('Error en el query database');
mysqli_close($scon);

echo 'El Ingresado es:'.$_POST["NombrePasajero"].$S_POST["Apellidos"];
echo 'El Correo es:'.$_POST["Correo"];
echo 'El Sexo es:'.$_POST["Sexo"];
?>

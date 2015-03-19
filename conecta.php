<?php

//Conexión a base de datos
$server = "localhost";
$username = "root";
$password = "Sofia1340";
$database = "phonegap";
$con = mysql_connect($server, $username, $password) or die ("Error al conectar: " . mysql_error());
mysql_select_db($database, $con);

//Obtenemos por Post los valores enviados desde el móvil

$nombre = $_POST["name"];
$mail = $_POST["mail"];
$telefono = $_POST["telefono"];

//Insertamos en la base de datos

$sql = "INSERT INTO clientes (id_clientes, nombre, mail, telefono ) ";
$sql .= "VALUES (' ', '$nombre', '$mail', '$telefono')";
if (!mysql_query($sql, $con)) {
 die('Error: ' . mysql_error());
} else {
// Mostramos un mensaje, que sera el que se desplegara en nuestro móvil al concluir el guardado de datos.

 echo "Datos guardados";
}
mysql_close($con);
?>
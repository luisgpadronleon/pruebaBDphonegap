<?php
require_once 'conecta.php';

//Obtenemos por Post los valores enviados desde el movil

$nombre = $_POST["name"];
$mail = $_POST["mail"];
$telefono = $_POST["telefono"];

//Insertamos en la base de datos

$sql = "INSERT INTO clientes (nombre, mail, telefono ) ";
$sql .= "VALUES ('$nombre', '$mail', '$telefono')";
if (!mysql_query($sql, $con)) {
    die('Error: ' . mysql_error());
} else {
    echo "Datos guardados";
}
mysql_close($con);


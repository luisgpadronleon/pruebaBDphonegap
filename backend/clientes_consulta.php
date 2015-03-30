<?php
require_once 'conecta.php';

//Obtenemos por Post los filtros

$nombre = $_POST["name"];
$mail = $_POST["mail"];
$telefono = $_POST["telefono"];

//Insertamos en la base de datos

$sql = "SELECT id_clientes,nombre, mail, telefono  ";
$sql .= "FROM clientes";
$res =  mysql_query($sql, $con);
$datos = null;
if (!res) {
    die('Error: ' . mysql_error());
} else {
    while ($row = mysql_fetch_array($res)) {
        $datos [] = $row;
    }
    
}
echo json_encode($datos);
mysql_close($con);
?>

<?php

//Conexion a base de datos
$server = "localhost";
$username = "puertola";
$password = "ifNa67i8C4";
$database = "puertola_phonegap";
$con = mysql_connect($server, $username, $password) or die ("Error al conectar: " . mysql_error());
mysql_select_db($database, $con);
?>
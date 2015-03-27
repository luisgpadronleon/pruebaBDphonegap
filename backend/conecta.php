<?php

//Conexion a base de datos
$server = "localhost";
$username = "root";
$password = "Sofia1340";
$database = "puertola_phonegap";
$con = mysql_connect($server, $username, $password) or die ("Error al conectar: " . mysql_error());
mysql_select_db($database, $con);
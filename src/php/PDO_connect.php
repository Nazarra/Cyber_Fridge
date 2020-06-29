<?php
$host = "localhost";
$user = "root";
$pass = "coderslab";
$db = "Cyber_Fridge";

$connection = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass,
                [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ]);

var_dump($connection);
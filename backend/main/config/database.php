<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'root');
define('DB_NAME', 'cazzodici');


function getConnection(){
  $conn = null;
  try{
    $conn = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    $conn->exec("set names utf8");
  }catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
  }
  return $conn;
}

<?php

include_once "../config/database.php";
include_once "../model/User.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$method = $_SERVER['REQUEST_METHOD'];
$db = getConnection();

switch ($method) {
    case 'GET':
        get($db);
        break;
}


function get($db) {
    $users = new User($db);

    $stmt = $users->getAll();

}

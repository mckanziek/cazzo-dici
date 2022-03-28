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

function get($db)
{
    if (isset($_GET['username']) && isset($_GET['password'])) {
        login($db, $_GET['username'], $_GET['password']);
    } else {
        getAllUsers($db);
    }
}

function getAllUsers($db)
{
    $users = new User($db);

    $stmt = $users->getAll();

    $users_result = array();
    $users_result["data"] = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $user_item = array(
            "name" => $row["name"],
            "color" => $row["color"]
        );
        array_push($users_result["data"], $user_item);
    }

    echo json_encode($users_result);
}

function login($db, $username, $password)
{
    $user = new User($db);

    $stmt = $user->getUser($username);

    $result = hash('sha256', $password) === $stmt->$password;

    echo json_encode($result);
}

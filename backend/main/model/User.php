<?php


class User
{
  private $conn;
  private $table = "user";

  public $id;
  public $name;
  public $password;
  public $color;


  public function __construct($db){
    $this->conn = $db;
  }

  function getAll(){
    $sql = "SELECT name, color FROM " . $this->table . ";";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    return $stmt;
  }

  function getUser($username) {
    $sql = "SELECT password FROM " . $this->table . " WHERE name = :name ;";
    $stmt = $this->conn->prepare($sql);
    $stmt->bindParam(':name', $username, PDO::PARAM_STR);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}

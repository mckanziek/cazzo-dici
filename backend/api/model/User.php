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
    $sql = "SELECT * FROM " . $this->nome_tabella . ";";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();
    return $stmt;
  }
}

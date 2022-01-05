<?php


class Comment
{
  private $conn;
  private $table = "comment";

  public $id;
  public $username;
  public $value;
  public $date;
  public $phrase_id;


  public function __construct($db){
    $this->conn = $db;
  }
}

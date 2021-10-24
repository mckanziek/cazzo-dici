<?php


class Phrase
{
  private $conn;
  private $table = "phrase";

  public $id;
  public $value;
  public $context;
  public $date;
  public $owner;
  public $create_by;
  public $volume_id;


  public function __construct($db){
    $this->conn = $db;
  }
}

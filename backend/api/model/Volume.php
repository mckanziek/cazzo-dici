<?php


class Volume
{
  private $conn;
  private $table = "volume";

  public $id;
  public $year;
  public $number;
  public $start;
  public $end;


  public function __construct($db){
    $this->conn = $db;
  }
}

<?php

include "db/database.php";
ob_start();
$params = json_decode(file_get_contents('php://input'),true);
// echo $params;
// need to do something like $requestJSON = json_encode($params.request)
// $params.user = {ubi: 324..., email: m@s.com}
// $data = json_encode($params);
// echo $data;
$data = $params["data"];
// $requestJSON = json_encode($data);
$user = $params["user"];
$key = md5(uniqid($user["ubi"], true));
// $key = 3
// $email = json_encode($user["email"]);
$ubi = json_encode($user["ubi"]);

//

//
  // echo "123"
  $conn = new mysqli($host, $dbun, $dbpw, $mydb);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


  $insertsql = "INSERT INTO `market` (`key`, `ubi`, `time`, `data`, `open`) VALUES ('".$key."', '".$ubi."', '".$time."', '".$data."', '"1"');";

  if ($conn->query($insertsql) === TRUE) {
    echo "Record inserted successfully " . $insertsql;
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }






// $j = json_decode($requestJSON, true);
// $j["time"] = time();
// $requestJSON = json_encode($j);
// $file = 'action.log';
// #file_put_contents($file,serialize($params)."\n", FILE_APPEND);
// file_put_contents($file,$requestJSON."\n", FILE_APPEND);
// #$file_put_contents($file,[$id, $reason, $action, $session, $quantity], FILE_APPEND);

<?php

include "db/database.php";
ob_start();
$params = json_decode(file_get_contents('php://input'),true);
// echo $params;
// need to do something like $requestJSON = json_encode($params.request)
// $params.user = {ubi: 324..., email: m@s.com}
$curl = curl_init();
// $data = json_encode($params);
// echo $data;
$data = $params["request"];
$requestJSON = json_encode($data);
$user = $params["user"];
// $email = json_encode($user["email"]);
$ubi = json_encode($user["ubi"]);
// echo $user;
// echo $data['user'];
// echo $requestJSON;
// $requestJSON = json_encode($params);

#echo $params["action"];
// echo $reuqestJSON;
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://wslcb.mjtraceability.com/serverjson.asp",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $requestJSON,
  CURLOPT_HTTPHEADER => array(
    "content-type: application/json"
  ),
));
//
$response = curl_exec($curl);
$err = curl_error($curl);
//
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
  // echo "123"
  $conn = new mysqli($host, $dbun, $dbpw, $mydb);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  // echo "Connected successfully";

  // $historysql = "INSERT INTO `brs_pos` (`email`, `ubi`, `time`, `req`, `res`) VALUES ('".$email."', '".$ubi."', '".$time."', '".$requestJSON."', '".$response."');";
  $deletesql = "DELETE FROM brs_pos WHERE ubi='".$ubi."'";
  // $sql = "SELECT sessionid,license from ".$sessions_tbl." where
  //     email = '".$email."' order by time desc limit 1";

  // $sql = "UPDATE `brs_pos` SET `ubi` = '".$ubi."', `time` ='".$time."', `data` = '".json_encode($response,  JSON_HEX_APOS)."' WHERE ubi = '".$ubi."';";

  if ($conn->query($deletesql) === TRUE) {
    echo "Record deleted successfully " . $deletesql;
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $insertsql = "INSERT INTO `brs_pos` (`ubi`, `time`, `data`) VALUES ('".$ubi."', '".$time."', '".json_encode($response,  JSON_HEX_APOS)."');";
  // $sql = "UPDATE `brs_pos` SET `ubi` = '".$ubi."', `time` ='".$time."', `data` = '".json_encode($response,  JSON_HEX_APOS)."' WHERE ubi = '".$ubi."';";

  if ($conn->query($insertsql) === TRUE) {
    echo "Record inserted successfully" .$ubi;
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }



}


// $j = json_decode($requestJSON, true);
// $j["time"] = time();
// $requestJSON = json_encode($j);
// $file = 'action.log';
// #file_put_contents($file,serialize($params)."\n", FILE_APPEND);
// file_put_contents($file,$requestJSON."\n", FILE_APPEND);
// #$file_put_contents($file,[$id, $reason, $action, $session, $quantity], FILE_APPEND);

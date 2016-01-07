<?php

include "db/database.php";
ob_start();
$params = json_decode(file_get_contents('php://input'),true);
// echo $params;
// need to do something like $requestJSON = json_encode($params.request)
// $params.user = {ubi: 324..., email: m@s.com}
// $data = json_encode($params);
// echo $data;
$requestJSON = json_encode($data);
$user = $params["user"];
// $email = json_encode($user["email"]);
$ubi = json_encode($user["ubi"]);


$conn = new mysqli($host, $dbun, $dbpw, $mydb);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT data from brs_pos where
    ubi = '".$ubi."' order by time desc limit 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $pos_data = $row["data"];
    }
}
// else {
//     $nodata = ["ubi"=>$ubi, "no data"=>"no data"];
//     $nodata_j = json_encode($nodata);
//     echo $nodata_j;
// }
$conn->close();
$json = ["data"=>$pos_data];
$getResult = json_encode($json);
echo $getResult;
#GET SESSION FROM DB HERE






// $j = json_decode($requestJSON, true);
// $j["time"] = time();
// $requestJSON = json_encode($j);
// $file = 'action.log';
// #file_put_contents($file,serialize($params)."\n", FILE_APPEND);
// file_put_contents($file,$requestJSON."\n", FILE_APPEND);
// #$file_put_contents($file,[$id, $reason, $action, $session, $quantity], FILE_APPEND);

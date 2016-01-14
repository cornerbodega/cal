<?php
include "db/database.php";
ob_start();
$params = json_decode(file_get_contents('php://input'),true);

$requestJSON = json_encode($data);
$user = $params["user"];
$ubi = json_encode($user["ubi"]);

$conn = new mysqli($host, $dbun, $dbpw, $mydb);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT req, res, time, email from history where
    ubi = '" . $ubi . "' ";
$result = $conn->query($sql);
// echo $sql;
$j = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // $req = $row["req"];
        // $res = $row["res"];
        // $time = $row["time"];
        // $email = $row["email"];
        array_push($j, [
            "email"=> $row["email"],
            "time" => $row["time"],
            "res" => $row["res"],
            "req" => $row["req"],
        ]);
    }
} else {
    echo "0 results for " . $email ;
}


$conn->close();
$json = [
    "email"=>$email,
    "res"=>$res,
    "time"=>$time
];
$getResult = json_encode($j);
echo $getResult;


?>

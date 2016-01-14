<?php
include "database.php";
ob_start();
$passed = fasle;
$param = json_decode(file_get_contents('php://input'),true);
$data = $param["data"];
$name = $param["name"];



$conn = new mysqli($host, $dbun, $dbpw, $mydb);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "INSERT INTO `".$name."` (`time`, `data`)
  VALUES ('".$time."', '".$data."');";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
// header( "Location: $url" );
// } else {
// 	echo "InvalidArgumentException";
// 	$url = "../../index.html";
// 	header( "Location : $url");
// }
?>

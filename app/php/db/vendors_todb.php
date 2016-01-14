<?php
include "database.php";
ob_start();
$passed = false;
$param = json_decode(file_get_contents('php://input'),true);
$email = $param["email"];
$ubi = $param["ubi"];
$session = $param["session"];
$passed = $param["passed"];




if ($passed){
$conn = new mysqli($host, $dbun, $dbpw, $sessions_db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "INSERT INTO `".$sessions_tbl."` (`email`, `time`, `sessionid`,`ubi`)
  VALUES ('".$email."', '".$time."', '".$session."', '".$ubi."');";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

?>

<?php 

 
// file_put_contents('filename1.txt', print_r($_POST, true));
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);
$request =  (array) $decoded;


if (isset($request['userId']) and isset($request['signature']) and isset($request['fans'])) 
{

	include('config.php');

	$userId    = $request['userId'];
	$signature = mysqli_real_escape_string($conn,$request['signature']);
	$fans      = $request['fans'];
	$user_name = $request['user_name'];


	$sql = "INSERT INTO  tiktok_data (user_id,description,fans,user_name) VALUES ('".$userId."','".$signature."','".$fans."','".$user_name."')";
 
}
<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400'); // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    exit(0);

}

require "dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {
    $request = json_decode($data,true);
    $username = $request['username'];
   
}
$sql="SELECT * FROM `programme` as p INNER JOIN `users` as u ON p.programme= u.program_name WHERE u.username= '$username '";
//$sql = "SELECT * FROM programme";

$result = mysqli_query($con, $sql);
$response = array();

while ($row = mysqli_fetch_array($result)) {
    array_push($response, array(
        "pid" => $row[0],
        "programme" => $row[1],
        "course_code" => $row[2],
        "course_name" => $row[3],
        "sem_offered" => $row[4],
        "prereq" => $row[5],
        "status" => $row[6]
        )
    );
}

echo json_encode(array("server_response" => $response));

mysqli_close($con)

?>

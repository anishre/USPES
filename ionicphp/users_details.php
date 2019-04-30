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

$sql = "SELECT * FROM users WHERE username='$username';";

$result = mysqli_query($con, $sql);
$response = array();

while ($row = mysqli_fetch_array($result)) {
    array_push($response, array("id" => $row[0],
        "username" => $row[1],
        "password" => $row[2],
        "telephone" => $row[3],
        "email" => $row[4],
        "name" => $row[5],
        "role" => $row[6],
        "DOB" => $row[7],
        "gender" => $row[8],
        "citizenship" => $row[9],
        "campus" => $row[10],
        "program_name" => $row[11],
        "year_joined" => $row[12],
        "major_type" => $row[13],
        "major_one" => $row[14],
        "major_two" => $row[15],
        "minor_one" => $row[16],
        "minor_two" => $row[17],
        "status" => $row[18]
        )
    );
}

echo json_encode(array("server_response" => $response));

mysqli_close($con)

?>

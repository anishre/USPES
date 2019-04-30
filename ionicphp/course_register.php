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
    $request = json_decode($data);
    $username = $request->username;
   $course_code = $request->course_code;
   $name = $request->course_name;
    $status = "enrolled";

  
}
$duplicate=mysqli_query($con,"select * from course_register where student='$username' and course='$course_code'");
if (mysqli_num_rows($duplicate)<=0)
{
    $sql = "INSERT INTO course_register(course,student,name,status) 
    VALUES ('$course_code', '$username','$name','$status')";
    if ($con->query($sql) === TRUE) {
        $response= "Updated successfull";
       
    } else {
       $response= "Error: " . $sql . "<br>" . $db->error;
    }
}
else{
    $response= "YOu have already enrolled";

    }

	echo json_encode($response);
 
?>

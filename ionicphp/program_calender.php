<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
 
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }
 
  require "dbconnect.php";
  
    $data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
        $id= $request->id;
        $username= $request->username;
        $password= $request->password;
        $telephone = $request->telephone;
        $email= $request->email;;
        $name= $request->name;
        $role= $request->role;
        $DOB= $request->DOB;
        $gender= $request->gender;
        $citizenship= $request->citizenship;
        $campus= $request->campus;
        $program_name= $request->program_name;
        $year_joined= $request->year_joined;
        $major_type= $request->major_type;
        $major_one= $request->major_one;
        $major_two= $request->major_two;
        $minor_one= $request->minor_one;
        $minor_two= $request->minor_two;
        $status= $request->status;
 
	}


$sql = "INSERT INTO users (id, username, password, telephone, email, name, role, DOB, gender, 
citizenship, campus, program_name, year_joined, major_type, major_one, major_two, 
minor_one, minor_two, status)
VALUES ('$id', '$username', '$password', '$telephone', '$email', '$name', '$role', '$DOB', '$gender', 
'$citizenship', '$campus', '$program_name', '$year_joined', '$major_type', '$major_one', '$major_two', 
'$minor_one', '$minor_two', '$status')";

if ($con->query($sql) === TRUE) {
	$response= "Import successfull";
   
} else {
   $response= "Error: " . $sql . "<br>" . $db->error;
}
	echo json_encode($response);
 
?>

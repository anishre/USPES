<?php
	include_once 'connection.php';
	if(isset($_POST['submit'])){
		if($_FILES['csv_data']['name']){
			
			$arrFileName = explode('.',$_FILES['csv_data']['name']);
			if($arrFileName[1] == 'csv'){
				$handle = fopen($_FILES['csv_data']['tmp_name'], "r");
				while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
					$pid = mysqli_real_escape_string($conn,$data[0]);
					$programme = mysqli_real_escape_string($conn,$data[1]);
					$course_code = mysqli_real_escape_string($conn,$data[2]);
					$course_name = mysqli_real_escape_string($conn,$data[3]);
					$sem_offered = mysqli_real_escape_string($conn,$data[4]);
					$prereq = mysqli_real_escape_string($conn,$data[5]);
					$status = mysqli_real_escape_string($conn,$data[6]);

					$import = "INSERT into programme(pid,programme,course_code,course_name,
					sem_offered,prereq,status)
					values('$pid','$programme','$course_code','$course_name','$sem_offered','$prereq','$status')";
					mysqli_query($conn,$import);
/* 
					$id = mysqli_real_escape_string($conn,$data[0]);
					$username = mysqli_real_escape_string($conn,$data[1]);
					$password = mysqli_real_escape_string($conn,$data[2]);
					$telephone = mysqli_real_escape_string($conn,$data[3]);
					$email = mysqli_real_escape_string($conn,$data[4]);
					$name = mysqli_real_escape_string($conn,$data[5]);
					$role = mysqli_real_escape_string($conn,$data[6]);
					$DOB = mysqli_real_escape_string($conn,$data[7]);
					$gender = mysqli_real_escape_string($conn,$data[8]);
					$citizenship = mysqli_real_escape_string($conn,$data[9]);
					$campus = mysqli_real_escape_string($conn,$data[10]);
					$program_name = mysqli_real_escape_string($conn,$data[11]);
					$year_joined = mysqli_real_escape_string($conn,$data[12]);
					$major_type = mysqli_real_escape_string($conn,$data[13]);
					$major_one = mysqli_real_escape_string($conn,$data[14]);
					$major_two = mysqli_real_escape_string($conn,$data[15]);
					$minor_one = mysqli_real_escape_string($conn,$data[16]);
					$minor_two = mysqli_real_escape_string($conn,$data[17]);
					$status = mysqli_real_escape_string($conn,$data[18]);
					$import="INSERT into users(id, username, password, telephone, email, name, role, DOB, gender, 
					citizenship, campus, program_name, year_joined, major_type, major_one, major_two, 
					minor_one, minor_two, status) 
					values('$id', '$username', '$password', '$telephone', '$email', '$name', '$role', '$DOB', '$gender', 
					'$citizenship', '$campus', '$program_name', '$year_joined', '$major_type', '$major_one', '$major_two', 
					'$minor_one', '$minor_two', '$status')";
					mysqli_query($conn,$import); */
				}
				fclose($handle);
				print "Import done";
			}
		}
	}
?>
<html>
	<head>
		<title> CSV Upload:: Upload CSV and Insert into Database</title>
	<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  .button {
  background-color: #2B5FEC;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
  html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
</style>
	<body class="w3-light-grey">
		<div>
			<p>
				<p class="w3-large"><b><i></i><br><br>Please Select and Upload Your File</b></p>
				<form method='POST' enctype='multipart/form-data'>
					Upload CSV: <input type='file' class="button" name='csv_data' /> <input type='submit' class="button" name='submit' value='Upload CSV' />
					<br><br>
					<input type="button" value="Log Out!" onclick="history.back()">
				</form>
			</p>
		</div>
	</body>
</html>
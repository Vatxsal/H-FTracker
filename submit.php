<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="database123";

$conn=mysqli_connect($server_name,$username,$password,$database_name);
if(!$conn)
{
	die("Connection Failed:" . mysqli_connect_error());
}

if(isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']))
{   
     $username = $_POST['username'];
     $email = $_POST['email'];
     $password = $_POST['password'];

     $sql_query = "INSERT INTO entry_details (username,email,password)
     VALUES ('$username','$email','$password')";

     if (mysqli_query($conn, $sql_query)) 
     {
        echo '<script>alert("User registered successfully!");</script>';
        echo '<script>window.location.href = "index.html";</script>';
        exit();
     } 
     else
     {
        echo "Error: " . $sql . "" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>
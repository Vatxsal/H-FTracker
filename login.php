<?php
// Database credentials
$servername = ""; //Your servername
$username = ""; //Your username
$password = ""; //Your password
$dbname = ""; //Your database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Sanitize input to prevent SQL injection
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

// Query the database to check if the username and password exist
$query = "SELECT * FROM entry_details WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $query);

// Check if there's a match
if (mysqli_num_rows($result) > 0) {
  // Login successful
  echo '<script>alert("Logged In Successfully"); window.location.href = "dashboard.html";</script>';
} else {
  // Login failed
  echo '<script>alert("Invalid username or password!!"); window.location.href = "login.html";</script>';
}

// Close connection
mysqli_close($conn);
?>

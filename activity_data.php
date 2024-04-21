<?php
$steps = rand(1000, 10000);
$distance = rand(1, 100);
$calories = rand(100, 1000);

header('Content-Type: application/json');
echo json_encode(array(
    'steps' => $steps,
    'distance' => $distance,
    'calories' => $calories
));
?>

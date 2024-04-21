document.addEventListener("DOMContentLoaded", function() {
  function fetchActivityData() {
    fetch('activity_data.php')
      .then(response => response.json())
      .then(data => {
        document.getElementById('steps').innerText = data.steps;
        document.getElementById('distance').innerText = data.distance + ' km';
        document.getElementById('calories').innerText = data.calories;
      })
      .catch(error => {
        console.error('Error fetching activity data:', error);
      });
  }

  // Fetch activity data initially and then every 5 seconds
  fetchActivityData();
  setInterval(fetchActivityData, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
  // Select elements
  const stepsGoalInput = document.getElementById("stepsGoal");
  const caloriesGoalInput = document.getElementById("caloriesGoal");
  const stepsTakenDisplay = document.getElementById("steps");
  const caloriesBurnedDisplay = document.getElementById("calories");
  const stepsGoalDisplay = document.getElementById("stepsGoalDisplay");
  const caloriesGoalDisplay = document.getElementById("caloriesGoalDisplay");
  const goalForm = document.getElementById("goalForm");

  // Event listener for form submission
  goalForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get goal values from input fields
    const stepsGoal = parseInt(stepsGoalInput.value);
    const caloriesGoal = parseInt(caloriesGoalInput.value);

    // Reset form
    goalForm.reset();

    // Update goal display
    updateGoalDisplay(stepsGoal, caloriesGoal);

    // Show alert
    alert("Goal Setting Completed");
  });

  // Function to update goal display
  function updateGoalDisplay(stepsGoal, caloriesGoal) {
    stepsGoalDisplay.textContent = stepsGoal;
    caloriesGoalDisplay.textContent = caloriesGoal;
  }

  // Function to update progress display
  function updateProgress(stepsTaken, caloriesBurned) {
    stepsTakenDisplay.textContent = stepsTaken;
    caloriesBurnedDisplay.textContent = caloriesBurned;
  }

  // Simulate real-time progress tracking (for demonstration purposes)
  setInterval(function() {
    const stepsTaken = Math.floor(Math.random() * 10000); // Random steps
    const caloriesBurned = Math.floor(Math.random() * 1000); // Random calories
    updateProgress(stepsTaken, caloriesBurned);
  }, 5000); // Update every 5 seconds (adjust as needed)
});

// Function to update the real-time date
function updateDate() {
  // Get the current date
  const currentDate = new Date();

  // Extract day, month, and year
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  // Update the date in the activity tracker section
  document.getElementById('currentDate').innerText = `${month} ${day}, ${year}`;
}

// Call the updateDate function when the page loads
window.onload = function() {
  updateDate();

  // Update the date every second
  setInterval(updateDate, 1000);
};

document.addEventListener('DOMContentLoaded', function() {
  const workoutPlanItems = document.querySelector('.workout-plan-items');
  const addExerciseBtn = document.getElementById('addExerciseBtn');

  // Function to add exercise to the workout plan
  function addExercise() {
    const day = prompt('Enter the day (e.g., Day 1, Day 2,.....):');
    const exercise = prompt('Enter the exercise:');

    if (day && exercise) {
      const exerciseItem = document.createElement('p');
      exerciseItem.textContent = `${day}: ${exercise}`;
      workoutPlanItems.appendChild(exerciseItem);
    } else {
      alert('Please enter both day and exercise.');
    }
  }

  // Event listener for adding exercise when the Add Exercise button is clicked
  addExerciseBtn.addEventListener('click', addExercise);
});

let count = 0; // Initialize count to 0

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
  if (count % 10 === 0) {
    alert(`Milestone reached: ${count} followers!`);
  } 
}

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}
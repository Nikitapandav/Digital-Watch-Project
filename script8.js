function updateTimeAndDay() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  let day = now.toLocaleString('en-us', { weekday: 'long' });

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('day').textContent = day;
}

setInterval(updateTimeAndDay, 1000); // Update time and day every second
updateTimeAndDay(); // Initial call to display time and day immediately

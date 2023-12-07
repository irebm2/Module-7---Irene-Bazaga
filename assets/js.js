// Select the div once when page loads
var CurrentDay = $('#currentDay');

// Get the current date and time
var CurrentDate = dayjs().format(' dddd D MMM, YYYY');
var CurrentTime = dayjs().format('HH:mm:ss');

// Append both date and time once when page loads
CurrentDay.text(CurrentDate + ' ' + CurrentTime);

// Update both date and time every 1 second
setInterval(function () {
    CurrentDate = dayjs().format(' dddd D MMM, YYYY');
    CurrentTime = dayjs().format('HH:mm:ss');
    // Update the text with both date and time
    CurrentDay.text(CurrentDate + ' ' + CurrentTime);
}, 1000);
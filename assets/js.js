// Select the div once when page loads
var CurrentDay = $('#currentDay');

var CurrentDate = dayjs().format('DD/MM/YYYY');

// Append date once when page loads
CurrentDay.text(CurrentDate);

// Update time every 1 second
setInterval(function(){ 
    var CurrentTime = dayjs().format('HH:mm:ss');
    CurrentDay.text(CurrentDate + ' ' + CurrentTime);
}, 1000);
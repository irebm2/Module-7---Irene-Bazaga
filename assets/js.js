// Select the div once when page loads
var CurrentDay = $('#currentDay');

// Get the current date and time
var CurrentDate = dayjs().format('dddd, D MMM');
var CurrentTime = dayjs().format('HH:mm:ss');

// Append both date and time once when page loads
CurrentDay.text(CurrentDate + ' ' + CurrentTime);

// Update both date and time every 1 second
setInterval(function () {
    CurrentDate = dayjs().format('dddd, D MMM');
    CurrentTime = dayjs().format('HH:mm:ss');
    // Update the text with both date and time
    CurrentDay.text(CurrentDate + ' ' + CurrentTime);
}, 1000);


// Create time blocks
// This function creates a list of time blocks and appends them to the container element
let timeBlocksPage = $('.container');
// Create an empty array to store time blocks
let timeBlocks = [];

// Iterate from 9 to 18, creating a time block object for each iteration
for (let i = 9; i < 19; i++) {
    timeBlocks.push({
        time: i,
        data: i,
        className: 'time-block'
    });
}

// Convert time block objects to card elements
let timeBlocksCards = timeBlocks.map(timeBlock => {
    return $('<div class="time-block card">' + timeBlock.time + '</div>');
});

// Append the array of time block cards to the container element
timeBlocksPage.append(timeBlocksCards);
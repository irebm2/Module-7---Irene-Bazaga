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


// Create time blockscode for creating timeslots with titles, text boxes, and block buttons

$(document).ready(function() {
    // Function to create a timeslot
    function createTimeslot(time, text, isBlocked) {
      // Create a div element for the timeslot
      const $timeslot = $('<div>').addClass('timeslot'); // Add the class 'timeslot' to the div element
  
      // Create a div element for the time title
      const $timeTitle = $('<div>').addClass('time-title').text(time); // Add the class 'time-title' and set the text to the specified time
  
      // Create a textarea element for the text box
      const $textBox = $('<textarea>').addClass('text-box').val(text); // Add the class 'text-box' and set the value to the specified text
  
      // Create a button element for the block button
      const $blockButton = $('<button>').addClass('block-button'); // Add the class 'block-button'
  
      // Check if the timeslot is initially blocked
      if (isBlocked) {
        // Set the button text to "Unblock" if initially blocked
        $blockButton.text('Unblock');
      } else {
        // Set the button text to "Block" if not initially blocked
        $blockButton.text('Block');
      }
  
      // Add an event listener to the block button to toggle the block state
      $blockButton.click(() => {
        // Toggle the 'is-blocked' class on the timeslot
        $timeslot.toggleClass('is-blocked'); // Adds and removes the class 'is-blocked'
  
        // Update the button text based on the current block state
        $blockButton.text($timeslot.hasClass('is-blocked') ? 'Unblock' : 'Block'); // Sets the button text to 'Unblock' if blocked, 'Block' if not blocked
      });
  
      // Append the time title, text box, and block button to the timeslot
      $timeslot.append($timeTitle, $textBox, $blockButton);
  
      // Append the timeslot to the body
      $('body').append($timeslot);
    }
  
    // Create two timeslots with the specified times and initial block states
    createTimeslot('9 AM', 'This is a timeslot', false); // Create a timeslot at 9 AM with text "This is a timeslot" and is not initially blocked
    createTimeslot('10 AM', 'This is another timeslot', true); // Create a timeslot at 10 AM with text "This is another timeslot" and is initially blocked
  });
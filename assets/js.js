// Start when the document is ready.
$(document).ready(function () {
    // Get the current day element.
    let currentDay = $('#currentDay');
  
    // Function to update the time.
    function updateTime() {
      let now = dayjs();
  
      // Set the text of the current day element to the current time.
      currentDay.text(now.format('dddd, D MMM HH:mm:ss'));
      setTimeout(updateTime, 1000);
    }
  
    // Call the updateTime function to start.
    updateTime();
  
    // Loop over every hour of the day from 9 to 18.
    for (let hour = 9; hour <= 18; hour++) {
      // Create a time variable for the current hour.
      let time = dayjs().hour(hour).minute(0);
  
      // Create DOM elements for the time slot, the time title, and the text box.
      let timeslot = $('<div>').addClass('timeslot');
      let title = $('<div>').addClass('time-title').text(time.format('h A'));
      const placeholderTxt = `What is the plan for ${time.format('h A')}?`;
      let textBox = $('<textarea>').addClass('text-box time-block row future').attr('placeholder', placeholderTxt);
      let blockButton = $('<button>').addClass('block-button').text('Save 💾');
  
      // Check if the current hour is past the time slot hour, if so change the text box to have class 'past'.
      let currentTimeHour = parseInt(dayjs().format('HH')); // Get the current hour
      let BoxTimeHour = parseInt(time.format('HH')); // Get the hour of the current time slot
      if (currentTimeHour > BoxTimeHour) {
        textBox.removeClass('future').addClass('past');
      } else if (currentTimeHour == BoxTimeHour) {
        textBox.removeClass('future').addClass('present');
      }
  
      // Assign a click handler to the block button.
      blockButton.on('click', function (e) {
        // Prevent the button from causing a page reload.
        e.preventDefault();
  
        // Toggle the 'is-blocked' class of the time slot.
        timeslot.toggleClass('is-blocked');
  
        // Change the button text based on whether the time slot is blocked or not.
        blockButton.text(timeslot.hasClass('is-blocked') ? 'Remove ❌' : 'Save 💾');
  
        // Change the text box appearance based on whether the time slot is blocked or not.
        if (timeslot.hasClass('is-blocked')) {
          textBox.removeClass('future past').addClass('booked');
        } else {
          if (currentTimeHour > BoxTimeHour) {
            textBox.removeClass('booked').addClass('past');
          } else if (currentTimeHour === BoxTimeHour) {
            textBox.removeClass('booked').addClass('present');
          } else {
            textBox.removeClass('booked').addClass('future');
          }
        }
  
        // Save the state of all time slots in local storage.
        let state = [];
        $('.timeslot').each(function (index, el) {
          let isBlocked = $(el).hasClass('is-blocked'),
            hour = index + 9,
            text = $(el).find('textarea').val();
  
          state.push({ hour, isBlocked, text });
        });
  
        localStorage.setItem('timeslotData', JSON.stringify(state));
      });
  
      // Add the time title, text box, and block button to the time slot, and add the time slot to the body of the page.
      timeslot.append(title, textBox, blockButton);
      $('body').append(timeslot);
    }
  
    // Retrieve the saved state of time slots from local storage and apply it.
    if (localStorage.getItem('timeslotData')) {
      let data = JSON.parse(localStorage.getItem('timeslotData'));
  
      data.forEach((timeslotData) => {
        let timeslot = $('.timeslot:eq(' + (timeslotData.hour - 9) + ')'),
          textarea = timeslot.find('textarea'),
          button = timeslot.find('button');
  
        if (timeslotData.isBlocked) {
          textarea.val(timeslotData.text);
          textarea.removeClass('future').addClass('booked');
          button.text('Remove ❌');
          timeslot.addClass('is-blocked');
        }
      });
    }
  });
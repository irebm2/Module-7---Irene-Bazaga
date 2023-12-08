$(document).ready(function(){
    // Display the current date and time
    let currentDay = $('#currentDay');
 
    function updateTime() {
        let now = dayjs();
        currentDay.text(now.format('dddd, D MMM HH:mm:ss'));
 
        // Update time every 1 second
        setTimeout(updateTime, 1000);
    }
    
    updateTime();
 
    // Create timeslots for each hour from 9 AM to 6 PM
    for (let hour = 9; hour <= 18; hour++) {
        let time = dayjs().hour(hour).minute(0);
        let timeslot = $('<div>').addClass('timeslot');
        let title = $('<div>').addClass('time-title').text(time.format('h A'));
        let textBox = $('<textarea>').addClass('text-box').val(`This is a timeslot for ${time.format('h A')}`);
        let blockButton = $('<button>').addClass('block-button').text('Block');
 
        blockButton.on('click', () => {
             timeslot.toggleClass('is-blocked');
             blockButton.text(timeslot.hasClass('is-blocked') ? 'Unblock' : 'Block' );
        });
 
        timeslot.append(title, textBox, blockButton);
        $('body').append(timeslot);
    }
 });
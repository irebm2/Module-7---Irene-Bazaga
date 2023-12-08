$(document).ready(function () {

    let currentDay = $('#currentDay');

    function updateTime() {
        let now = dayjs();
        currentDay.text(now.format('dddd, D MMM HH:mm:ss'));
        setTimeout(updateTime, 1000);
    }

    updateTime();

    for (let hour = 9; hour <= 18; hour++) {
        let time = dayjs().hour(hour).minute(0);
        let timeslot = $('<div>').addClass('timeslot');
        let title = $('<div>').addClass('time-title').text(time.format('h A'));

        const placeholderTxt = `What is the plan for ${time.format('h A')}?`;
        let textBox = $('<textarea>').addClass('text-box time-block row future').attr('placeholder', placeholderTxt);

        let blockButton = $('<button>').addClass('block-button').text('Block 🔐');

        
        blockButton.on('click', () => {
            timeslot.toggleClass('is-blocked');
            blockButton.text(timeslot.hasClass('is-blocked') ? 'Unblock 🔓' : 'Block 🔐');

            if (timeslot.hasClass('is-blocked')) {
                textBox.removeClass('future').addClass('present');
            } else {
                textBox.removeClass('present').addClass('future');
            }    

    });
        

        timeslot.append(title, textBox, blockButton);
        $('body').append(timeslot);
    }
});
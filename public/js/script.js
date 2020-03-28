
const $ = jQuery;
// Jquery definitions
let giveCards = $('#give .card');
let needCards = $('#need .card');


window.addEventListener('load', () => {
    giveCards.each(function() {
        $(this).click(function () {
            $(this).toggleClass('selected');
        });
    });

    needCards.each(function() {
        $(this).click(function () {
            $(this).toggleClass('selected');
        });
    });
});

function submitForm(event) {
    event.preventDefault();

    // Validate fields
    let form = document.querySelector('form')
    form.reportValidity();

    let data = {};
    data.name = $('#uname').val();
    data.location = $('#zip').val();

    let giveSelected = $('#give .selected input');
    let needSelected = $('#need .selected input');

    if (giveSelected.length < 1 && needSelected.length < 1) {
        alert('Please select at least one item');
        return;
    }

    data.give = [];
    giveSelected.each(function () {
        data.give.push($(this).val());
    });

    data.need = [];
    needSelected.each(function () {
        data.need.push($(this).val());
    });
    console.log(data);

}
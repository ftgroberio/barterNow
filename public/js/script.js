
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

    //Generate request
    let req = new XMLHttpRequest();
    req.open("POST", "", true);

    req.addEventListener('load', (event,) => {
        if (req.status >= 200 && req.status < 400) {
        //    Refresh DOM with new data
            console.log(req.responseText);
        }
        else {
            console.log(req.status);
        }
    });
    req.setRequestHeader('Content-Type', 'application/json');

    // let payload = JSON.stringify(data);
    req.send(JSON.stringify(data));
}

document.getElementById('submit').addEventListener('click', displayInfo);
function displayInfo(){
    var req = new XMLHttpRequest;
    req.addEventListener('load', function(){
        if(req.status >= 200 && req.status < 400){
            document.getElementById('giveItem').textContent = response.give;
            document.getElementById('receiveItem').textContent = response.need;
            document.getElementById('user').textContent = response.uname + response.zip;
        }
        else{
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(null);
    event.preventDefault();
}

    

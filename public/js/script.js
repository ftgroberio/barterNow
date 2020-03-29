
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
            displayInfo(req);
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

function displayInfo(req){
    let response = JSON.parse(req.responseText);
    document.getElementById('give').textContent = response.give;
    document.getElementById('receive').textContent = response.need;       
    let userInfo = response.name.value;
    userInfo.concat("/");
    userInfo.concat(response.location.value);
    document.getElementById('user').textContent = userInfo;
    insertRow();
}

function insertRow(){
    //find a  table with id="myTable"
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);

    //insert new cells at the 1st and 2nd positin of the new <tr> element 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    //add some text to the new cells
    cell1.textContent = response.give;
    cell2.textContent = response.need;
    cell3.textContent = userInfo;
    var button1 = document.createElement("button1");
    var button2 = document.createElement("button2");
    button1.textContent = "Accept";
    button2.textContent = "Refuse";
    cell4.textContent = button1.textContent.concat(button2.textContent);
}
    

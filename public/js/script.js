
const $ = jQuery;
// Jquery definitions
let giveCards = $('#give .card');
let needCards = $('#need .card');
let view1 = $('#view1');
let view2 = $('#view2');


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
    // console.log(data);

    //Generate request
    let req = new XMLHttpRequest();
    req.open("POST", "", true);

    req.addEventListener('load', (event,) => {
        if (req.status >= 200 && req.status < 400) {
        //    Refresh DOM with new data
            console.log(JSON.parse(req.responseText).matches);
            view1.addClass('hidden');
            view2.removeClass('hidden');
            displayInfo(req);
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
    let response = JSON.parse(req.responseText).matches;

    let table = document.getElementById('resultsTable');

    for (let h in response) {
        for (let n in response[h].need) {
            for (let m in response[h].need[n].matches) {
                let row = table.insertRow(table.length);
                let cells = [];
                for (let i = 0; i < 4; i++) {
                    cells[i] = row.insertCell(i);
                }
                cells[0].innerHTML =
                    "<div class='card'>\n" +
                        "<div class='card'>" +
                            "<img class='fixedThumbnail' src='" + response[h].have.photo + "'>" + "<br>" +
                                response[h].have.displayName +
                        "</div>" +
                    "</div>";
                cells[1].innerHTML =
                    "<div class='card'>\n" +
                        "<div class='card'>" +
                            "<img class='fixedThumbnail' src='" + response[h].need[n].item.photo + "'>" + "<br>" +
                                response[h].need[n].item.displayName +
                        "</div>" +
                    "</div>";
                cells[2].textContent = response[h].need[n].matches[m].name + " / " + response[h].need[n].matches[m].location;

                function returnAccept (response) {
                    let thisResponse = response;
                    return function () {
                        alert(thisResponse[h].need[n].matches[m].name + " lives in " + thisResponse[h].need[n].matches[m].location + ". Go find them!");
                    }
                }

                let accept = returnAccept(response);
                // accept();

                cells[3].innerHTML = "<input type='button' value='Accept' onclick='alert(\"" + response[h].need[n].matches[m].name + " lives in " + response[h].need[n].matches[m].location + ". Go find them!" + "\")'>";

            }
        }
    }
}



$("#backButton").on("click", function(){
    $("#view2").toggleClass('hidden');
    $("#view1").toggleClass('hidden');

    let table = document.getElementById('resultsTable');
    let rowCount = table.rows.length;
    for (let i = (rowCount - 1); i > 0; i--) {
        table.deleteRow(i);
    }
});

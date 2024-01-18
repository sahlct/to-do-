let title, message, date;
let entris = [];
let entrissec = [];
let entry;
let newDiv, new1, new2;
let count = 0;
let divId;
let mainid;
let selectedIndex, cards;
let selectvalue;
let enterDate;


function checkOption() {
    selectvalue = document.getElementById("select_box").value
    console.log(selectvalue);
    if (selectvalue == 1) {
        document.getElementById("filterdate").style.display = "none"
        document.getElementById("filterdate").value = ''
        rearrangeDivs()
    } else {
        document.getElementById("filterdate").style.display = "flex";
    }
}

document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    title = document.getElementById("title-name").value;
    message = document.getElementById("message-text").value;
    date = document.getElementById("date").value;
    document.getElementById("empty").style.display = "none";
    event.target.reset();
    count++

    entry = { title, message, date };
    entris.push(entry);
    entrissec.push(entry);
    console.log(entry);
    rearrangeDivs()
});


function editindex(index) {
    // array values update to second modal 
    selectedIndex = index
    document.getElementById("title-second").value = entris[index - 1].title;
    document.getElementById("message-second").value = entris[index - 1].message;
    document.getElementById("date-second").value = entris[index - 1].date;
}

document.getElementById("myform-second").addEventListener("submit", function (evnt) {
    evnt.preventDefault();
    //second modal edited values update to arrays
    entris[selectedIndex - 1].title = document.getElementById("title-second").value;
    entris[selectedIndex - 1].message = document.getElementById("message-second").value;
    entris[selectedIndex - 1].date = document.getElementById("date-second").value;
    entrissec[selectedIndex - 1].title = document.getElementById("title-second").value;
    entrissec[selectedIndex - 1].message = document.getElementById("message-second").value;
    entrissec[selectedIndex - 1].date = document.getElementById("date-second").value;

    cards = document.getElementsByClassName('card_div');
    console.log(cards);

    const selectedCard = cards[selectedIndex - 1]
    selectedCard.innerHTML = `
        <div id="title-div">
            <h3>${entris[selectedIndex - 1].title}</h3>
            <h6>${entris[selectedIndex - 1].message}</h6>
            <h6>${entris[selectedIndex - 1].date}</h6>
        </div>
        <div style="flex-grow: 1;"></div>
        <div id="button-div">
            <button type="button" id="delete" class="btn btn-success" onclick="datadelete(${selectedIndex})">Delete</button>
            <button type="button" id="edit" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#editmodal" onclick="editindex(${selectedIndex})">Edit</button>
            <button type="button" id="mark" class="btn btn-danger" onclick="read(${selectedIndex})">Mark as complete</button>
        </div>
    `;
    console.log("selectedindex ", selectedIndex);
    console.log("card length is", cards.length)
    // console.log("deleter is ",deleter);
    console.log("entris is ", entris);
    console.log("count is", count - 1);
    evnt.target.reset();
});

function read(count) {
    selectedIndex = count
    const reader = document.getElementsByClassName('card_div');
    const readercard = reader[selectedIndex - 1]
    let classcheck = "mainread"
    console.log("count is", count - 1);
    let j = 0
    console.log(entris[j].title);
    console.log(entris[j].message);
    if (readercard.classList.contains(classcheck)) {
        readercard.classList.remove("mainread")
    } else {
        readercard.classList.add("mainread");
    }
}

function datadelete(datacount) {
    selectedIndex = datacount;
    const deleter = document.getElementsByClassName('card_div');
    entris.splice(selectedIndex - 1, 1)
    const deletercard = deleter[0]
    deletercard.remove();
    console.log("deleter is ", deleter);
    console.log("entris is ", entris);
    console.log("entris length", entris.length);
    rearrangeDivs()
}

function rearrangeDivs() {
    removeAllCardDivs()
    enterDate = document.getElementById("filterdate").value

    const container = document.getElementById("container-fluid");
    container.innerHTML = '';
    count = 0;
    while (count < entris.length) {
        if (enterDate == entris[count].date || enterDate === '') {

            const newDiv = document.createElement("div");
            newDiv.id = "creatediv";
            newDiv.className = 'card_div'

            newDiv.innerHTML = `
            <div id="title-div">
                <h3>${entris[count].title}</h3>
                <h6>${entris[count].message}</h6>
                <h6>${entris[count].date}</h6>
            </div>
            <div style="flex-grow: 1;"></div>
            <div id="button-div">
                <button type="button" id="delete" class="btn btn-success" onclick="datadelete(${count + 1})">Delete</button>
                <button type="button" id="edit" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#editmodal" onclick="editindex(${count + 1})">Edit</button>
                <button type="button" id="mark" class="btn btn-danger" onclick="read(${count + 1})">Mark as complete</button>
            </div>
        `;

            // Append the new div to the container
            container.appendChild(newDiv);
        }

        count++
    }

    // Set container styles outside the loop
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "flex-start";
}

function removeAllCardDivs() {
    const deleter = document.getElementsByClassName('card_div');
    while (deleter.length > 0) {
        deleter[0].remove();
    }
    console.log("All card_div elements removed");
}

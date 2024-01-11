let title, message, date;
let entris = [];
let entry;
let newDiv, new1, new2;
let count = 0;
let divId;
let mainid;
let selectedIndex;

document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    title = document.getElementById("title-name").value;
    message = document.getElementById("message-text").value;
    date = document.getElementById("date").value;
    document.getElementById("empty").style.display = "none";
    event.target.reset();
    while (true) {
        count++

        entry = { title, message, date };
        entris.push(entry);
        console.log(entry);

        newDiv = document.createElement("div");
        newDiv.id = "creatediv";
        newDiv.className = 'card_div'

        newDiv.innerHTML = `
            <div id="title-div">
                <h3>${entry.title}</h3>
                <h4>${entry.message}</h4>
                <h4>${entry.date}</h4>
            </div>
            <div style="flex-grow: 1;">

            </div>
            <div id="button-div">
                <button type="button" id="delete" class="btn btn-success" onclick="datadelete(${count})">Delete</button>
                <button type="button" id="edit" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#editmodal" onclick="passindex(${count})">Edit</button>
                <button type="button" id="mark" class="btn btn-danger" onclick="read(${count})">Mark us complete</button>
            </div>
    `

        document.getElementById("container-fluid").appendChild(newDiv);
        document.getElementById("container-fluid").style.flexDirection = "column"
        document.getElementById("container-fluid").style.alignItems = "center"
        document.getElementById("container-fluid").style.justifyContent = "flex-start";
        return
    }
});

    
function passindex(index) {
    selectedIndex = index
    document.getElementById("title-second").value = entris[index-1].title;
    document.getElementById("message-second").value = entris[index-1].message;
    document.getElementById("date-second").value = entris[index-1].date;
}

document.getElementById("myform-second").addEventListener("submit", function (evnt) {
    evnt.preventDefault();
    entris[selectedIndex-1].title = document.getElementById("title-second").value;
    entris[selectedIndex-1].message = document.getElementById("message-second").value;
    entris[selectedIndex-1].date = document.getElementById("date-second").value;

    const cards = document.getElementsByClassName('card_div');
    console.log(cards);

    const selectedCard = cards[selectedIndex - 1]
    selectedCard.innerHTML = `
    <div id="title-div">
        <h3>${entris[selectedIndex-1].title}</h3>
        <h4>${entris[selectedIndex-1].message}</h4>
        <h4>${entris[selectedIndex-1].date}</h4>
    </div>
    <div style="flex-grow: 1;">

    </div>
    <div id="button-div">
        <button type="button" id="delete" class="btn btn-success onclick="datadelete(${selectedIndex})"">Delete</button>
        <button type="button" id="edit" class="btn btn-primary" data-bs-toggle="modal"
        data-bs-target="#editmodal" onclick="passindex(${selectedIndex})">Edit</button>
        <button type="button" id="mark" class="btn btn-danger" onclick="read(${selectedIndex})">Mark us complete</button>
    </div>
`
    
    evnt.target.reset();

})

function read(count){
    selectedIndex = count
    const reader = document.getElementsByClassName('card_div');
    const readercard = reader[selectedIndex - 1]
    let classcheck = "mainread"
    if(readercard.classList.contains(classcheck)){
        readercard.classList.remove("mainread")
    }else{
        readercard.classList.add("mainread");
    }
}

function datadelete(count){
    selectedIndex = count;
    const deleter = document.getElementsByClassName('card_div');
    const deletercard = deleter[selectedIndex-1]
    deletercard.remove();
    console.log(entris);
}

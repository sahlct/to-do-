let title, message, date;
let entris = [];
let entry;
let newDiv, new1, new2;

document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    title = document.getElementById("title-name").value;
    message = document.getElementById("message-text").value;
    date = document.getElementById("date").value;
    document.getElementById("empty").style.display = "none";
    event.target.reset();

    entry = { title, message, date };
    entris.push(entry);
    console.log(entry);

    newDiv = document.createElement("div");
    newDiv.id = "creatediv";

    newDiv.innerHTML = `
            <div id="title-div">
                <h3>${entry.title}</h3>
                <h4>hi</h4>
                <h4> 2024-01-07</h4>
            </div>
            <div style="flex-grow: 1;">

            </div>
            <div id="button-div">
                <button type="button" id="delete">Delete</button>
                <button type="button" id="edit">Edit</button>
                <button type="button" id="mark">Mark us complete</button>
            </div>
    `
    
    document.getElementById("container-fluid").appendChild(newDiv);
    document.getElementById("container-fluid").style.flexDirection = "column"
    document.getElementById("container-fluid").style.alignItems = "center"
    document.getElementById("container-fluid").style.justifyContent = "flex-start";
});

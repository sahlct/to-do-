let title, message, date;
let entris = [];
let entry;
let newDiv;
let emptyDiv;

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
    newDiv.style.backgroundColor = "rgba(255,255,255,0.3)";
    newDiv.style.width = "100%";
    newDiv.style.height = "200px";
    newDiv.innerHTML += `<h4>${entry.title}, ${entry.message}, ${entry.date}</h4>`;
    document.getElementById("container-fluid").appendChild(newDiv);
});

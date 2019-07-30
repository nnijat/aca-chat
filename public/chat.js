`use strict`

// window.onload
// make a post request to `/clients`. make note, the returned data is not json, it is text()
// Save the id in a global variable.

let clientId = 0;

window.onload = function () {
    fetch("/clients", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.text())
        .then(data => clientId = data)
}

// When the send button is click:
// retrieve the contents of the text box
function send() {
    let message = document.getElementById("text").value;

    // create the body as json that looks like `{"clientId":yourid,"text":"value from text box"}`
    let obj = {
        clientId: clientId,
        text: message
    }
    console.log("obj: " + JSON.stringify(obj));

    // make a post request to your server at /messages
    fetch("/messages", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => console.log(data))
    document.getElementById("text").value = '';
}

//learn how to use setInterval to do a fetch call every 1000 miliseconds
// use this tool to do a fetch call to `/messages` to get the messages array
// loop the messages array and show the messages in the web page using innerHTML

setInterval(function () {
    let messagesDiv = document.getElementById('messages')
    let displayMsg = '';
    fetch('/messages')
        .then(response => response.json())
        .then(data => {
            data.map(m => {
                displayMsg += `<div>${'message from person ' + m.clientId + ': ' + m.text}</div>`
            })
            messagesDiv.innerHTML = displayMsg;
        })
}, 1000);
`use strict`

// window.onload
let clientId = 0;

window.onload = function () {
    return fetch('/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.text())
        .then(data => clientId = data)
}

// Create a text input and a button that says "send"
function postInputTxt() {
    let message = document.getElementById('inputMessage').value;
    console.log("printing text", mess)
    let obj = {
        clientId: clientId,
        text: text
    }
    console.log(obj);
    fetch('/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

setInterval(function () {
    let messagesDiv = document.getElementById('messages')
    let displayMsg = '';
    fetch('/messages')
        .then(response => response.json())
        .then(data => {
            data.map(m => {
                displayMsg += `<div>${m.text}</div>`
            })
            messagesDiv.innerHTML = displayMsg;
        })
}, 1000);
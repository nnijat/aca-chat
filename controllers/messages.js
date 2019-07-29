`use strict`

const messages = [
    {
        clientId: 0,
        text: "Welcome To Chat"
    }
];

exports.list = function list(request, response) {
    let enableComments = messages.filter(c => c.isActive != false);
    response.json(enableComments);
}

exports.create = function create(request, response) {
    let messageBody = request.body;
    messages.push(messageBody);
    response.json(messages);
}
`use strict`

let clientId = 0;

exports.create = function create(request, response) {
    clientId += 1;
    response.send(clientId.toString())
}

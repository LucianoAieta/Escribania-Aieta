export var listClients = function (clients) {
    var array_reversed = clients.reverse();
    var clientsLength = clients.length;
    for (var i = 0; i < clientsLength; i++) {
        var client = array_reversed[i];
        var item = document.createElement('DIV');
        item.innerHTML = "\n            <p class='atom-title-medium'>" + client.name + " " + client.surname + "</p>\n        ";
        item.id = "" + client.id;
        item.classList.add('molecule-crud-item');
        var list = document.querySelector('.organism-crud-list');
        list.appendChild(item);
    }
    return clients;
};

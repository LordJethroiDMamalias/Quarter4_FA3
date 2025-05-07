var n;
var shape = "";
while (isNaN(n)) {
    n = parseInt(prompt("Please enter a number."));
}

if (n % 2 == 0) {
    for (let c = n; c >= 1; c--) {
        for (let i = 1; i <= c; i++) {
            shape += c + " ";
        }
        shape += "<br>"
    }
}
else {
    for (let c = n; c >= 1; c--) {
        for (let i = 1; i <= n; i++) {
            shape += c + " ";
        }
        shape += "<br>"
    }
}
document.getElementById("shape").innerHTML = shape;

var contacts_list = [];

function contacts_add() {
    var contact = document.getElementById("contacts_input").value;
    if (contacts_list.length >= 7) {
        contacts_list.shift();
    }
    contacts_list.push(contact);
    document.getElementById("contacts").innerHTML = contacts_list.join(" ");
    return false;
}

function contacts_remove() {
    contacts_list.pop();
    document.getElementById("contacts").innerHTML = contacts_list.join(" ");
    return false;
}
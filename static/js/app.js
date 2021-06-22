// from data.js
var tableData = data;

// Load Table

function LoadDataFromJSON() { 
    ResetTable()
    var table = document.getElementById("ufo-table");
    data.forEach(element => {
        tr = table.insertRow(-1);
        console.log(element.length);
        Object.keys(element).forEach(key => {
            var thisCell = tr.insertCell(-1);
            thisCell.innerHTML = element[key];
        });
    });

};

function ResetTable() {
    var table = document.getElementById("ufo-table");
    var oldBody = document.getElementById("ufo-table-body");
    var newBody = document.createElement("tbody")
    table.replaceChild(newBody, oldBody);
    newBody.setAttribute("id", "ufo-table-body")
}

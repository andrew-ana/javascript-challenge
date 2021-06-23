// from data.js
var tableData = data;

// Load Table

function LoadDataFromJSON() { 
    ResetTable()
    let dateTime = document.getElementById("datetime").value;
    console.log(dateTime);
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("city").value;

    //var dateArray = dateTime.split("/");
    //var dateObj =  new Date(dateTime);
    //console.log(dateObj);
    
    
    
    let table = document.getElementById("ufo-table-body");

    data.forEach(element => {
        if ( new Date(element["datetime"]) == dateTime) {
            let tr = table.insertRow(-1);
            Object.keys(element).forEach(key => {
                var thisCell = tr.insertCell(-1);
                thisCell.innerHTML = element[key];
            });
        };
    });
};

function ResetTable() {
    let table = document.getElementById("ufo-table");
    let oldBody = document.getElementById("ufo-table-body");
    let newBody = document.createElement("tbody")
    table.replaceChild(newBody, oldBody);
    newBody.setAttribute("id", "ufo-table-body")
}

function ResetForm() {
    document.getElementById("filter-form").reset();
    ResetTable();
};

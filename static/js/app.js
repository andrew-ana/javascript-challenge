// from data.js
var tableData = data;

// Load Table

function LoadDataFromJSON() { 
    // Clear output table
    ResetTable()
    // Get Date and transform into date obj
    let dateTimeArray = document.getElementById("datetime").value.split("-");
    let dateTime = new Date(dateTimeArray[0], dateTimeArray[1]-1, dateTimeArray[2]);
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let shape = document.getElementById("shape").value;

    
    
    
    let table = document.getElementById("ufo-table-body");

    data.forEach(element => {
        if ( new Date(element["datetime"]).getTime() == dateTime.getTime()) {
            let tr = table.insertRow(-1);
            Object.keys(element).forEach(key => {
                let thisCell = tr.insertCell(-1);
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

// from data.js
var tableData = data;

// Get unique values from data
var dates = [...new Set (data.map(element => element.datetime))];
var cities = [...new Set (data.map(element => element.city))];
var states = [...new Set (data.map(element => element.state))];
var countries = [...new Set (data.map(element => element.country))];
var shapes = [...new Set (data.map(element => element.shape))];

// Add dropdown Items
var cityList = document.getElementById("city-list");

function addLabels(listArray, listNodeID, name) {
    var i = 1;
    var listNode = document.getElementById(listNodeID);
    listArray.forEach(element => {
        // Create the "input" item
        var thisInput = document.createElement("input");
        // Add attributes
        thisInput.setAttribute("class", "dropdown-item");
        thisInput.setAttribute("type", "checkbox");
        thisInput.setAttribute("value", element);
        thisInput.setAttribute("name", `${name}_${i}`);
        // Create the "label" item
        var thisLabel = document.createElement("label");
        thisLabel.setAttribute("for", `${name}_${i}`);
        thisLabel.innerHTML = element;
        // Create the line break
        var thisBr = document.createElement("br")
        // Append children to parent node
        listNode.appendChild(thisInput);
        listNode.appendChild(thisLabel);
        listNode.appendChild(thisBr);
        // increment name suffix
        i ++;


    })
}



// Load Table
function LoadDataFromJSON() { 
    // Clear output table
    ResetTable()
    // Get Date and transform into date obj
    let dateTimeArray = document.getElementById("datetime").value.split("-");
    let dateTime = new Date(dateTimeArray[0], dateTimeArray[1]-1, dateTimeArray[2]);
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

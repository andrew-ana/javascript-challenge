// from data.js
var tableData = data;

// Get unique values from data
var dates = [...new Set (data.map(element => new Date(element.datetime).getTime()))];
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

// Add the list items
addLabels(cities, "city-list", "city");
addLabels(states, "state-list", "state");
addLabels(countries, "country-list", "country");
addLabels(shapes, "shape-list", "shape");

// Read Form Data
function ReadFormDate() {
    let dateInput = document.getElementById("datetime").value;
    if (dateInput) {
        console.log(dateInput);
        let dateTimeArray = dateInput.split("-");
        var datesToSearch = [new Date(dateTimeArray[0], dateTimeArray[1]-1, dateTimeArray[2]).getTime()];
    } else {
        console.log(dates);
        var datesToSearch = dates;
    }
    return datesToSearch;
}

function ReadNodeChecks(listArray, listNodeID){
    var listNode = document.getElementById(listNodeID);
    var checkedNodes = [];
    var checkList = listNode.getElementsByTagName("input");
    for (var i=0; i<checkList.length; i++)  {
        thisItem = checkList[i]
        if (thisItem.checked) { checkedNodes.push(thisItem.value);}
    };
    if (checkedNodes.length) {
        console.log(checkedNodes)
        return checkedNodes;
    } else {
        console.log(listArray)
        return listArray;
    }
}




// Load Table
function LoadDataFromJSON() { 
    // Clear output table
    ResetTable()
    // Get Dates to search
    let datesToSearch = ReadFormDate();
    let table = document.getElementById("ufo-table-body");
    // Get Cities to Search
    ReadNodeChecks(cities, "city-list");

    // Determine which elements to search
    data.forEach(element => {
        if ( datesToSearch.includes(new Date(element.datetime).getTime())) {
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

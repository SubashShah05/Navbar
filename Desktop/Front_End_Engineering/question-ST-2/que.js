// Declare the global array to hold employee details
let empDetails = [];

// Access the table body where we will append rows
let tbody = document.querySelector("#empTable tbody");

// Function that adds the form data to the table and localStorage
function addRecord() {
    // Create formData object and assign values from the form
    let formData = {
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contactNumber').value,
        address: document.getElementById('address').value,
        empName: document.getElementById('empName').value,
        workExp: document.getElementById('workExp').value,
        techSkill: document.getElementById('techSkill').value
    };

    // Push the formData to the empDetails array
    empDetails.push(formData);

    // Save the updated empDetails array to localStorage
    localStorage.setItem('empDetails', JSON.stringify(empDetails));

    // Add the new record to the table
    addRecordToTable(formData);
}

// Function to create and add a row to the table
function addRecordToTable(obj) {
    // Create a new table row
    let tr = document.createElement("tr");

    // Loop through the object keys and create a table cell for each value
    for (let key in obj) {
        let td = document.createElement("td");
        td.innerText = obj[key]; // Assign the value from the object to the table cell
        tr.appendChild(td);
    }

    // Append the row to the table body
    tbody.appendChild(tr);
}

// Function to load data from localStorage when the page is loaded
function loadData() {
    // Get empDetails from localStorage
    let details = localStorage.getItem('empDetails');

    // If data exists in localStorage, load it into the empDetails array
    if (details) {
        empDetails = JSON.parse(details);

        // Loop through each record and add it to the table
        empDetails.forEach((record) => {
            addRecordToTable(record);
        });
    }
}

// Call the loadData function when the window is loaded
window.onload = loadData;

// Attach the addRecord function to the submit button
document.getElementById('btnSubmit').addEventListener('click', addRecord);

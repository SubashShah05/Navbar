const taskfield = document.querySelector("#taskfield");
const addbutton = document.querySelector("#addbutton");
const container = document.querySelector("#container");

addbutton.addEventListener("click", () => {
    // Check if the input field is not empty
    if  (taskfield.value) {
        let li = document.createElement("li"); // Create a new list item
        
        li.innerText = taskfield.value; // Set the text of the list item to the input value
        
        // Create a delete button for each task
        let deletebtn = document.createElement("button");
        deletebtn.innerText = "X";
        deletebtn.style.marginLeft = "20px"; // Optional: add some space between the text and the button

        // Add an event listener to the delete button to remove the task
        deletebtn.addEventListener("click", () => {
            container.removeChild(li);
        });
        
        li.appendChild(deletebtn); // Add the delete button to the list item
        container.appendChild(li); // Append the list item to the container (div)
        
        taskfield.value = ""; // Clear the input field after the task is added
    }
});



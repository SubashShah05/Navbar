const card = document.querySelector("#container");

        for(let i = 1; i <= 100; i++) {
            const newDiv = document.createElement("div");  // Create a new div element
            newDiv.innerText = `div ${i}`;  // Set the text of the new div
            card.appendChild(newDiv);  // Append the new div to the container
        }
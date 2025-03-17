//Task 1: Creating the Base Structure.
const dashboardContainer = document.getElementById("riskDashboard"); //select the riskDashboard container and save it as a variable
dashboardContainer.style.display = "flex"; //make the display of the container a flex display
dashboardContainer.style.flexWrap = "wrap"; //have the elements wrap
dashboardContainer.style.gap = "10px"; //give some space between cards

document.addEventListener("DOMContentLoaded", () => { //add an event listner to the document to execute when the DOM content is done laoding
    console.log("Risk Dashboard Loaded"); //once it is done, console log this message
});

//Task 2: Adding Risk Items Dynamically.
function addRiskItem(riskName, riskLevel, department) { //create a function that takes 3 arguments
    const newCard = document.createElement("div"); //create a new div class and save it as a variable

    newCard.setAttribute("class", "riskCard"); //set the class to be "riskCard" as specified in the assignment

    newCard.innerHTML = `
    <h2>Name: ${riskName}</h2>
    <p>Risk Level: ${riskLevel}<br>
    Department: ${department}</p>
    <button class="removeButton">Remove</button>`; //set the HTML and use the input variables

    //Task 3: Removing Risk Items.
    const rmvButton = newCard.querySelector(".removeButton");
    rmvButton.addEventListener("click", (event) => {
    dashboardContainer.removeChild(newCard);
    event.stopPropagation();
    });


    newCard.style.textAlign = "center"; //center the text in the card
    newCard.style.width = "32%"; //set the width of each card to be slightly less than a third of the screen



    //Task 4: Categorizing Risks by Level.
    if (riskLevel.toLowerCase() === "low") { //create an if statement to check if the value of the input is "low" when all characters are turned to lowercase
        newCard.style.backgroundColor = "green"; //if they are, make the background green
    } else if (riskLevel.toLowerCase() === "medium") { //same check, but for medium
        newCard.style.backgroundColor = "yellow"; //if it is, make the background yellow
    } else if (riskLevel.toLowerCase() === "high") { //same check for high
        newCard.style.backgroundColor = "red"; //if it is, make background red
    } else {
        newCard.style.backgroundColor = "gray"; //otherwise, make the background gray
    }


    dashboardContainer.appendChild(newCard); //append the new card to the container
}


const submitButton = document.getElementById("riskSubmit"); //set the submit button equal to a variable

submitButton.addEventListener("click", (event) => { //add a click event listener to the submit button
    event.preventDefault(); //prevent a page reload

    const riskName = document.getElementById("riskName").value;
    const department = document.getElementById("department").value;
    const riskLevel = document.getElementById("riskLevel").value; //take the input from the form and save their values as variables

    addRiskItem(riskName, riskLevel, department); //use the variables and input them into the function
});

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations"); //test data

//Task 3 test data
addRiskItem("Market Fluctuations", "High", "Finance");

//Task 4 test data
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
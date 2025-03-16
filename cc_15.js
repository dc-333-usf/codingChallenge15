//Task 1: Creating the Base Structure.
const dashboardContainer = document.getElementById("riskDashboard"); //select the riskDashboard container and save it as a variable
dashboardContainer.style.display = "flex";
dashboardContainer.style.flexWrap = "wrap";
dashboardContainer.style.gap = "10px";

document.addEventListener("DOMContentLoaded", () => { //add an event listner to the document to execute when the DOM content is done laoding
    console.log("Risk Dashboard Loaded"); //once it is done, console log this message
});


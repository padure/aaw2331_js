const jobs = JSON.parse( localStorage.getItem("jobs") ) ?? [];

//Elements
const jobsElement = document.getElementById("jobs");
const addJobElement = document.getElementById("addJob");

//Functions

//Events
addJobElement.addEventListener("submit", (e)=>{
    e.preventDefault();
});

//Main


const users = [
    "Mrs. Hannah Corwin",
    "Kara Will",
    "Candace Blanda I",
    "Bertha Torphy",
    "Marie Rolfson",
    "Shelia Mraz",
    "Evelyn Dicki",
    "Debbie Brakus",
    "Ora O'Conner",
];

// localStorage.setItem("jobs", JSON.stringify(jobs));
const jobs = JSON.parse( localStorage.getItem("jobs") ) ?? [];

//Functions
const render = (data, element) => {
    data.forEach( job => {
        element.innerHTML += `<div class='col-2 m-2 p-4 bg-white'>
            <h6>${job.title}</h6>
            <p>${job.description}</p>
            <span class='badge text-bg-dark'>${job.type}</span>
        </div>`;
    });
}
//Elements
const jobsElement = document.getElementById("jobs");
//Filters
const jobsLM30 = jobs.filter( job => job.title.length >= 30 );
//Main
render(jobsLM30, jobsElement);


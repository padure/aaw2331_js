//Data
const users = JSON.parse( localStorage.getItem("users") ) ?? [];
//Elements
const usersElement = document.getElementById("users");
const addUserElement = document.getElementById("addUser");
//Functions
const render = () => {
    usersElement.innerHTML = "";
    users.forEach( (user) => {
        usersElement.innerHTML += `<div class='text-sm shadow p-2 bg-linear-to-br from-zinc-500 to-zinc-900 text-white w-full'>
            <h5><span class="font-bold">Name:</span> ${user.name}</h5>
            <h5><span class="font-bold">Email:</span> ${user.email}</h5>
        </div>`;
    });
}
//Events
addUserElement.addEventListener("submit", (e)=>{
    e.preventDefault();
    const user = {
        name : e.target.name.value,
        email: e.target.email.value
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    addUserElement.reset();
    render();
});
//Main
render();
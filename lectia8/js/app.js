const clickElement = document.getElementById("click");

// 2
// clickElement.onclick = (e) => {
//     console.log(e.target);
// }

// 3
clickElement.addEventListener("click", (e) => {
    console.log(e.target);
}, { once: true });


const loginForm = document.forms.login;

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userData = {
        name: this.name.value,
        email: this.email.value
    }
    console.log(userData);
});

const items = document.querySelectorAll(".item");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let active = 0;

const changeItem = (number) => {
    active = active + number;
    items.forEach(item => item.classList.add("hidden"));
    if(active == items.length) active = 0;
    if(active < 0) active = items.length - 1;
    items[active].classList.remove("hidden");
}
const intreval = setInterval(()=>{
    changeItem(1);
}, 3000);

next.addEventListener("click", ()=>{
    changeItem(1);
});
prev.addEventListener("click", ()=>{
    changeItem(-1);
});
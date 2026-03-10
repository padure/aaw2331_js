//Sarcina 1
const sarcina1Element = document.getElementById("sarcina-1");

sarcina1Element.addEventListener("click", function(){
    this.classList.remove("bg-sky-500");
    this.classList.add("bg-gray-500");
});

sarcina1Element.addEventListener("dblclick", function(){
    this.classList.add("bg-sky-500");
    this.classList.remove("bg-gray-500");
});

//Sarcina 2
const mouseAreaElement = document.getElementById("mouseArea");
const messageElement = document.getElementById("message");

mouseAreaElement.addEventListener("mouseenter", function(){
    messageElement.textContent = "Cursorul este în zona definită";
});

mouseAreaElement.addEventListener("mouseleave", function(){
    messageElement.textContent = "Mișcă cursorul peste o zonă definită";
});

mouseAreaElement.addEventListener("mousemove", function(e){
    const area = mouseAreaElement.getBoundingClientRect();
    const x = Math.round(e.clientX - area.left);
    const y = Math.round(e.clientY - area.top);
    messageElement.textContent = `Coordonatele din zona sunt: X: ${x}, Y: ${y}`;
});

//Sarcina 3
const imageElement = document.getElementById("image");

imageElement.addEventListener("mouseover", function(){
    this.classList.add("scale-110");
});

imageElement.addEventListener("mouseout", function(){
    this.classList.remove("scale-110");
});

//Sarcina 4
const menuElement = document.getElementById("menu");
const menuItemsElement = document.getElementById("menu_items");

menuElement.addEventListener("contextmenu", function(e){
    e.preventDefault();
    const area = menuElement.getBoundingClientRect();
    const x = e.clientX - area.left;
    const y = e.clientY - area.top;

    menuItemsElement.style.left = `${x}px`;
    menuItemsElement.style.top = `${y}px`;

    menuItemsElement.classList.remove("hidden");
});

menuElement.addEventListener("click", function(){
    menuItemsElement.classList.add("hidden");
});

[...menuItemsElement.children].forEach( btn => {
    btn.addEventListener('click', function(){
        console.log(this.textContent);
    });
});


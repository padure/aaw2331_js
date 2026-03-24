const blocks = document.getElementsByTagName("div");

[...blocks].forEach( block => block.classList.add("border") );

const paragrafe = document.querySelectorAll("p");

paragrafe.forEach( p => {
    const b = document.createElement("b");
          b.textContent = "Modificat";
    p.textContent = "";
    p.append(b);
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    [...blocks].forEach( div => div.remove() );
});
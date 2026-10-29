// Menú desplegable para móvil (botón de tres rayas)
const nav = document.querySelector("nav");
const burger = document.createElement("button");
burger.className = "burger";
burger.setAttribute("aria-label", "Menú");
burger.innerHTML = "<span></span><span></span><span></span>";
nav.appendChild(burger);
burger.addEventListener("click", () => nav.classList.toggle("abierto"));
nav.querySelectorAll("a:not(.logo)").forEach(a => a.addEventListener("click", () => nav.classList.remove("abierto")));
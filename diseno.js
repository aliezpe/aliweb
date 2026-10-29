// Carrusel de DISEÑO GRÁFICO (los datos están en projects.js -> disenos)
const greysD = ["#8d8d8d", "#a5a5a5", "#777", "#b9b9b9"];
const esVideo = f => /\.(mp4|webm|mov)$/i.test(f);
const ruta = f => "images/diseno/" + f;

// ¿Estamos en móvil? (mismo límite que en el CSS)
const movil = () => window.matchMedia("(max-width:800px)").matches;
let porPagina = movil() ? 1 : 3;      // móvil: 1 cartel por pantalla · ordenador: 3
let paginas = Math.ceil(disenos.length / porPagina);
let pagina = 0;

// Convierte direcciones web en enlaces clicables.
// Acepta una dirección suelta (https://...) o con texto: [Instagram](https://...)
function enlazar(t) {
  const seguro = (t || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return seguro.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<]+)/g,
    (m, txt, url1, url2) => `<a href="${url1 || url2}" target="_blank" rel="noopener">${txt || url2}</a>`);
}

const pista = document.getElementById("pista");
pista.innerHTML = disenos.map((p, i) => `
  <div class="item" data-i="${i}">
    <div class="img" style="--bg:${greysD[i % 4]}">
      ${esVideo(p.archivo)
        ? `<video src="${ruta(p.archivo)}" autoplay muted loop playsinline onerror="this.remove()"></video>`
        : `<img src="${ruta(p.archivo)}" alt="${p.nombre}" onerror="this.remove()">`}
    </div>
    <div class="label"><span>${String(i + 1).padStart(3, "0")}</span><span>${p.nombre}</span></div>
    <!-- Solo se ve en móvil: el texto va debajo del cartel -->
    <div class="item-info"><p>${enlazar(p.anio)}</p><p>${enlazar(p.texto)}</p></div>
  </div>`).join("");

function mover(dir) {
  pagina = Math.max(0, Math.min(paginas - 1, pagina + dir));
  pista.style.transform = `translateX(${-pagina * 100}%)`;
  document.getElementById("prev").classList.toggle("oculta", pagina === 0);
  document.getElementById("next").classList.toggle("oculta", pagina === paginas - 1);
}
document.getElementById("prev").onclick = () => mover(-1);
document.getElementById("next").onclick = () => mover(1);
mover(0);

// Si cambia el tamaño de la ventana entre móvil y ordenador, se reinicia el carrusel
window.addEventListener("resize", () => {
  const nuevo = movil() ? 1 : 3;
  if (nuevo !== porPagina) {
    porPagina = nuevo;
    paginas = Math.ceil(disenos.length / porPagina);
    pagina = 0;
    mover(0);
  }
});

// Scroll horizontal del trackpad
let bloqueado = false;
pista.parentElement.addEventListener("wheel", e => {
  if (Math.abs(e.deltaX) > 30 && !bloqueado) {
    e.preventDefault();
    bloqueado = true;
    mover(e.deltaX > 0 ? 1 : -1);
    setTimeout(() => bloqueado = false, 500);
  }
}, { passive: false });

// Deslizar con el dedo en el móvil
let x0 = null;
pista.parentElement.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
pista.parentElement.addEventListener("touchend", e => {
  if (x0 === null) return;
  const dx = e.changedTouches[0].clientX - x0;
  if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1);
  x0 = null;
});

// ---- ventana emergente (solo en ordenador; en móvil el texto va debajo) ----
const modal = document.getElementById("modal");

pista.addEventListener("click", e => {
  if (movil()) return;
  const it = e.target.closest(".item");
  if (!it) return;
  const p = disenos[it.dataset.i];

  document.getElementById("modalMedia").innerHTML = esVideo(p.archivo)
    ? `<video src="${ruta(p.archivo)}" controls autoplay loop></video>`
    : `<img src="${ruta(p.archivo)}" alt="${p.nombre}">`;

  document.getElementById("modalTitulo").textContent = p.nombre;
  document.getElementById("modalAnio").textContent = p.anio;
  document.getElementById("modalDesc").innerHTML = enlazar(p.texto);
  document.getElementById("modalDesc").style.whiteSpace = "pre-line";

  modal.classList.add("abierto");
  document.body.style.overflow = "hidden";
});

function cerrar() {
  modal.classList.remove("abierto");
  document.getElementById("modalMedia").innerHTML = "";
  document.body.style.overflow = "";
}
document.getElementById("cerrar").onclick = cerrar;
modal.addEventListener("click", e => { if (e.target === modal) cerrar(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
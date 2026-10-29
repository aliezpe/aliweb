// Página de proyecto: lee ?id=N de la URL y pinta los datos de projects.js
const id = parseInt(new URLSearchParams(location.search).get("id")) || 1;
const p = projects[id - 1] || projects[0];
const n = String(id).padStart(2, "0");
document.title = p.nombre + " · PEPIS PEPIS";
document.getElementById("titulo").textContent = p.nombre;

// Rellena una caja; si el campo está vacío o no existe, la caja se oculta
function campo(idElemento, texto, prefijo = "") {
  const el = document.getElementById(idElemento);
  if (!el) return;
  if (texto && String(texto).trim()) {
    el.textContent = prefijo + texto;
    el.style.whiteSpace = "pre-line"; // respeta los saltos de línea
  } else el.style.display = "none";
}
campo("anio", p.anio);
campo("participan", p.participan);
campo("extra", p.extra);
document.getElementById("descripcion").textContent = p.descripcion;
document.getElementById("descripcion").style.whiteSpace = "pre-line";

const archivos = p.media || Array.from({ length: p.fotos }, (_, i) => (i + 1) + ".jpg");
const esVideo = f => /\.(mp4|webm|mov)$/i.test(f);
document.getElementById("galeria").innerHTML = archivos.map((f, i) => `
  <div class="foto">${esVideo(f)
    ? `<video src="images/proyecto-${n}/${f}" autoplay muted loop playsinline controls onerror="this.remove()"></video>`
    : `<img src="images/proyecto-${n}/${f}" alt="${p.nombre} ${i + 1}" onerror="this.remove()">`}</div>`).join("");

// ---- Galería ampliada (lightbox) ----
const lb = document.getElementById("lightbox");
const lbPrincipal = document.getElementById("lbPrincipal");
const lbMin = document.getElementById("lbMiniaturas");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");
const rutaFoto = f => `images/proyecto-${n}/${f}`;
let actual = 0;

lbMin.innerHTML = archivos.map((f, i) => `
  <button class="lb-mini" data-i="${i}">${esVideo(f)
    ? `<img class="vthumb" alt=""><span class="lb-play">&#9654;</span>`
    : `<img src="${rutaFoto(f)}" alt="">`}</button>`).join("");

// Las miniaturas de vídeo se generan dibujando un fotograma del vídeo en un canvas
archivos.forEach((f, i) => {
  if (!esVideo(f)) return;
  const img = lbMin.querySelectorAll(".lb-mini")[i].querySelector(".vthumb");
  const v = document.createElement("video");
  v.muted = true; v.playsInline = true; v.preload = "auto"; v.src = rutaFoto(f);
  v.addEventListener("loadeddata", () => { v.currentTime = Math.min(0.5, (v.duration || 1) / 2); });
  v.addEventListener("seeked", () => {
    try {
      const c = document.createElement("canvas");
      c.width = c.height = 160;
      const lado = Math.min(v.videoWidth, v.videoHeight);
      c.getContext("2d").drawImage(v, (v.videoWidth - lado) / 2, (v.videoHeight - lado) / 2, lado, lado, 0, 0, 160, 160);
      img.src = c.toDataURL("image/jpeg", 0.7);
    } catch (e) {}
  }, { once: true });
});

function mostrar(i) {
  actual = Math.max(0, Math.min(archivos.length - 1, i));
  const f = archivos[actual];
  lbPrincipal.innerHTML = esVideo(f)
    ? `<video src="${rutaFoto(f)}" controls autoplay loop playsinline></video>`
    : `<img src="${rutaFoto(f)}" alt="${p.nombre} ${actual + 1}">`;
  lbPrev.classList.toggle("oculta", actual === 0);
  lbNext.classList.toggle("oculta", actual === archivos.length - 1);
  lbMin.querySelectorAll(".lb-mini").forEach(b => {
    const activa = Number(b.dataset.i) === actual;
    b.classList.toggle("activa", activa);
    if (activa) b.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  });
}
function abrir(i) { lb.classList.add("abierto"); document.body.style.overflow = "hidden"; mostrar(i); }
function cerrarLb() { lb.classList.remove("abierto"); lbPrincipal.innerHTML = ""; document.body.style.overflow = ""; }

document.getElementById("galeria").addEventListener("click", e => {
  const foto = e.target.closest(".foto");
  if (foto) abrir(Array.from(foto.parentNode.children).indexOf(foto));
});
lbPrev.onclick = () => mostrar(actual - 1);
lbNext.onclick = () => mostrar(actual + 1);
lbMin.addEventListener("click", e => { const b = e.target.closest(".lb-mini"); if (b) mostrar(Number(b.dataset.i)); });
document.getElementById("lbCerrar").onclick = cerrarLb;
lbPrincipal.addEventListener("click", e => { if (e.target === lbPrincipal) cerrarLb(); });
document.addEventListener("keydown", e => {
  if (!lb.classList.contains("abierto")) return;
  if (e.key === "Escape") cerrarLb();
  if (e.key === "ArrowLeft") mostrar(actual - 1);
  if (e.key === "ArrowRight") mostrar(actual + 1);
});
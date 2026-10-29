// Pinta la galería de la home a partir de projects.js
const greys = ["#8d8d8d", "#a5a5a5", "#777", "#b9b9b9"]; // relleno si falta la foto
document.getElementById("trabajos").innerHTML = projects.map((p, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `
<a class="card" href="proyecto.html?id=${i + 1}">
  <div class="img" style="--bg:${greys[i % 4]}">
    <img src="images/proyecto-${n}/portada.jpg" alt="${p.nombre}" onerror="this.remove()">
    <div class="glass"><span>${p.corta}</span></div>
  </div>
  <div class="label"><span>${String(i + 1).padStart(3, "0")}</span><span>${p.nombre}</span></div>
</a>`;
}).join("");

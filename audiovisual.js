// Página AUDIOVISUAL (datos en projects.js -> audiovisuales)
const esVid = f => /\.(mp4|webm|mov)$/i.test(f);
const cont = document.getElementById("audiovisual");

cont.innerHTML = audiovisuales.map((p, k) => `
<article class="av-proyecto" data-k="${k}">
  <!-- Columna izquierda: se queda fija -->
  <div class="av-info">
    <h2>${p.nombre}</h2>
    <p class="caja">${p.anio}</p>
    <p class="av-texto">${p.texto}</p>
    <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
  </div>
  <!-- Columna derecha: carrusel -->
  <div class="av-carrusel">
    <button class="flecha izq" aria-label="Anterior">&#8249;</button>
    <div class="av-viewport"><div class="av-pista">
      ${p.media.map(f => `<div class="av-slide">${esVid(f)
        ? `<video src="images/audiovisual/${p.carpeta}/${f}" autoplay muted loop playsinline controls onerror="this.remove()"></video>`
        : `<img src="images/audiovisual/${p.carpeta}/${f}" alt="${p.nombre}" onerror="this.remove()">`}</div>`).join("")}
    </div></div>
    <button class="flecha der" aria-label="Siguiente">&#8250;</button>
    <span class="av-contador"></span>
  </div>
</article>`).join("");

document.querySelectorAll(".av-proyecto").forEach(art => {
  const pista = art.querySelector(".av-pista");
  const total = audiovisuales[art.dataset.k].media.length;
  const prev = art.querySelector(".izq"), next = art.querySelector(".der");
  let n = 0;
  const ir = d => {
    n = Math.max(0, Math.min(total - 1, n + d));
    pista.style.transform = `translateX(${-n * 100}%)`;
    prev.classList.toggle("oculta", n === 0);
    next.classList.toggle("oculta", n === total - 1);
    art.querySelector(".av-contador").textContent = (n + 1) + " / " + total;
  };
  prev.onclick = () => ir(-1);
  next.onclick = () => ir(1);
  ir(0);
});
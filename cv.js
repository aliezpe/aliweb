// =====================================================
//  DATOS DEL CV. Cada línea es una entrada:
//  [ "año", "título", "nota (opcional)", "lugar", "ciudad", ["enlace1", "enlace2"] ]
//  Si no hay nota, deja "". Si no hay enlace, deja [].
// =====================================================
const cv = [
  {
    
    titulo: "FORMACIÓN ACADÉMICA",
    items: [
      ["2019-2024", "Grado en Bellas Artes", "", "Universidad Politécnica de Valencia", "",[] ],
      ["2024-2026", "Master en Artes Visuales y Multimedia", "", "Universidad Politécnica de Valencia", "", []],
    ]
  },
  {
    
    titulo: "EXPOSICIONES Y FESTIVALES",
    items: [
      ["2026", "Tu Primer Millón", "Exposición individual", "Fantastik Lab", "Valencia", ["https://www.fantastiklab.cc/2026/03/07/tu-primer-millon-la-jeta/"]],
      ["2026", "PAM!26", "", "Universitat Politècnica de València", "Valencia", ["https://redacts.org/pam26/"]],
      ["2025", "Alumbra Fest", "", "Sala Capilla del Hospital Real", "Granada", ["https://www.alumbrafest.es/alumbra-2025/exhibicion-muestra-artistica/"]],
      ["2025", "Estéticas frágiles. Prototipando universos complejos", "", "Festival Volumens, Centre del Carme Cultura Contemporània", "Valencia", ["https://www.consorcimuseus.gva.es/centro-del-carmen/exposicion/estetiques-fragils-prototipant-universos-complexos/?lang=es"]],
      ["2025", "Metamorfosis", "", "OffBeat Gallery", "Madrid", ["https://es.ra.co/events/2219933"]],
      ["2024", "Digital Entities", "Exposición individual", "Fantastik Lab", "Valencia", [ "https://www.fantastiklab.cc/2024/06/06/digital-entities/"]],
      ["2024", "Miss Espacial 2024", "", "Pluto", "Valencia", ["https://metalmagazine.eu/es/post/pluto-miss-espacial-24", "https://plutoforever.org/portfolio/miss-espacial-24/"]],
      ["2024", "TAKATÁ", "", "Espacio Multidisciplinar T4", "Valencia", ["https://www.visualartcv.com/el-colectivo-t4kata-ha-expuesto-en-la-t4-de-la-facultad-de-bb-aa/"]],
      ["2024", "Refraccions In Vitro", "", "Espai In Vitrina", "Valencia", ["https://www.visualartcv.com/el-colectivo-t4kata-ha-expuesto-en-la-t4-de-la-facultad-de-bb-aa/"]],
      ["2022", "Mercadillo del Arte. Trae tus cosas, no tus €€€", "", "IVAM", "Valencia", ["https://ivam.es/en/actividades/mercadillo-del-arte-trae-tus-cosas-no-tus-eee/"]]
    ]
  },
  {
    titulo: "EVENTOS",
    items: [
      ["2025", "Queerxata", "Proyecto de mediación y Live A/V", "Centre del Carme Cultura Contemporània", "Valencia", []],
      ["2025", "Vermút Audiovisual", "LIVE A/V", "Festival Volumens, La Fábrica de Hielo", "Valencia", []],
      ["17/09/2025", "IMPULSXLAJETA", "Live A/V", "Spook", "Valencia", []]
    ]
  },
  {
    titulo: "PREMIOS Y BECAS",
    items: [
      ["2026", "Obra seleccionada en el PAM!26", "", "Universitat Politècnica de València", "Valencia", ["https://redacts.org/pam26/"]],
      ["2026", "Mención de honor", "", "Premios La Torre de Babel", "Aragón", ["https://www.enjoyzaragoza.es/premios-talento-emergente-la-torre-de-babel/"]],
      ["2024", "Beca de residencia artística", "", "Espacio independiente Pluto", "Valencia", ["https://plutoforever.org/"]],
    ]
  },
  {
    titulo: "PUBLICACIONES, ARTÍCULOS Y CHARLAS",
    items: [
      ["2026", "ART+ TOPAKETAK", "Junto a Mónica Rikić y Corazón de Robota", "", "Estudio Gheada, Bilbao", ["https://www.gheada.com/portafolio/art_topaketa/"]],
      ["2026", "Ciberamigxs", "En conversación con L4R para Cultura con Acento", "La Casa Encendida", "Madrid", ["https://radio.lacasaencendida.es/programas/cultura-acento/"]],
      ["2026", "Sweaty Lobby", "Presentación de pitches de videojuegos en el Valencia Game City", "Las Naves", "Valencia", ["https://www.upv.es/estudios/master/muavm/2026/06/08/exposicion-de-videojuegos/"]],
      ["2025", "What the Internet Covers", "Flut Magazine, vol. 06", "Publicación online", "", ["https://www.flut-magazin.de/das-magazin"]],
      ["2024", "New Origins Through Internet", "Dry Magazine, issue 26", "Publicación online", "", ["https://collectibledry.com/fashion-and-beauty/issue-26/"]],
      ["2021", "La Jeta Tattoos", "", "Auditori Alfons Roig", "Valencia", []]
    ]
  }
];

// ---- A partir de aquí no hace falta tocar nada ----
// Orden de las columnas: TÍTULO · LUGAR · AÑO · LINK
document.getElementById("cv").innerHTML = cv.map(s => `
<section class="cv-seccion">
  <h2>${s.titulo}</h2>
  ${s.items.map(([anio, titulo, nota, lugar, ciudad, links]) => `
  <div class="cv-fila">
    <span class="cv-titulo">${titulo}${nota ? `<small>${nota}</small>` : ""}</span>
    <span class="cv-lugar">${[lugar, ciudad].filter(Boolean).join(" · ")}</span>
    <span class="cv-anio">${anio}</span>
    <span class="cv-links">${links.map((u, i) => `<a href="${u}" target="_blank" rel="noopener">LINK${links.length > 1 ? " " + (i + 1) : ""} ↗</a>`).join("")}</span>
  </div>`).join("")}
</section>`).join("");
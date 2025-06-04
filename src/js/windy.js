let windyAPIRef = null;
let marcadoresClicados = [];

const options = {
  key: '6dc328f7c218ea0001b6590927d3bfa7', // ⬅️ substitua pela sua
  verbose: true,
  lat: -23.66,
  lon: -46.53,
  zoom: 11,
  overlay: 'rain',
  level: 'surface',
  marker: true,
  menu: true,
  location: 'coordinates',
  detail: true,
  calendar: 'now'
};

function trocarCamada(novaCamada) {
  if (windyAPIRef) {
    windyAPIRef.store.set('overlay', novaCamada);
    console.log(`🧭 Camada alterada para: ${novaCamada}`);
  }
}

windyInit(options, function (windyAPI) {
  const { map, store, picker } = windyAPI;
  windyAPIRef = windyAPI; // salva referência global

  // 🖱️ Evento de clique no mapa
  map.on('click', function (e) {
    const { lat, lng } = e.latlng;
    const camadaAtual = store.get('overlay');

    // Salva o ponto
    marcadoresClicados.push({ lat, lng, camada: camadaAtual });

    // Cria popup
    const popup = L.popup()
      .setLatLng([lat, lng])
      .setContent(`
        <strong>📍 Coordenadas:</strong><br>
        Lat: ${lat.toFixed(4)}<br>
        Lon: ${lng.toFixed(4)}<br>
        <strong>🌀 Camada:</strong> ${camadaAtual}
      `)
      .openOn(map);

    console.log("🗺️ Novo ponto clicado:", marcadoresClicados);
  });
});

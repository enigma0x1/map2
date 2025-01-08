<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  let map;

  onMount(() => {
    // Harita oluşturma
    map = L.map('map').setView([0, 0], 2);

    // Retro tema ekleme
    L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
      attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL',
      maxZoom: 18,
      minZoom: 1,
      tileSize: 256
    }).addTo(map);

    // Opsiyonel: Harita kontrollerini ekleme
    L.control.scale().addTo(map);
    
    // Opsiyonel: Zoom kontrolleri
    map.zoomControl.setPosition('topright');

    // Opsiyonel: Harita sınırlarını belirleme
    const bounds = L.latLngBounds(
      L.latLng(-90, -180), // Güneybatı köşesi
      L.latLng(90, 180)    // Kuzeydoğu köşesi
    );
    map.setMaxBounds(bounds);

    // Opsiyonel: Harita yüklendikten sonra çalışacak fonksiyon
    map.on('load', () => {
      console.log('Harita yüklendi!');
    });

    // Opsiyonel: Harita tıklama olayı
    map.on('click', (e) => {
      console.log('Tıklanan koordinatlar:', e.latlng);
    });

    // Opsiyonel: Harita zoom olayı
    map.on('zoomend', () => {
      console.log('Yeni zoom seviyesi:', map.getZoom());
    });
  });

  // Opsiyonel: Component destroy edildiğinde haritayı temizleme
  onDestroy(() => {
    if (map) {
      map.remove();
    }
  });
</script>

<div id="map"></div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  #map {
    width: 100%;
    height: 100vh;
  }

  /* Leaflet kontrol stillerini özelleştirme */
  :global(.leaflet-control-zoom) {
    border: none !important;
    box-shadow: 0 0 10px rgba(0,0,0,0.2) !important;
  }

  :global(.leaflet-control-zoom-in),
  :global(.leaflet-control-zoom-out) {
    background-color: white !important;
    color: #333 !important;
  }

  :global(.leaflet-control-zoom-in:hover),
  :global(.leaflet-control-zoom-out:hover) {
    background-color: #f4f4f4 !important;
  }

  :global(.leaflet-control-attribution) {
    background-color: rgba(255,255,255,0.8) !important;
    padding: 5px 10px !important;
  }
</style>

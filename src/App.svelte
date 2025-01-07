// App.svelte
<script>
    import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';

    let map;

    onMount(async () => {
        map = new maplibregl.Map({
            container: 'map',
            style: {
                version: 8,
                sources: {
                    'osm': {
                        type: 'raster',
                        tiles: [
                            'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                        ],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors'
                    },
                    'countries': {
                        type: 'vector',
                        url: 'https://api.maptiler.com/data/countries.json'  // Ülke sınırları için vektör kaynak
                    }
                },
                layers: [{
                    id: 'osm-tiles',
                    type: 'raster',
                    source: 'osm',
                    minzoom: 0,
                    maxzoom: 19
                }]
            },
            center: [-3.7492, 40.4637],
            zoom: 3
        });

        map.on('load', async () => {
            // Ülke sınırlarını ekle
            map.addSource('countries-source', {
                type: 'geojson',
                data: 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
            });

            // Ülke katmanını ekle
            map.addLayer({
                id: 'countries-layer',
                type: 'fill',
                source: 'countries-source',
                paint: {
                    'fill-color': '#627BC1',
                    'fill-opacity': 0.5
                }
            });

            // Hover efekti
            map.on('mousemove', 'countries-layer', (e) => {
                if (e.features.length > 0) {
                    map.getCanvas().style.cursor = 'pointer';
                    map.setPaintProperty('countries-layer', 'fill-color', [
                        'case',
                        ['==', ['get', 'name'], e.features[0].properties.name],
                        '#ff0000',  // Hover rengi
                        '#627BC1'   // Normal renk
                    ]);
                }
            });

            // Mouse ülkeden çıkınca
            map.on('mouseleave', 'countries-layer', () => {
                map.getCanvas().style.cursor = '';
                map.setPaintProperty('countries-layer', 'fill-color', '#627BC1');
            });

            // Tıklama olayı
            map.on('click', 'countries-layer', (e) => {
                if (e.features.length > 0) {
                    const coordinates = e.lngLat;
                    const countryName = e.features[0].properties.name;

                    new maplibregl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(`
                            <h3>${countryName}</h3>
                            <p>Ülke hakkında detaylar buraya gelecek</p>
                        `)
                        .addTo(map);
                }
            });
        });
    });
</script>

<div id="map"></div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    :global(.maplibregl-popup) {
        max-width: 400px;
        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    }
</style>

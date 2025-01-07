// App.svelte
<script>
    import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';

    let map;
    let selectedCountry = null;

    onMount(() => {
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

            // Normal ülke katmanı
            map.addLayer({
                id: 'countries-layer',
                type: 'fill',
                source: 'countries-source',
                paint: {
                    'fill-color': [
                        'case',
                        ['==', ['get', 'name'], selectedCountry],
                        '#ff0000', // Seçili ülke rengi
                        'transparent' // Normal durumda şeffaf
                    ],
                    'fill-opacity': 0.5
                }
            });

            // Hover efekti için ayrı katman
            map.addLayer({
                id: 'countries-hover',
                type: 'fill',
                source: 'countries-source',
                paint: {
                    'fill-color': '#ff0000',
                    'fill-opacity': 0
                }
            });

            // Hover efekti
            map.on('mousemove', 'countries-layer', (e) => {
                if (e.features.length > 0) {
                    map.getCanvas().style.cursor = 'pointer';
                    const hoveredCountry = e.features[0].properties.name;
                    
                    if (hoveredCountry !== selectedCountry) {
                        map.setPaintProperty('countries-hover', 'fill-opacity', [
                            'case',
                            ['==', ['get', 'name'], hoveredCountry],
                            0.5,
                            0
                        ]);
                    }
                }
            });

            // Mouse ülkeden çıkınca
            map.on('mouseleave', 'countries-layer', () => {
                map.getCanvas().style.cursor = '';
                map.setPaintProperty('countries-hover', 'fill-opacity', 0);
            });

            // Tıklama olayı
            map.on('click', 'countries-layer', (e) => {
                if (e.features.length > 0) {
                    const clickedCountry = e.features[0].properties.name;
                    selectedCountry = clickedCountry;

                    map.setPaintProperty('countries-layer', 'fill-color', [
                        'case',
                        ['==', ['get', 'name'], selectedCountry],
                        '#ff0000',
                        'transparent'
                    ]);

                    new maplibregl.Popup()
                        .setLngLat(e.lngLat)
                        .setHTML(`<h3>${clickedCountry}</h3>`)
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
</style>

// App.svelte
<script>
    import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';
    import { americanStory } from './stories/americanStory';

    let map;
    let currentStory;

    onMount(() => {
        // Ana harita kurulumu
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

        map.on('load', () => {
            map.getCanvas().style.filter = 'sepia(50%) saturate(80%)';
            currentStory = americanStory.init(map);
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
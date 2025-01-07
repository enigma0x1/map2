<script>
    import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';

    onMount(() => {
        const map = new maplibregl.Map({
            container: 'map',
            style: {
                version: 8,
                sources: {
                    'simple-tiles': {
                        type: 'raster',
                        tiles: ['https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors'
                    }
                },
                layers: [{
                    id: 'simple-tiles',
                    type: 'raster',
                    source: 'simple-tiles',
                    minzoom: 0,
                    maxzoom: 22
                }]
            },
            center: [0, 0],
            zoom: 2
        });

        map.on('load', () => {
            map.getCanvas().style.filter = 'sepia(20%) brightness(105%)';
        });
    });
</script>

<div id="map"></div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
    }

    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
</style>

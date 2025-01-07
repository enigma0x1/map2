<script>
    import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';

    onMount(() => {
        new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [0, 0],
            zoom: 2
        });
    });
</script>

<div id="map"></div>

<style>
    #map { 
        width: 100%; 
        height: 100vh; 
    }
</style>

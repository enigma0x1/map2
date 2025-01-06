import maplibregl from 'maplibre-gl';

export const americanStory = {
    init: (map) => {
        let marker;
        let popup;
        let showPortrait = false;
        let showInfo = false;
        let showContinueButton = false;
        const route = [
            [-6.8981, 37.2338],    // Palos de la Frontera
            [-16.2549, 28.4698],   // Kanarya Adaları
            [-77.3963, 25.0343],   // San Salvador
            [-75.1062, 20.9517],   // Küba
            [-72.6057, 19.8968],   // Hispaniola
            [-6.8981, 37.2338]     // Geri dönüş
        ];

        // Gemi marker'ını oluştur
        const el = document.createElement('div');
        el.className = 'ship-marker';
        el.style.backgroundImage = 'url(/ship.png)';
        el.style.width = '50px';
        el.style.height = '50px';
        el.style.backgroundSize = 'contain';
        el.style.backgroundRepeat = 'no-repeat';
        marker = new maplibregl.Marker({
            element: el
        })
            .setLngLat(route[0])
            .addTo(map);
        marker.getElement().style.display = 'none';

        // Harita tıklama olayı
        const handleMapClick = (e) => {
            const lng = e.lngLat.lng;
            const lat = e.lngLat.lat;
            // Amerika kıtasına tıklandığında
            if (lng >= -130 && lng <= -30 && lat >= -60 && lat <= 80) {
                if (popup) popup.remove();
                popup = new maplibregl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(`
                        <div class="custom-popup">
                            <h3>Yeni Dünyayı Keşfet</h3>
                            <p>Columbus'un tarihi yolculuğunu başlat</p>
                            <button onclick="document.dispatchEvent(new Event('startStoryClicked'))">
                                Start the Story
                            </button>
                        </div>
                    `)
                    .addTo(map);
            }
        };

        // Mouse hareketi olayı
        const handleMouseMove = (e) => {
            const lng = e.lngLat.lng;
            const lat = e.lngLat.lat;
            if (lng >= -130 && lng <= -30 && lat >= -60 && lat <= 80) {
                map.getCanvas().style.cursor = 'pointer';
            } else {
                map.getCanvas().style.cursor = '';
            }
        };

        // Hikayeyi başlat
        const startStory = () => {
            if (popup) popup.remove();
            // Palos'a zoom yap
            map.flyTo({
                center: [-6.8981, 37.2338],
                zoom: 14,
                duration: 3000,
                essential: true
            });

            // Zoom tamamlandıktan sonra Palos'u renklendir
            setTimeout(() => {
                // Palos sınırlarını ekle
                map.addSource('palos-boundary', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Polygon',
                            'coordinates': [[
                                [-6.9081, 37.2238],
                                [-6.9061, 37.2258],
                                [-6.9031, 37.2278],
                                [-6.8981, 37.2338],
                                [-6.8951, 37.2378],
                                [-6.8921, 37.2398],
                                [-6.8881, 37.2418],
                                [-6.8861, 37.2398],
                                [-6.8841, 37.2378],
                                [-6.8821, 37.2358],
                                [-6.8801, 37.2338],
                                [-6.8821, 37.2318],
                                [-6.8841, 37.2298],
                                [-6.8881, 37.2278],
                                [-6.8921, 37.2258],
                                [-6.8961, 37.2238],
                                [-6.9001, 37.2218],
                                [-6.9041, 37.2228],
                                [-6.9081, 37.2238]
                            ]]
                        }
                    }
                });

                // Dolgu katmanını ekle
                map.addLayer({
                    'id': 'palos-fill',
                    'type': 'fill',
                    'source': 'palos-boundary',
                    'layout': {},
                    'paint': {
                        'fill-color': '#FF9800',
                        'fill-opacity': 0.5
                    }
                });

                // Sınır çizgisi katmanını ekle
                map.addLayer({
                    'id': 'palos-line',
                    'type': 'line',
                    'source': 'palos-boundary',
                    'layout': {},
                    'paint': {
                        'line-color': '#FF5722',
                        'line-width': 2
                    }
                });

                // Hikaye elementlerini göster
                const portrait = document.createElement('div');
                portrait.className = 'portrait visible';
                portrait.innerHTML = '<img src="/cc.png" alt="Christopher Columbus" />';
                document.body.appendChild(portrait);

                const infoBox = document.createElement('div');
                infoBox.className = 'info-box visible';
                infoBox.innerHTML = `
                    <h2>Christopher Columbus'un Yolculuğu</h2>
                    <p>3 Ağustos 1492'de, Christopher Columbus Palos de la Frontera limanından
                    Hindistan'a ulaşmak için batıya doğru yelken açtı...</p>
                `;
                document.body.appendChild(infoBox);

                const continueButton = document.createElement('button');
                continueButton.className = 'continue-button';
                continueButton.textContent = 'Yolculuğu Başlat';
                continueButton.onclick = startJourney;
                document.body.appendChild(continueButton);
            }, 3000);
        };

        // Yolculuğu başlat
        const startJourney = () => {
            // UI elementlerini kaldır
            document.querySelector('.portrait')?.remove();
            document.querySelector('.info-box')?.remove();
            document.querySelector('.continue-button')?.remove();

            // Tam ekran hikaye container'ı oluştur
            const storyContainer = document.createElement('div');
            storyContainer.className = 'fullscreen-story';
            document.body.appendChild(storyContainer);

            // Stil ekle
            const storyStyle = document.createElement('style');
            storyStyle.textContent = `
                .fullscreen-story {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2000;
                    background: black;
                }
                .story-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .story-caption {
                    position: absolute;
                    bottom: 15%;
                    left: 50%;
                    transform: translateX(-50%);
                    color: white;
                    font-size: 24px;
                    text-align: center;
                    max-width: 80%;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
                    font-family: Arial, sans-serif;
                    line-height: 1.5;
                    background: rgba(0,0,0,0.5);
                    padding: 20px;
                    border-radius: 10px;
                }
            `;
            document.head.appendChild(storyStyle);

            // Saray sahnesini göster
            const palaceScene = document.createElement('div');
            palaceScene.innerHTML = `
                <img src="/palace.jpg" alt="Palace" class="story-image">
                <div class="story-caption">
                    1492'nin başlarında, İspanya Kraliçesi Isabella ve Kral Ferdinand, Kristof Kolomb'un Batı rotasından Hindistan'a ulaşma projesini değerlendirdi. Dönemin en önemli coğrafi keşif girişimlerinden biri olacak bu proje, başlangıçta saray danışmanları tarafından riskli bulunsa da...
                </div>
            `;
            storyContainer.appendChild(palaceScene);

            // 7 saniye sonra ikinci altyazıyı göster
            setTimeout(() => {
                palaceScene.querySelector('.story-caption').innerHTML = 
                    "Kraliçe Isabella'nın desteğiyle, üç gemilik bir filo ve mürettebat için gerekli finansman sağlandı. Bu karar, dünya tarihinin akışını değiştirecek bir yolculuğun başlangıcı oldu.";
            }, 7000);
        };

        // Event listener'ları ekle
        map.on('click', handleMapClick);
        map.on('mousemove', handleMouseMove);
        document.addEventListener('startStoryClicked', startStory);

        // Stil ekle
        const style = document.createElement('style');
        style.textContent = `
            .portrait {
                position: absolute;
                right: -300px;
                top: 50px;
                transition: right 1s ease-out;
                z-index: 1000;
            }
            .portrait.visible {
                right: 20px;
            }
            .portrait img {
                width: 200px;
                height: auto;
                border-radius: 10px;
                box-shadow: 0 0 20px rgba(0,0,0,0.3);
            }
            .info-box {
                position: absolute;
                left: -400px;
                top: 50px;
                background: white;
                padding: 20px;
                border-radius: 10px;
                width: 300px;
                transition: left 1s ease-out;
                z-index: 1000;
                box-shadow: 0 0 20px rgba(0,0,0,0.3);
            }
            .info-box.visible {
                left: 20px;
            }
            .continue-button {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 50px;
                padding: 15px 30px;
                font-size: 18px;
                background-color: #ff7800;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                z-index: 1000;
            }
            .custom-popup {
                text-align: center;
                padding: 10px;
            }
            .custom-popup h3 {
                margin: 0 0 10px 0;
                color: #333;
            }
            .custom-popup p {
                margin: 0 0 15px 0;
                color: #666;
            }
            .custom-popup button {
                background: #ff7800;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
                transition: background 0.3s;
            }
            .custom-popup button:hover {
                background: #ff9033;
            }
        `;
        document.head.appendChild(style);

        // Cleanup fonksiyonu
        return {
            cleanup: () => {
                map.off('click', handleMapClick);
                map.off('mousemove', handleMouseMove);
                document.removeEventListener('startStoryClicked', startStory);
                if (marker) marker.remove();
                if (popup) popup.remove();
                document.querySelector('.portrait')?.remove();
                document.querySelector('.info-box')?.remove();
                document.querySelector('.continue-button')?.remove();
                if (map.getLayer('palos-fill')) map.removeLayer('palos-fill');
                if (map.getLayer('palos-line')) map.removeLayer('palos-line');
                if (map.getSource('palos-boundary')) map.removeSource('palos-boundary');
            }
        };
    }
};